---
title: 'Factura A, B y C: diferencias y quién debe emitir cada una'
description: 'Qué significa la letra de cada factura, quién emite A, B o C según su condición fiscal, cómo se trata el IVA en cada una y qué recibe cada tipo de cliente.'
publishedAt: 2026-07-13
category: 'Facturación electrónica'
tags:
  - Factura A
  - Factura B
  - Factura C
  - IVA
  - Condición fiscal
author: 'Martín Aquino'
faqs:
  - q: '¿Qué factura le hago a un consumidor final?'
    a: 'Si sos responsable inscripto, Factura B. Si sos monotributista o exento, Factura C. La letra depende de tu condición fiscal y de la del receptor, nunca la elegís libremente.'
  - q: '¿Un monotributista puede emitir Factura A?'
    a: 'No. El monotributista emite siempre Factura C, sin discriminar IVA, sin importar quién sea el cliente. La Factura A queda reservada a responsables inscriptos que le venden a otros responsables inscriptos.'
  - q: '¿Qué pasa si emito una factura con la letra equivocada?'
    a: 'El comprobante queda mal emitido: por ejemplo, una B a un responsable inscripto le impide computar el crédito fiscal de IVA. Se corrige anulando con nota de crédito y emitiendo el comprobante correcto.'
  - q: '¿Por qué mi Factura B ahora muestra el IVA?'
    a: 'Por el Régimen de Transparencia Fiscal al Consumidor, desde 2025 las facturas a consumidor final deben exhibir el IVA contenido en el precio como dato informativo. No cambia el total: el impuesto siempre estuvo incluido, ahora se muestra.'
  - q: '¿Qué es la Factura A con leyenda?'
    a: 'Es la Factura A que ARCA autoriza a contribuyentes que no acreditan solvencia patrimonial, con una condición impresa: retención del 100% del IVA y 6% de Ganancias, o pago obligatorio a la CBU informada. Reemplazó a la Factura M desde diciembre de 2025.'
draft: false
---

La letra de una factura no se elige: **surge de la condición fiscal del emisor y del receptor**. La regla completa entra en una tabla:

| Emisor | Receptor | Comprobante |
| --- | --- | --- |
| Responsable inscripto | Responsable inscripto | **Factura A** |
| Responsable inscripto | Consumidor final, monotributista o exento | **Factura B** |
| Monotributista o exento | Cualquiera | **Factura C** |
| Cualquiera | Cliente del exterior | **Factura E** (exportación) |

Veamos qué implica cada una y por qué equivocar la letra tiene consecuencias fiscales concretas.

## Factura A: entre responsables inscriptos

La emite un **responsable inscripto en IVA** cuando el cliente también es responsable inscripto. Su rasgo distintivo: **discrimina el IVA** — el neto y el impuesto van en renglones separados.

Eso importa porque el receptor usa ese IVA como **crédito fiscal**: lo resta del IVA que él mismo cobra en sus ventas. Por eso las empresas piden Factura A a sus proveedores; una B no les sirve para computar el crédito.

### Factura A con leyenda

Desde diciembre de 2025 ya no existe la Factura M. Cuando ARCA no puede verificar la solvencia patrimonial de quien solicita emitir comprobantes clase A, autoriza una **Factura A con leyenda**: "Operación sujeta a retención" o "Pago en CBU informada". Cada leyenda impone una obligación al que paga. Lo explicamos a fondo en [qué cambió con la RG 5762/2025](/blog/factura-a-leyenda-rg-5762).

## Factura B: de responsable inscripto a consumidor final

La emite el responsable inscripto cuando el receptor es **consumidor final, monotributista o exento**. El IVA está **incluido en el precio**: el total que ve el cliente es el precio final.

Desde 2025, por el Régimen de Transparencia Fiscal al Consumidor, la Factura B a consumidor final **muestra el IVA contenido** en el precio como dato informativo. El total no cambia — lo que cambia es que ahora el impuesto se ve.

Un detalle que introdujo la RG 5866/2026: en operaciones con consumidor final solo es obligatorio identificar al cliente con DNI cuando el monto llega a **$10.000.000**; por debajo, la factura puede salir sin identificar al receptor.

## Factura C: la del monotributista

El **monotributista** (y el exento en IVA) emite Factura C **siempre**, sin importar quién sea el cliente: consumidor final, otra empresa, un responsable inscripto. Nunca discrimina IVA, porque el monotributo ya engloba el componente impositivo en la cuota mensual.

Si tu cliente es una empresa y te pide "una A", la respuesta correcta siendo monotributista es: no corresponde — tu comprobante válido es la C, y la empresa lo registra como gasto sin crédito fiscal de IVA.

## Otras letras que te podés cruzar

- **Factura E:** operaciones de exportación de bienes o servicios.
- **Tickets:** los emiten controladores fiscales en comercios de venta masiva; equivalen a la B o C según el emisor.
- **Notas de crédito y débito:** ajustan comprobantes ya emitidos y **llevan la misma letra** que el comprobante que corrigen. Cómo funcionan lo vemos en [nota de crédito electrónica](/blog/nota-de-credito-electronica).

## Qué pasa si emitís la letra equivocada

El error más común es emitir B cuando correspondía A (por no pedir el CUIT del cliente). El receptor pierde el crédito fiscal y va a reclamar el comprobante correcto. Como una factura electrónica autorizada [no se puede editar ni borrar](/blog/como-anular-una-factura-electronica), el camino es: nota de crédito por el total + factura nueva con la letra correcta.

También revisá siempre que el comprobante tenga su [CAE válido](/blog/que-es-el-cae): sin autorización de ARCA, la letra da igual — el documento no tiene validez fiscal.

## Cómo lo resuelve ProFactur

En ProFactur no tenés que saberte esta tabla: cargás el CUIT del cliente, el sistema consulta su condición fiscal en el padrón de ARCA y **determina solo la letra que corresponde** — A, B o C, incluso la A con leyenda si es tu caso. Eso elimina el error de letra, que es de los más caros de corregir porque siempre implica anular y volver a facturar. Si querés verlo funcionando, [probá ProFactur gratis](https://profactur.com/registro).

> La letra correcta no es un detalle administrativo: define si tu cliente puede o no computar el IVA, y equivocarla siempre termina en dos comprobantes más para corregir uno.
