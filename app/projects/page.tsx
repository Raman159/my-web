import type { Metadata } from 'next';
import { projects, baseUrl, data } from '@/lib/data';
import ProjectCard from '@/components/project-card';

export const metadata: Metadata = {
  title: { absolute: 'Projects | Raman Maharjan – Web Design & Development Case Studies' },
  description:
    'Case studies from Raman Maharjan, a frontend developer and UI designer in Kathmandu: Eventraa, HEATHA, ads!jobs, Tashya & Co., and more.',
  alternates: { canonical: '/projects/' },
  openGraph: {
    type: 'website',
    url: '/projects/',
    title: 'Projects | Raman Maharjan',
    description: 'Web design and development case studies for startups, NGOs, and brands in Nepal.',
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects by Raman Maharjan',
    description: 'Selected web design and frontend development case studies.',
    url: `${baseUrl}/projects/`,
    isPartOf: { '@type': 'WebSite', url: `${baseUrl}/` },
    about: { '@type': 'Person', name: data.profile.name, url: `${baseUrl}/` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${baseUrl}/projects/${project.slug}/`,
        name: project.title,
      })),
    },
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="classic-section border-b border-line bg-white">
        <div className="classic-container py-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[.14em] text-[#315c8c]">Portfolio</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Web design and frontend development projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest">
            Case studies covering the problem, my role, the tools used, and the result — including Eventraa, HEATHA, ads!jobs, and Tashya &amp; Co.
          </p>
        </div>
      </section>
      <section className="classic-section bg-[#f6f6f6]">
        <div className="classic-container py-16 md:py-20">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
