import portfolio from '@/content/portfolio.json';
export const data = portfolio;
export type Project = (typeof data.projects)[number];
export const baseUrl = data.site.url.replace(/\/$/, '');
export const projects = data.projects;
export function projectBySlug(slug: string) { return projects.find(project => project.slug === slug); }
