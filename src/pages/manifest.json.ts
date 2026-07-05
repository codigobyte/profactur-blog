import { getCollection } from 'astro:content';
import { SITE_URL, readingMinutes } from '@/lib/site';

/**
 * Manifest para el home de Laravel — fix del "artículos falsos" de
 * tiempolisto (COD-230 #2): el widget "últimos artículos" del marketing lee
 * este JSON de disco (/var/www/profactur-blog/dist/blog/manifest.json) y
 * siempre linkea posts reales. Se regenera en cada build.
 */
export async function GET() {
  const entries = await getCollection('blog', (e) => !e.data.draft);
  entries.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  const posts = entries.slice(0, 6).map((entry) => ({
    slug: entry.id,
    url: `${SITE_URL}/${entry.id}`,
    title: entry.data.title,
    description: entry.data.description,
    category: entry.data.category,
    publishedAt: entry.data.publishedAt.toISOString().slice(0, 10),
    readingMinutes: readingMinutes(entry.body),
  }));

  return new Response(
    JSON.stringify({ generatedAt: new Date().toISOString(), site: SITE_URL, posts }, null, 2),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
  );
}
