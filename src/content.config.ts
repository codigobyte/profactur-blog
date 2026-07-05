import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Categorías del blog — ÚNICA fuente de verdad (COD-230, fix #4 de
 * tiempolisto: nada de copias divergentes en módulos sueltos).
 *
 * `label` es lo que se escribe en el frontmatter y muestra la UI; `slug` es
 * la URL de la página estática de categoría; `badge` es la clase CSS del
 * chip (definidas en global.css).
 *
 * La única copia inevitable son los `options` del select en
 * public/admin/config.yml (Decap lee YAML, no puede importar TS) — si
 * cambiás algo acá, actualizá también ese archivo.
 */
export const CATEGORIES = [
  { label: 'Facturación electrónica', slug: 'facturacion-electronica', badge: 'cat-indigo' },
  { label: 'ARCA / AFIP', slug: 'arca-afip', badge: 'cat-cyan' },
  { label: 'Monotributo', slug: 'monotributo', badge: 'cat-amber' },
  { label: 'Guías de uso ProFactur', slug: 'guias-de-uso', badge: 'cat-purple' },
  { label: 'Comparativas', slug: 'comparativas', badge: 'cat-emerald' },
  { label: 'Integraciones y API', slug: 'integraciones-api', badge: 'cat-zinc' },
  { label: 'Actualidad fiscal Argentina', slug: 'actualidad-fiscal', badge: 'cat-rose' },
] as const;

export type Category = (typeof CATEGORIES)[number];
export type CategoryLabel = Category['label'];

const CATEGORY_LABELS = CATEGORIES.map((c) => c.label) as unknown as [
  CategoryLabel,
  ...CategoryLabel[],
];

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryByLabel(label: CategoryLabel): Category {
  // El enum Zod garantiza que label existe en CATEGORIES.
  return CATEGORIES.find((c) => c.label === label)!;
}

/**
 * Schema base compartido por todas las colecciones del content hub.
 * El hub arranca con `blog`; `docs`, `casos` y `faq` quedan registradas
 * (vacías) para que la expansión no requiera re-arquitectura.
 */
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: baseSchema.extend({
    category: z.enum(CATEGORY_LABELS),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Martín Aquino'),
    video_youtube: z.string().url().optional(),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
  }),
});

// Futuras secciones del content hub — schemas mínimos, se amplían en su fase.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: baseSchema.extend({
    section: z.string().optional(),
    order: z.number().default(0),
  }),
});

const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: baseSchema.extend({
    cliente: z.string().optional(),
    rubro: z.string().optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: baseSchema.extend({
    order: z.number().default(0),
  }),
});

export const collections = { blog, docs, casos, faq };
