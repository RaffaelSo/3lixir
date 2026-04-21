import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, ".artifacts", "playwright");
const outputFile = path.join(outputDir, "smoke.png");
const featuredOutputFile = path.join(outputDir, "featured-image.png");
const targetUrl = process.env.PW_SMOKE_URL ?? "http://localhost:3000/en";
const minFeaturedAverageLuminance = Number(process.env.PW_MIN_FEATURED_LUMINANCE ?? 28);
const minFeaturedReadableRatio = Number(process.env.PW_MIN_FEATURED_READABLE_RATIO ?? 0.16);

function resolveExecutablePath() {
  if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE) {
    return process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
  }

  const tmpDir = process.env.TMPDIR;
  const candidates = [
    tmpDir
      ? path.join(
          tmpDir,
          "cursor-sandbox-cache",
          "79d1538f183ea943b00f5ff9555941e1",
          "playwright",
          "chromium_headless_shell-1217",
          "chrome-headless-shell-mac-arm64",
          "chrome-headless-shell",
        )
      : "",
    tmpDir
      ? path.join(
          tmpDir,
          "cursor-sandbox-cache",
          "79d1538f183ea943b00f5ff9555941e1",
          "playwright",
          "chromium_headless_shell-1217",
          "chrome-headless-shell-mac-x64",
          "chrome-headless-shell",
        )
      : "",
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate));
}

async function getImageLuminanceStats(buffer) {
  const { data, info } = await sharp(buffer)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let luminanceSum = 0;
  let readablePixels = 0;
  const pixelCount = info.width * info.height;

  for (let index = 0; index < data.length; index += info.channels) {
    const red = data[index] ?? 0;
    const green = data[index + 1] ?? 0;
    const blue = data[index + 2] ?? 0;
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

    luminanceSum += luminance;
    if (luminance >= 38) readablePixels += 1;
  }

  return {
    averageLuminance: luminanceSum / pixelCount,
    readableRatio: readablePixels / pixelCount,
  };
}

async function assertFeaturedImageVisible(page) {
  const featuredArticle = page
    .locator("#featured-heading")
    .locator("xpath=ancestor::section[1]")
    .locator("article")
    .first();
  const featuredImageShell = featuredArticle.locator("a > div").first();
  const featuredFrame = featuredArticle.locator(".featured-image-frame").first();

  await featuredArticle.scrollIntoViewIfNeeded();
  await featuredImageShell.waitFor({ state: "visible", timeout: 10_000 });
  await featuredFrame.waitFor({ state: "attached", timeout: 10_000 });

  const imageState = await featuredFrame.locator("img").first().evaluate((image) => {
    if (!(image instanceof HTMLImageElement)) {
      return { complete: false, naturalWidth: 0, naturalHeight: 0 };
    }

    return {
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
    };
  });

  if (!imageState.complete || imageState.naturalWidth === 0 || imageState.naturalHeight === 0) {
    throw new Error(
      `Featured image did not load correctly: ${JSON.stringify(imageState)}`,
    );
  }

  await page.waitForTimeout(500);
  const buffer = await featuredImageShell.screenshot({ path: featuredOutputFile });
  const stats = await getImageLuminanceStats(buffer);

  if (
    stats.averageLuminance < minFeaturedAverageLuminance ||
    stats.readableRatio < minFeaturedReadableRatio
  ) {
    throw new Error(
      [
        "Featured image is still too dark.",
        `Average luminance: ${stats.averageLuminance.toFixed(2)} / minimum ${minFeaturedAverageLuminance}`,
        `Readable pixel ratio: ${(stats.readableRatio * 100).toFixed(2)}% / minimum ${(minFeaturedReadableRatio * 100).toFixed(2)}%`,
        `Screenshot: ${featuredOutputFile}`,
      ].join("\n"),
    );
  }

  console.log(
    `Featured image visibility OK: luminance ${stats.averageLuminance.toFixed(2)}, readable ${(stats.readableRatio * 100).toFixed(2)}%`,
  );
  console.log(`Featured screenshot: ${featuredOutputFile}`);
}

async function run() {
  const executablePath = resolveExecutablePath();
  const launchOptions = executablePath ? { executablePath } : undefined;
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: 30_000 });
  await page.waitForTimeout(1_000);

  fs.mkdirSync(outputDir, { recursive: true });
  await page.screenshot({ path: outputFile, fullPage: false });
  await assertFeaturedImageVisible(page);

  console.log(`Smoke test OK: ${await page.title()}`);
  console.log(`Screenshot: ${outputFile}`);

  await browser.close();
}

run().catch((error) => {
  console.error("Playwright smoke test failed.");
  console.error(error);
  process.exit(1);
});
