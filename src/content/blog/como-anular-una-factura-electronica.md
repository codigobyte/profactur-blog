---
title: 'Cómo anular una factura electrónica emitida por error'
description: 'Una factura electrónica con CAE no se puede borrar: se anula con una nota de crédito. Qué hacer según el tipo de error — importe, CUIT, duplicada o letra equivocada.'
publishedAt: 2026-07-13
category: 'Facturación electrónica'
tags:
  - Anular factura
  - Notas de crédito
  - Errores de facturación
  - ARCA
author: 'Martín Aquino'
faqs:
  - q: '¿Se puede borrar una factura electrónica emitida por error?'
    a: 'No. Una vez que ARCA otorga el CAE, el comprobante queda registrado de forma definitiva. La única manera válida de dejarlo sin efecto es emitir una nota de crédito por el importe total, con la misma letra y referenciando la factura original.'
  - q: '¿Qué hago si facturé a un CUIT equivocado?'
    a: 'Anulá el comprobante con una nota de crédito por el total al mismo CUIT equivocado, y emití una factura nueva al CUIT correcto. El receptor erróneo debe recibir la nota de crédito para que el comprobante no le quede computado.'
  - q: '¿Qué pasa si emití la misma factura dos veces?'
    a: 'Anulá una de las dos con nota de crédito por el total. Documentá internamente cuál quedó vigente para que la cuenta corriente del cliente y tus reportes no dupliquen la venta.'
  - q: '¿Hay un plazo para anular una factura electrónica?'
    a: 'No hay un plazo específico para la nota de crédito de anulación, pero conviene emitirla apenas se detecta el error: si el período de IVA ya cerró, el ajuste impacta en el período en que se emite la nota y complica la conciliación.'
  - q: '¿Anular la factura repone el stock y anula el cobro?'
    a: 'No automáticamente en el circuito de ARCA: la nota de crédito es solo el ajuste fiscal. La reposición de stock, la devolución del cobro o el ajuste de la cuenta corriente son movimientos de gestión que tu sistema tiene que acompañar.'
draft: false
---

Directo a la respuesta: **una factura electrónica autorizada no se puede borrar, editar ni "dar de baja"**. Una vez que ARCA otorgó el [CAE](/blog/que-es-el-cae), el comprobante quedó registrado de forma definitiva. La única forma válida de dejarlo sin efecto es **emitir una nota de crédito por el importe total**, con la misma letra, referenciando la factura equivocada.

Eso es "anular" en facturación electrónica: no desaparece el comprobante — se neutraliza con su ajuste espejo. Veamos el circuito según el tipo de error.

## El mecanismo general: nota de crédito por el total

Para cualquier anulación, el procedimiento base es el mismo:

1. Emití una **[nota de crédito](/blog/nota-de-credito-electronica) por el importe total** de la factura errónea — misma letra, mismo receptor, indicando el comprobante asociado.
2. Si la operación real existe (solo estaba mal el comprobante), emití la **factura nueva correcta**.
3. Entregá al cliente ambos documentos: la nota de crédito que anula y la factura válida.

El resultado fiscal: factura errónea + nota de crédito = cero. La operación queda documentada por la factura nueva.

## Qué hacer según el error

### Importe incorrecto

- **Facturaste de más:** si la diferencia es solo de precio, alcanza una **nota de crédito parcial** por la diferencia — no hace falta anular todo.
- **Facturaste de menos:** se corrige con una **nota de débito** por la diferencia, o anulando y refacturando si preferís un comprobante único prolijo.

### CUIT o cliente equivocado

Acá no hay parcial que valga: **nota de crédito por el total al CUIT equivocado** + factura nueva al correcto. Importante: hacele llegar la nota de crédito al receptor erróneo — si es responsable inscripto, ese comprobante le figura y necesita el ajuste.

### Factura duplicada

Emitiste dos veces la misma operación (pasa más de lo que parece con cortes de conexión). Anulá **una** de las dos con nota de crédito total y dejá registro interno de cuál quedó vigente.

### Letra equivocada

Emitiste B cuando correspondía A (o viceversa). Como la letra no se puede cambiar, el circuito es anulación total + factura con la [letra correcta](/blog/factura-a-b-c-diferencias). Es el error más caro en tiempo, porque casi siempre lo detecta el cliente cuando su contador rechaza el comprobante.

### La venta no se concretó

Facturaste y la operación se cayó. Nota de crédito por el total y listo — no hay factura nueva porque no hay operación.

## Qué NO hacer

- **Ignorar el comprobante erróneo** ("total no lo entregué"): para ARCA existe igual — computa en tus ventas declaradas y va a generar diferencias con tu IVA o tu facturación de monotributo.
- **Emitir la nota de crédito con otra letra o sin referenciar** la factura original: el ajuste no se vincula y el problema se duplica.
- **Refacturar sin anular:** quedan dos facturas vigentes por una sola operación — es el camino directo a una intimación por inconsistencias.
- **"Compensar" contra la próxima venta del cliente:** los ajustes se documentan con comprobantes, no con promesas.

## Cómo prevenir la mayoría de estos errores

Los errores de anulación casi siempre nacen en la carga manual: CUIT tipeado a mano, letra elegida de memoria, precio desactualizado. Un sistema que valida contra el padrón de ARCA antes de emitir corta el problema de raíz — el circuito completo de emisión está en [cómo hacer una factura electrónica paso a paso](/blog/como-hacer-una-factura-electronica).

## Cómo lo resuelve ProFactur

En ProFactur, anular es un botón: desde la factura errónea generás la **nota de crédito total con un click** — letra, receptor y comprobante asociado salen heredados, sin re-tipear nada. Si hay que refacturar, duplicás la venta corregida en segundos. Y para que anular sea la excepción: el sistema trae los datos del cliente desde el padrón de ARCA y determina solo la letra correcta, así el CUIT equivocado o la B-que-era-A no llegan a emitirse. [Probalo gratis](https://profactur.com/registro).

> Anular una factura electrónica no es borrarla: es documentar que quedó sin efecto. Nota de crédito total, misma letra, comprobante asociado — y factura nueva solo si la operación real sigue en pie.
