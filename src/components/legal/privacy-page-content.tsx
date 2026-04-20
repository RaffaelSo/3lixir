"use client";

import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getPublicSiteUrl } from "@/lib/seo-config";

const analyticsEnabled =
  process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS?.trim().toLowerCase() === "true";

const copy = {
  en: {
    title: "Privacy",
    controller: "Data controller",
    city: "Berlin, Germany",
    privateStatus: "Current status of the website",
    privateStatusBody:
      "This website is currently operated privately and is not yet presented as a commercial service. The legal text on this page is provided as a cautious transparency baseline for a public portfolio website.",
    hosting: "Hosting",
    hostingBody:
      "This site is hosted on Vercel Inc. (United States). When you visit pages, technically necessary data is processed (for example IP address, time of access, requested file) to deliver the site and maintain security (legitimate interests). See Vercel’s privacy policy:",
    analytics: "Web analytics and performance",
    analyticsBodyEnabled:
      "We use Vercel Web Analytics and Vercel Speed Insights for reach and performance insight. We do not add additional marketing or social trackers. Details are described in Vercel’s documentation (see link above).",
    analyticsBodyDisabled:
      "Vercel Web Analytics and Vercel Speed Insights are currently disabled. No additional marketing or social trackers are active at present.",
    contact: "Contact by email",
    contactBody:
      "If you email us, we process the data you send to handle your request.",
    formStatus: "Contact form",
    formStatusBody:
      "The website’s contact form is currently disabled and does not accept submissions. If this changes later, this privacy notice must be updated before the form is activated again.",
    recipients: "Recipients and processors",
    recipientsBody:
      "Hosting is provided via Vercel Inc. (United States). Depending on technical configuration, data may be processed in countries outside the European Union. We rely on the provider’s contractual and organizational safeguards; see the provider privacy information linked above.",
    retention: "Storage period",
    retentionBody:
      "We keep personal data only as long as necessary for the respective purpose or as long as statutory retention duties require.",
    rights: "Your rights",
    rightsBody:
      "Where applicable law provides, you may have rights of access, rectification, erasure, restriction, portability, and objection, as well as the right to lodge a complaint with a supervisory authority.",
    updated: "Last updated: April 2026 · Website:",
  },
  de: {
    title: "Datenschutz",
    controller: "Verantwortliche Stelle",
    city: "Berlin, Deutschland",
    privateStatus: "Aktueller Status der Website",
    privateStatusBody:
      "Diese Website wird derzeit privat betrieben und noch nicht als geschäftliches Angebot geführt. Die Hinweise auf dieser Seite dienen als vorsichtiger Transparenzstandard für eine öffentlich erreichbare Portfolio-Website.",
    hosting: "Hosting und technische Bereitstellung",
    hostingBody:
      "Diese Website wird über die Plattform Vercel Inc. (USA) bereitgestellt. Beim Aufruf der Seiten werden technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Datei). Die Verarbeitung erfolgt zur Bereitstellung der Website und zur Gewährleistung der Sicherheit (berechtigtes Interesse). Weitere Angaben finden Sie in der Datenschutzerklärung von Vercel:",
    analytics: "Web Analytics und Performance",
    analyticsBodyEnabled:
      "Zur Reichweitenmessung und zur Verbesserung der technischen Performance nutzen wir Vercel Web Analytics und Vercel Speed Insights. Es werden keine zusätzlichen Marketing- oder Social-Media-Tracker eingebunden. Details ergeben sich aus der Dokumentation von Vercel (siehe Link oben).",
    analyticsBodyDisabled:
      "Vercel Web Analytics und Vercel Speed Insights sind derzeit deaktiviert. Zusätzliche Marketing- oder Social-Media-Tracker sind aktuell nicht aktiv.",
    contact: "Kontaktaufnahme",
    contactBody:
      "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten zur Bearbeitung der Anfrage.",
    formStatus: "Kontaktformular",
    formStatusBody:
      "Das Kontaktformular dieser Website ist derzeit deaktiviert und nimmt keine Übermittlungen an. Sollte es später wieder aktiviert werden, ist diese Datenschutzerklärung vorab entsprechend zu aktualisieren.",
    recipients: "Empfänger und Dienstleister",
    recipientsBody:
      "Das Hosting erfolgt über Vercel Inc. (USA). Je nach technischer Konfiguration kann eine Verarbeitung personenbezogener Daten auch in Staaten außerhalb der Europäischen Union stattfinden. Maßgeblich sind die vertraglichen und organisatorischen Schutzmaßnahmen des Anbieters; weitere Informationen finden Sie über den oben verlinkten Datenschutzhinweis.",
    retention: "Speicherdauer",
    retentionBody:
      "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
    rights: "Ihre Rechte",
    rightsBody:
      "Sie haben im Rahmen der geltenden gesetzlichen Vorgaben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen. Außerdem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.",
    updated: "Stand: April 2026 · Website:",
  },
  ru: {
    title: "Конфиденциальность",
    controller: "Оператор данных",
    city: "Берлин, Германия",
    privateStatus: "Текущий статус сайта",
    privateStatusBody:
      "Сайт сейчас ведётся частным образом и пока не позиционируется как коммерческий сервис. Текст на этой странице добавлен как осторожный базовый уровень прозрачности для публичного портфолио.",
    hosting: "Хостинг",
    hostingBody:
      "Сайт размещён на платформе Vercel Inc. (США). При посещении страниц обрабатываются технически необходимые данные (например IP-адрес, время доступа, запрошенный файл) для доставки сайта и обеспечения безопасности (законный интерес). Политика конфиденциальности Vercel:",
    analytics: "Веб-аналитика и производительность",
    analyticsBodyEnabled:
      "Мы используем Vercel Web Analytics и Vercel Speed Insights для понимания охвата и технической производительности. Дополнительные маркетинговые или социальные трекеры не подключаются. Подробности описаны в документации Vercel (см. ссылку выше).",
    analyticsBodyDisabled:
      "Vercel Web Analytics и Vercel Speed Insights сейчас отключены. Дополнительные маркетинговые или социальные трекеры в данный момент не активны.",
    contact: "Связь по email",
    contactBody:
      "Если вы пишете нам по почте, мы обрабатываем отправленные данные для ответа на запрос.",
    formStatus: "Контактная форма",
    formStatusBody:
      "Контактная форма сайта сейчас отключена и не принимает отправки. Если позже она будет снова включена, этот текст о конфиденциальности нужно обновить до повторной активации формы.",
    recipients: "Получатели и обработчики",
    recipientsBody:
      "Хостинг предоставляется через Vercel Inc. (США). В зависимости от технической конфигурации обработка данных может происходить и за пределами Европейского союза. Применяются договорные и организационные гарантии поставщика; см. политику конфиденциальности по ссылке выше.",
    retention: "Срок хранения",
    retentionBody:
      "Персональные данные хранятся только столько, сколько необходимо для соответствующей цели, либо пока этого требуют обязательные сроки хранения по закону.",
    rights: "Ваши права",
    rightsBody:
      "В рамках применимого законодательства вы можете иметь право на доступ, исправление, удаление, ограничение обработки, переносимость данных и возражение, а также право подать жалобу в надзорный орган.",
    updated: "Обновлено: апрель 2026 · Сайт:",
  },
} as const;

