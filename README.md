# profactur-blog

Content hub estático de [ProFactur](https://profactur.com), servido en
**profactur.com/blog** (subdirectorio vía Nginx; el resto del dominio lo maneja
el Laravel de ProFactur).

## Stack

- **Astro 5** (SSG puro) + Content Collections + Zod — colecciones `blog`
  (activa), `docs`, `casos`, `faq` (registradas para expansión futura).
- **Tailwind CSS 4** + tokens de marca ProFactur (ver
  `profactur/docs/design-tokens.md`).
- **Pagefind** — búsqueda client-side, indexado en postbuild.
- **Decap CMS 3.14.1 (pineado)** en `/blog/admin`, OAuth vía Cloudflare Worker
  (`codigobyte/profactur-oauth`).
- **astro-og-canvas** — OG image por artículo generada en build.
- Deploy: GitHub Actions → build en runner → rsync al VPS. Nginx sirve
  `/var/www/profactur-blog/dist`.

## Comandos

```bash
npm install       # dependencias (Node >= 22.12)
npm run dev       # dev server (localhost:4321/blog)
npm run build     # astro check + build + pagefind (postbuild)
npm run preview   # sirve el build (localhost:4321/blog)
npm run lint      # eslint
npm run format    # prettier
```

## Escribir un artículo

Dos caminos:

1. **Decap CMS**: https://profactur.com/blog/admin (login con GitHub). Al
   guardar, commitea a `main` y el deploy sale solo.
2. **Markdown directo**: crear `src/content/blog/mi-slug.md` con el
   frontmatter del schema (ver `src/content.config.ts`): `title`,
   `description`, `publishedAt`, `category` (una de las 7), `tags?`,
   `author` (default Martín Aquino), `video_youtube?`, `faqs?`, `cover?`,
   `draft`.

Las categorías viven en `CATEGORIES` (`src/content.config.ts`) — única fuente
de verdad. Si se agrega una, actualizar también las `options` de
`public/admin/config.yml` (única copia permitida, Decap no lee TS).

## Endpoints útiles

| URL | Qué es |
| --- | --- |
| `/blog/feed.xml` | RSS (autodiscovery en el `<head>`) |
| `/blog/sitemap-index.xml` | Sitemap (anidado en el sitemapindex de Laravel) |
| `/blog/manifest.json` | Últimos 6 posts — lo consume el home de Laravel |
| `/blog/og/{slug}.png` | OG image generada por artículo |
| `/blog/admin` | Decap CMS |

## Docs

- `docs/deploy-vps.md` — Nginx + secrets + comandos de deploy.
- `docs/adr/` — decisiones de arquitectura.
- Issue de origen: COD-230 (Linear).
