import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { BASE, SITE_ORIGIN } from '@/lib/site';

export async function GET(context: APIContext) {
  const entries = await getCollection('blog', (e) => !e.data.draft);
  entries.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  return rss({
    // Links sin trailing slash — consistente con trailingSlash: 'never'.
    trailingSlash: false,
    title: 'Blog | ProFactur',
    description:
      'Guías de facturación electrónica, ARCA, monotributo y actualidad fiscal argentina, del equipo de ProFactur.',
    site: context.site ?? SITE_ORIGIN,
    items: entries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.publishedAt,
      description: entry.data.description,
      // context.site NO incluye el base — el prefijo /blog va explícito.
      link: `${BASE}/${entry.id}`,
      categories: [entry.data.category, ...entry.data.tags],
      author: entry.data.author,
    })),
    customData: '<language>es-AR</language>',
  });
}
