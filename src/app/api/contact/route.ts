import { headers } from "next/headers";

const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 4000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const ipRateLimitStore = new Map<string, RateLimitEntry>();

function isContactFormEnabled(): boolean {
  const value =
    process.env.CONTACT_FORM_ENABLED?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED?.trim() ||
    "";

  return value.toLowerCase() === "true";
}

type ContactPayload = {
  locale?: unknown;
  name?: unknown;
  email?: unknown;
  outline?: unknown;
  website?: unknown;
};

function normalizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(body: ContactPayload) {
  const name = normalizeText(body.name);
  const email = normalizeText(body.email).toLowerCase();
  const outline = normalizeText(body.outline);
  const website = normalizeText(body.website);
  const locale = normalizeText(body.locale) || "en";

  if (website) {
    throw new Error("Spam check failed.");
  }

  if (name.length < 2 || name.length > 120) {
    throw new Error("Please provide a valid name.");
  }

  if (!EMAIL_REGEX.test(email) || email.length > 160) {
    throw new Error("Please provide a valid email address.");
  }

  if (outline.length < 20 || outline.length > MAX_FIELD_LENGTH) {
    throw new Error("Please provide a clearer project outline.");
  }

  return { locale, name, email, outline };
}

function buildPlainTextEmail({
  locale,
  name,
  email,
  outline,
  ipAddress,
}: {
  locale: string;
  name: string;
  email: string;
  outline: string;
  ipAddress: string;
}) {
  return [
    "New 3liksir contact inquiry",
    "",
    `Locale: ${locale}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `IP: ${ipAddress}`,
    "",
    "Outline:",
    outline,
  ].join("\n");
}

function getClientIpAddress(requestHeaders: Headers): string {
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }

  return (
    requestHeaders.get("x-real-ip")?.trim() ||
    requestHeaders.get("cf-connecting-ip")?.trim() ||
    "unknown"
  );
}

function enforceRateLimit(ipAddress: string) {
  const now = Date.now();
  const existing = ipRateLimitStore.get(ipAddress);

  if (!existing || now > existing.resetAt) {
    ipRateLimitStore.set(ipAddress, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { blocked: false };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { blocked: true, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  ipRateLimitStore.set(ipAddress, existing);
  return { blocked: false };
}

export async function POST(request: Request) {
  if (!isContactFormEnabled()) {
    return Response.json(
      {
        ok: false,
        error: "Contact form submissions are currently disabled.",
      },
      { status: 503 },
    );
  }

  let payload: ReturnType<typeof validatePayload>;

  try {
    const body = (await request.json()) as ContactPayload;
    payload = validatePayload(body);
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Invalid request body.",
      },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "3liksirdesigns@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "3liksir contact <onboarding@resend.dev>";
  const replyToEmail = payload.email;

  if (!resendApiKey) {
    return Response.json(
      {
        ok: false,
        error: "Server email is not configured yet. Set RESEND_API_KEY to enable form delivery.",
      },
      { status: 503 },
    );
  }

  const requestHeaders = await headers();
  const ipAddress = getClientIpAddress(requestHeaders);
  const rateLimit = enforceRateLimit(ipAddress);

  if (rateLimit.blocked) {
    return Response.json(
      {
        ok: false,
        error: "Too many requests. Please try again in a few minutes.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds ?? 60),
        },
      },
    );
  }

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: replyToEmail,
      subject: `3liksir inquiry from ${payload.name}`,
      text: buildPlainTextEmail({
        ...payload,
        ipAddress,
      }),
    }),
  });

  if (!resendResponse.ok) {
    const details = await resendResponse.text();
    console.error("Contact email delivery failed:", details);

    return Response.json(
      {
        ok: false,
        error: "Email delivery failed.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