export function PrivacyPageContent() {
  const { locale } = useSiteLocale();
  const text = copy[locale];
  const siteUrl = getPublicSiteUrl();

  return (
    <SectionShell
      as="div"
      className="pb-28 pt-16 sm:pb-36 sm:pt-20 lg:pb-44 lg:pt-24"
    >
      <article aria-labelledby="privacy-heading">
        <h1
          id="privacy-heading"
          className="font-display-editorial text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]"
        >
          {text.title}
        </h1>

        <div className="mt-14 max-w-2xl space-y-10 text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/52">
          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.controller}
            </h2>
            <p>
              3liksir
              <br />
              {text.city}
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:3liksirdesigns@gmail.com"
                className="text-white/70 underline decoration-white/15 underline-offset-[0.25em] transition duration-500 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                3liksirdesigns@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.privateStatus}
            </h2>
            <p>{text.privateStatusBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.hosting}
            </h2>
            <p>
              {text.hostingBody}{" "}
              <Link
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline decoration-white/15 underline-offset-[0.25em] transition duration-500 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                vercel.com/legal/privacy-policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.analytics}
            </h2>
            <p>{analyticsEnabled ? text.analyticsBodyEnabled : text.analyticsBodyDisabled}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.contact}
            </h2>
            <p>{text.contactBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.formStatus}
            </h2>
            <p>{text.formStatusBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.recipients}
            </h2>
            <p>{text.recipientsBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.retention}
            </h2>
            <p>{text.retentionBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.rights}
            </h2>
            <p>{text.rightsBody}</p>
          </section>

          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.24em] text-white/28">
            {text.updated} {siteUrl}
          </p>
        </div>
      </article>
    </SectionShell>
  );
}
