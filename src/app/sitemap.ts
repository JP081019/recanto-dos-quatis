import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
export default function sitemap():MetadataRoute.Sitemap{return site.url?[{url:site.url,changeFrequency:'monthly',priority:1}]:[];}
