# ADR 0002 — Sin ClientRouter (View Transitions) de Astro

**Fecha:** 2026-07-05 · **Estado:** aceptada

## Contexto

tiempolisto usa `<ClientRouter />` para view transitions, lo que agrega ~61KB
(gzip ~21KB) de runtime JS a todas las páginas y obliga a que cada script sea
idempotente y se re-ejecute en `astro:page-load`.

## Decisión

El blog **no** incluye ClientRouter. La navegación es MPA clásica con
`prefetch` de Astro (`prefetchAll + viewport`), que precarga los HTML antes
del click.

## Justificación

- JS total del blog casi nulo → mejor INP/TBT y score Lighthouse en mobile.
- Un blog de contenido no gana UX perceptible con view transitions; el
  prefetch ya hace la navegación casi instantánea.
- Scripts más simples: se ejecutan una vez por carga real de página, sin la
  danza de `astro:page-load` ni inits idempotentes.

## Consecuencias

Si en el futuro se quieren view transitions, hay que agregar `<ClientRouter />`
al BaseLayout y revisar que los scripts (Pagefind init, theme toggle, YouTube
facade) se re-inicialicen en `astro:page-load`.
