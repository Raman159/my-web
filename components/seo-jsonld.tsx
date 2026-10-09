import { data, baseUrl } from "@/lib/data";
export default function SeoJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.profile.name,
    url: baseUrl,
    jobTitle: data.profile.role,
    description: data.profile.intro,
    homeLocation: { "@type": "Place", name: data.contact.location },
    sameAs: data.socialAccounts.map((s) => s.url).filter(Boolean),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
