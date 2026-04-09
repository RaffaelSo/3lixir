import { getSiteUrl, siteConfig } from "@/lib/seo-config";

/**
 * Person JSON-LD for brand entity (Google rich results / knowledge panel signals).
 * Renders once in the document; keep a single instance in the root layout.
 */
export function JsonLdPerson() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.person.name,
    alternateName: siteConfig.person.alternateName,
    jobTitle: siteConfig.person.jobTitle,
    url: getSiteUrl(),
    sameAs: [siteConfig.instagramUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.person.addressLocality,
      addressCountry: siteConfig.person.addressCountry,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}
