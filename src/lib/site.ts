/**
 * Constantes del sitio — única fuente para URLs, marca y autoría.
 *
 * El blog vive en un subdirectorio del dominio (profactur.com/blog) servido
 * por Nginx; el resto del dominio lo maneja el Laravel de ProFactur. Por eso
 * separamos SITE_ORIGIN (dominio) de BASE (prefijo del blog): los links al
 * resto del sitio usan SITE_ORIGIN, los internos del blog usan blogPath().
 */

export const SITE_NAME = 'ProFactur';
export const SITE_ORIGIN = 'https://profactur.com';
export const BASE = '/blog';
export const SITE_URL = `${SITE_ORIGIN}${BASE}`;

export const DEFAULT_AUTHOR = 'Martín Aquino';
export const PUBLISHER = { name: 'ProFactur', url: SITE_ORIGIN } as const;
export const AUTHOR_WORKS_FOR = { name: 'Codigobyte', url: SITE_ORIGIN } as const;

export const WHATSAPP_NUMBER =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '5491157528188';

/** Path interno del blog con el base incluido: blogPath('/mi-post') → '/blog/mi-post'. */
export function blogPath(path = ''): string {
  return `${BASE}${path}`;
}

export function whatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Tiempo de lectura — 200 palabras/min, piso de 1 min. */
export function readingMinutes(body: string | undefined): number {
  const words = body?.split(/\s+/).filter(Boolean).length ?? 0;
  return Math.max(1, Math.ceil(words / 200));
}

// timeZone UTC: el frontmatter '2026-07-05' se parsea como medianoche UTC;
// sin esto, en el build (GMT-3) la fecha se mostraría un día antes.
export const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});
