import { data, baseUrl } from '@/lib/data';

export default function SeoJsonLd() {
  const personId = `${baseUrl}/#person`;
  const websiteId = `${baseUrl}/#website`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: data.profile.name,
        url: `${baseUrl}/`,
        image: `${baseUrl}${data.profile.photo}`,
        jobTitle: data.profile.jobTitle,
        description: data.site.description,
        email: `mailto:${data.contact.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kathmandu',
          addressCountry: 'NP',
        },
        homeLocation: { '@type': 'Place', name: data.contact.location },
        sameAs: data.socialAccounts.map((s) => s.url).filter(Boolean),
        knowsAbout: ['Frontend development', 'UI/UX design', 'React', 'Next.js', 'Web design'],
        alumniOf: data.education.map((item) => ({
          '@type': 'EducationalOrganization',
          name: item.institution,
        })),
        worksFor: data.experience
          .filter((item) => item.end === 'Present')
          .map((item) => ({ '@type': 'Organization', name: item.company })),
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: data.profile.name,
        url: `${baseUrl}/`,
        inLanguage: 'en-US',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfessionalService',
        name: `${data.profile.name} — Freelance Frontend Development`,
        url: `${baseUrl}/`,
        image: `${baseUrl}${data.site.ogImage}`,
        telephone: data.contact.phone || undefined,
        email: data.contact.email,
        areaServed: ['Kathmandu', 'Nepal'],
        serviceType: ['Frontend Development', 'UI/UX Design', 'Website Design'],
        founder: { '@id': personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  );
}
