"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { useSiteLocale } from "@/contexts/site-locale-context";

const copy = {
  en: {
    title: "Imprint",
    operator: "Operator",
    contact: "Contact",
    city: "Berlin, Germany",
    privateStatus: "Current status",
    privateStatusBody:
      "This website is currently operated privately and is not yet presented as a commercial service. The legal information on this page is intended as a cautious baseline for a public portfolio website.",
    addressNotice: "Postal address notice",
    addressNoticeBody:
      "A complete postal address must be added before any commercial use or where mandatory legal disclosure requires it.",
    liabilityContent: "Liability for content",
    liabilityContentBody:
      "This site’s content is prepared with care. We do not guarantee completeness, accuracy, or that it is up to date.",
    liabilityLinks: "Liability for links",
    liabilityLinksBody:
      "This website may contain links to external sites. The respective operators are solely responsible for their content.",
    copyright: "Copyright",
    copyrightBody:
      "Text, images, and layout are protected by copyright and related rights unless otherwise stated.",
  },
  de: {
    title: "Impressum",
    operator: "Anbieter",
    contact: "Kontakt",
    city: "Berlin, Deutschland",
    privateStatus: "Aktueller Status",
    privateStatusBody:
      "Diese Website wird derzeit privat betrieben und noch nicht als geschäftliches Angebot geführt. Die Angaben auf dieser Seite sollen einen vorsichtigen rechtlichen Mindeststandard für eine öffentlich erreichbare Portfolio-Website herstellen.",
    addressNotice: "Hinweis zur Postanschrift",
    addressNoticeBody:
      "Vor geschäftlicher Nutzung oder wenn die gesetzlichen Pflichtangaben im Einzelfall greifen, ist eine vollständige ladungsfähige Anschrift zu ergänzen.",
    liabilityContent: "Haftung für Inhalte",
    liabilityContentBody:
      "Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr.",
    liabilityLinks: "Haftung für Links",
    liabilityLinksBody:
      "Diese Website kann Verknüpfungen zu externen Websites enthalten. Für deren Inhalte ist stets der jeweilige Anbieter verantwortlich.",
    copyright: "Urheberrecht",
    copyrightBody:
      "Texte, Bilder und das Layout dieser Website unterliegen dem Schutz des Urheberrechts und verwandter Schutzrechte, soweit nichts anderes angegeben ist.",
  },
  ru: {
    title: "Правовая информация",
    operator: "Оператор сайта",
    contact: "Контакт",
    city: "Берлин, Германия",
    privateStatus: "Текущий статус",
    privateStatusBody:
      "Сайт сейчас ведётся частным образом и пока не позиционируется как коммерческий сервис. Правовая информация на этой странице добавлена как осторожный базовый минимум для публичного портфолио.",
    addressNotice: "Примечание об адресе",
    addressNoticeBody:
      "До начала коммерческого использования или если по закону потребуется полное раскрытие данных, необходимо добавить полный почтовый адрес для вручения корреспонденции.",
    liabilityContent: "Ответственность за содержание",
    liabilityContentBody:
      "Содержание сайта подготовлено тщательно, однако мы не гарантируем полноту, точность и актуальность информации.",
    liabilityLinks: "Ответственность за ссылки",
    liabilityLinksBody:
      "Сайт может содержать ссылки на внешние ресурсы. За их содержание отвечают соответствующие владельцы.",
    copyright: "Авторские права",
    copyrightBody:
      "Тексты, изображения и макет сайта защищены авторским правом и смежными правами, если не указано иное.",
  },
} as const;

export function ImprintPageContent() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell
      as="div"
      className="pb-28 pt-16 sm:pb-36 sm:pt-20 lg:pb-44 lg:pt-24"
    >
      <article aria-labelledby="imprint-heading">
        <h1
          id="imprint-heading"
          className="font-display-editorial text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]"
        >
          {text.title}
        </h1>

        <div className="mt-14 max-w-2xl space-y-10 text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/52">
          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.operator}
            </h2>
            <p>
              3liksir
              <br />
              {text.city}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.contact}
            </h2>
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
              {text.addressNotice}
            </h2>
            <p>{text.addressNoticeBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.liabilityContent}
            </h2>
            <p>{text.liabilityContentBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.liabilityLinks}
            </h2>
            <p>{text.liabilityLinksBody}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              {text.copyright}
            </h2>
            <p>{text.copyrightBody}</p>
          </section>
        </div>
      </article>
    </SectionShell>
  );
}
