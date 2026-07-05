# ADR 0001 — Páginas estáticas de categoría en lugar de filtros por query string

**Fecha:** 2026-07-05 · **Estado:** aceptada · **Contexto:** COD-230, decisión 1

## Contexto

COD-230 pedía "filtros por categoría como query strings + páginas estáticas de
categoría propias". tiempolisto implementó los filtros `?categoria=` con
anchors + filtrado client-side en JS.

## Decisión

Implementar **solo** las páginas estáticas `/blog/categoria/{slug}` y que las
pills de filtro linkeen directo a ellas. No se implementa el filtrado
client-side por query string.

## Justificación

- Las páginas estáticas cumplen todo lo que daban los query strings
  (crawleables, linkeables, estado visible) y además tienen title/description/
  canonical propios — mejor SEO que una URL con `?categoria=`.
- Mantener ambos mecanismos genera contenido duplicado (`/blog?categoria=X` y
  `/blog/categoria/x` mostrarían lo mismo) y suma JS sin beneficio.
- Cero JavaScript para filtrar: funciona sin hidratación.

Solo se generan páginas para categorías **con contenido** (evita thin content);
cuando una categoría recibe su primer post, su página aparece en el siguiente
build.
