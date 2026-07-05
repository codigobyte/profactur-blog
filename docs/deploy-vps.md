# Deploy al VPS — profactur.com/blog

**Flujo:** push a `main` → GitHub Actions buildea (node 22, astro + pagefind +
OG images) → `rsync --delete` de `dist/blog/` a
`/var/www/profactur-blog/dist/blog/` → Nginx lo sirve en `profactur.com/blog`.
El VPS **no buildea nada** (a diferencia de tiempolisto): solo recibe archivos
estáticos.

## Setup inicial (una sola vez) — comandos para Martín

### 1. Carpeta en el VPS

```bash
ssh maquino@srv1073036
sudo mkdir -p /var/www/profactur-blog/dist/blog
sudo chown -R maquino:maquino /var/www/profactur-blog
```

### 2. Clave SSH para el deploy de Actions

En el VPS (o local), generar un par dedicado al deploy:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/profactur_blog_deploy -N "" -C "actions-profactur-blog"
cat ~/.ssh/profactur_blog_deploy.pub >> ~/.ssh/authorized_keys   # en el VPS, usuario maquino
```

En GitHub → `codigobyte/profactur-blog` → Settings → Secrets and variables →
Actions → New repository secret:

| Secret | Valor |
| --- | --- |
| `SSH_HOST` | IP o hostname del VPS (el mismo que usa tiempolisto) |
| `SSH_USER` | `maquino` |
| `SSH_PRIVATE_KEY` | contenido de `~/.ssh/profactur_blog_deploy` (la privada, completa) |

### 3. Bloque Nginx

Editar el server block de `profactur.com` (el que tiene el root de Laravel).
Agregar **antes** del `location /` de Laravel:

```nginx
    # Blog estático (Astro) — repo codigobyte/profactur-blog.
    # ^~ : si matchea este prefijo, Nginx no evalúa los location regex
    # (p. ej. \.php$), el blog nunca cae en Laravel.
    location ^~ /blog {
        root /var/www/profactur-blog/dist;
        try_files $uri $uri/index.html =404;
        error_page 404 /blog/404.html;

        # Assets con hash — cache inmutable
        location ~* ^/blog/(_astro|fonts|pagefind)/ {
            root /var/www/profactur-blog/dist;
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
```

> El build genera los archivos dentro de `dist/blog/` (outDir de Astro), por
> eso `root .../dist` + URI `/blog/...` resuelve sin `alias`.

Aplicar:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

`nginx -t` valida antes de recargar — si falla, NO recargar y revisar. El
reload no corta conexiones (no hace falta backup: no se toca DB ni el server
block de Laravel más allá de insertar el location).

### 4. Primer deploy

Con los secrets cargados, cualquier push a `main` deploya. Para forzarlo:
GitHub → Actions → "Deploy blog to VPS" → Run workflow, o un commit vacío:

```bash
git commit --allow-empty -m "chore: trigger deploy" && git push
```

## Verificación post-deploy

```bash
curl -I https://profactur.com/blog                    # 200
curl -s https://profactur.com/blog/manifest.json      # JSON con posts
curl -I https://profactur.com/blog/feed.xml           # 200, application/xml
curl -I https://profactur.com/blog/sitemap-index.xml  # 200
```

## Cloudflare

Si el dominio pasa por Cloudflare con caché agresivo, purgear
`profactur.com/blog*` después de deploys con cambios críticos. Los assets
(`/blog/_astro/*`) tienen hash en el nombre — nunca necesitan purge.
