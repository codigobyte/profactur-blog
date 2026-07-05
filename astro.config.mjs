// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://profactur.com',
  // El blog vive en profactur.com/blog (subdirectorio servido por Nginx,
  // Laravel maneja el resto del dominio). `base` prefija rutas y assets.
  base: '/blog',
  // Astro NO emite el build dentro de un subdirectorio por sí solo: con
  // outDir en dist/blog el bloque Nginx `location /blog { root .../dist; }`
  // funciona sin `alias` (que tiene quirks conocidos con try_files).
  outDir: './dist/blog',
  output: 'static',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  markdown: {
    // Anchors en headings — los usa la TOC (headings[] de render()).
    rehypePlugins: [rehypeSlug],
  },
  integrations: [
    sitemap({
      // /admin/* no debe ser descubierto por crawlers.
      filter: (page) => !page.includes('/admin'),
    }),
    // Mismos flags que tiempolisto en producción: CSS/JS ya los minifica
    // Vite; html-minifier con opciones agresivas rompe hidratación/estilos.
    compress({
      CSS: false,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
          sortAttributes: false,
          sortClassName: false,
          minifyCSS: false,
        },
      },
      JavaScript: false,
      Image: false,
      SVG: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
