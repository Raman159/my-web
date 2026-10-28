import type { MetadataRoute } from 'next';
import { projects, baseUrl } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/projects/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...projects.map((p) => ({
      url: `${baseUrl}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
