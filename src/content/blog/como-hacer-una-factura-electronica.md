---
title: 'Cómo hacer una factura electrónica en Argentina: guía paso a paso'
description: 'Qué necesitás para emitir tu primera factura electrónica ante ARCA: requisitos, alta del punto de venta, paso a paso en Comprobantes en Línea y alternativas.'
publishedAt: 2026-07-13
category: 'Facturación electrónica'
tags:
  - Factura electrónica
  - Comprobantes en Línea
  - ARCA
  - CAE
author: 'Martín Aquino'
faqs:
  - q: '¿La factura electrónica es obligatoria en Argentina?'
    a: 'Sí. Desde 2019 la emisión electrónica es obligatoria para casi todos los contribuyentes: responsables inscriptos, monotributistas y exentos. Las excepciones son puntuales y la RG 5866/2026, vigente desde julio de 2026, reordenó el régimen general manteniendo esa obligación.'
  - q: '¿Puedo facturar sin dar de alta un punto de venta?'
    a: 'No. El punto de venta es un requisito previo: es el código de 5 dígitos que encabeza la numeración de todos tus comprobantes. Se da de alta gratis en el sitio de ARCA con clave fiscal, desde el servicio "Administración de puntos de venta y domicilios".'
  - q: '¿Qué pasa si ARCA rechaza la factura y no me da el CAE?'
    a: 'Sin CAE el comprobante no existe fiscalmente. Los rechazos más comunes son datos del receptor inválidos, fecha fuera del rango permitido o punto de venta mal configurado. Corregí el dato observado y volvé a solicitar la autorización.'
  - q: '¿Puedo emitir una factura con fecha anterior a la de hoy?'
    a: 'Dentro de ciertos límites, sí: ARCA admite hasta 5 días hacia atrás para venta de productos y hasta 10 días para servicios. Más allá de eso el sistema rechaza la solicitud de CAE.'
  - q: '¿Cuánto cuesta emitir facturas electrónicas?'
    a: 'Emitir por Comprobantes en Línea o por el Facturador Móvil de ARCA es gratuito. Los sistemas de facturación privados cobran un abono y a cambio suman gestión de clientes, productos, stock, reportes y envío automático de comprobantes.'
draft: false
---

Para hacer una factura electrónica en Argentina necesitás tres cosas: **CUIT con clave fiscal**, **un punto de venta dado de alta ante ARCA** y **un canal de emisión** — el servicio gratuito Comprobantes en Línea, el Facturador Móvil o un sistema de facturación conectado por web services. Con eso, cada comprobante que emitas queda autorizado por ARCA mediante un [CAE](/blog/que-es-el-cae) y tiene validez fiscal plena.

