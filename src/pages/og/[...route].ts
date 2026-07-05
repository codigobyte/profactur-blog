import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

/**
 * OG image por artículo, generada en build (COD-230, extra #8).
 * URL final: /blog/og/{slug}.png — referenciada desde [slug].astro.
 */
const posts = await getCollection('blog', (e) => !e.data.draft);

// El nombre del param se infiere del filename ([...route]) y el `.png`
// final lo agrega el getSlug default a partir de la key de `pages`.
export const { getStaticPaths, GET } = await OGImageRoute({
  pages: Object.fromEntries(posts.map((p) => [p.id, p.data])),
  getImageOptions: (_path, page: (typeof posts)[number]['data']) => ({
    title: page.title,
    description: page.description,
    logo: { path: './src/assets/logo.png', size: [96] },
    bgGradient: [
      [10, 10, 15],
      [23, 23, 40],
    ],
    border: { color: [99, 102, 241], width: 14, side: 'block-end' },
    padding: 72,
    font: {
      title: { size: 64, weight: 'ExtraBold', color: [250, 250, 250], lineHeight: 1.15 },
      description: { size: 30, weight: 'Normal', color: [161, 161, 170], lineHeight: 1.4 },
    },
  }),
});
