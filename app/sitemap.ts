import type {MetadataRoute} from 'next';
import {projects,baseUrl} from '@/lib/data';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap {return [{url:`${baseUrl}/`,changeFrequency:'monthly',priority:1},...projects.map(p=>({url:`${baseUrl}/projects/${p.slug}/`,changeFrequency:'yearly' as const,priority:.8}))]}