En esta guía vemos el circuito completo, desde los requisitos previos hasta el comprobante emitido, con los cambios que introdujo la [Resolución General 5866/2026](https://www.afip.gob.ar/facturacion/) vigente desde el 1 de julio de 2026.

## Requisitos previos

Antes de emitir tu primer comprobante necesitás tener resuelto esto:

1. **CUIT activo y clave fiscal nivel 3.** Se tramitan en ARCA; si ya operás con el organismo, ya los tenés.
2. **Alta en el régimen que te corresponde.** Monotributo o responsable inscripto en IVA. De tu condición fiscal depende [qué letra de factura emitís](/blog/factura-a-b-c-diferencias): A, B o C.
3. **Punto de venta habilitado.** Es el código de 5 dígitos que encabeza la numeración (por ejemplo, `00003-00000121`). Cada canal de emisión usa su propio punto de venta. Te mostramos el trámite completo en [cómo dar de alta un punto de venta en ARCA](/blog/punto-de-venta-arca).
4. **Domicilio fiscal electrónico constituido.** Es obligatorio y es donde ARCA te notifica.

## Paso a paso en Comprobantes en Línea

El servicio gratuito de ARCA alcanza para emitir comprobantes uno por uno:

1. Ingresá a [arca.gob.ar](https://www.arca.gob.ar) con CUIT y clave fiscal.
2. Abrí el servicio **Comprobantes en Línea**. Si no aparece, habilitalo desde "Administrador de Relaciones de Clave Fiscal".
3. Seleccioná la empresa y andá a **Generar comprobantes**.
4. Elegí **punto de venta y tipo de comprobante** (Factura B, Factura C, etc. — el sistema solo ofrece los que tu condición fiscal permite).
5. Completá los **datos de la operación**: fecha, concepto (productos, servicios o ambos) y condición de venta (contado, transferencia, cuenta corriente).
6. Cargá los **datos del receptor**. Si es responsable inscripto o monotributista, su CUIT. Si es consumidor final, desde la RG 5866/2026 solo estás obligado a identificarlo con DNI a partir de operaciones de $10.000.000; por debajo de ese monto podés emitir sin identificar.
7. Detallá **los ítems** (descripción, cantidad, precio unitario, alícuota de IVA si sos responsable inscripto), confirmá y el sistema solicita el CAE.

Si ARCA autoriza, obtenés el PDF del comprobante con su CAE y fecha de vencimiento. Ese archivo es el que entregás a tu cliente.

## Cuándo tenés que emitir el comprobante

La RG 5866/2026 ordenó los momentos de emisión:

- **Venta de productos:** hasta el cierre del mes en que entregaste la mercadería.
- **Servicios:** al concluir el servicio o al cobrarlo, lo que ocurra primero.
- **Servicios continuos** (abonos, mantenimientos): facturación mensual al cierre de cada período.
- **Alquileres:** según el vencimiento pactado en el contrato.

Para atrasos cortos hay tolerancia: el sistema acepta comprobantes con fecha de hasta 5 días hacia atrás para productos y 10 para servicios.

## Qué datos lleva sí o sí una factura electrónica

- Tipo y letra de comprobante, punto de venta y número.
- Fecha de emisión y CAE con su vencimiento.
- Datos del emisor: razón social, CUIT, domicilio, condición fiscal.
- Datos del receptor según su condición (CUIT, o DNI cuando corresponde).
- Detalle de la operación, importes y, en facturas A, el IVA discriminado.
- El **código QR** obligatorio que permite verificar el comprobante.

Si después detectás un error en un comprobante ya autorizado, no se puede editar ni borrar: se corrige con una [nota de crédito](/blog/nota-de-credito-electronica). Lo explicamos en detalle en [cómo anular una factura electrónica](/blog/como-anular-una-factura-electronica).

## Comprobantes en Línea, Facturador Móvil o sistema de facturación

**Comprobantes en Línea** funciona bien para pocas facturas por mes: es gratis y oficial, pero es manual — no guarda tu lista de clientes ni productos, no controla stock, no envía el comprobante por correo ni te muestra cuánto facturaste.

**El Facturador Móvil** (app oficial de ARCA) resuelve la emisión desde el celular con las mismas limitaciones.

**Un sistema de facturación** conectado a ARCA por web services emite el mismo comprobante válido, pero completa solo los datos del cliente, calcula impuestos, descuenta stock, envía la factura por correo y arma los reportes. Tiene sentido cuando facturás todos los días o manejás productos y clientes recurrentes.

## Cómo lo resuelve ProFactur

En ProFactur cargás el CUIT del cliente y el sistema trae sus datos desde el padrón de ARCA, determina solo qué comprobante corresponde emitir según tu condición y la del receptor, solicita el CAE y envía la factura por correo — todo en una pantalla. El punto de venta se configura una vez y los comprobantes salen numerados y ordenados, con el respaldo de tus ventas, clientes y stock en el mismo lugar. Podés [probarlo gratis](https://profactur.com/registro) sin cargar certificados ni configurar nada de ARCA para empezar.

> Emitir una factura válida es el piso, no el techo: la diferencia entre "cumplir" y "tener el negocio ordenado" está en lo que pasa alrededor del comprobante — clientes, stock, cobros y reportes.
