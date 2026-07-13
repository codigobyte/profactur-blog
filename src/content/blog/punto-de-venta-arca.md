---
title: 'Cómo dar de alta un punto de venta en ARCA paso a paso'
description: 'Qué es un punto de venta, cómo habilitarlo gratis en el sitio de ARCA, qué tipo elegir según cómo vas a facturar y qué cambió con la RG 5866/2026.'
publishedAt: 2026-07-13
category: 'ARCA / AFIP'
tags:
  - Punto de venta
  - ARCA
  - Comprobantes en Línea
  - Web Services
author: 'Martín Aquino'
faqs:
  - q: '¿Cuánto cuesta dar de alta un punto de venta en ARCA?'
    a: 'Nada. El trámite es gratuito, se hace online con clave fiscal desde el servicio "Administración de puntos de venta y domicilios" y la habilitación es inmediata.'
  - q: '¿Puedo usar el mismo punto de venta para Comprobantes en Línea y para un sistema de facturación?'
    a: 'No. Cada canal de emisión necesita su propio punto de venta, porque cada uno lleva su numeración correlativa. Si emitís por Comprobantes en Línea y además por web services, vas a tener al menos dos puntos de venta activos.'
  - q: '¿Qué pasa con la numeración si doy de baja un punto de venta?'
    a: 'La numeración muere con él. Desde la RG 5866/2026 los puntos de venta dados de baja no se pueden reutilizar: si volvés a necesitar uno, dás de alta un código nuevo y la numeración arranca de 00000001.'
  - q: '¿El error "punto de venta no habilitado" cómo se soluciona?'
    a: 'Suele significar que el punto de venta no existe, está dado de baja o su tipo no coincide con el canal que estás usando (por ejemplo, usar por web services un punto de venta creado para Comprobantes en Línea). Verificá tipo y estado en "Administración de puntos de venta y domicilios".'
  - q: '¿Un negocio con varias sucursales necesita varios puntos de venta?'
    a: 'Es lo recomendable: un punto de venta por sucursal (asociado a su domicilio) mantiene la numeración de cada local separada y simplifica el control de ventas por sucursal.'
draft: false
---

El punto de venta es el **código de 5 dígitos que encabeza la numeración de todos tus comprobantes** — en `00003-00000121`, el punto de venta es `00003`. Se da de alta **gratis y en el momento** desde el sitio de ARCA, y sin él no podés emitir ninguna factura electrónica. Es el paso previo que más consultas genera, así que vamos directo al trámite.

## Qué es exactamente un punto de venta

Cada comprobante que emitís se numera `PUNTO DE VENTA - NÚMERO`. El punto de venta identifica **el canal por el que facturás** (y, si tenés locales, desde dónde), y el número corre correlativo dentro de ese punto de venta.

La consecuencia práctica: **cada canal de emisión necesita su propio punto de venta**. Uno para Comprobantes en Línea, otro para web services (sistemas de facturación), otro para el Facturador Móvil, otro por cada controlador fiscal. No se comparten, porque cada canal lleva su propia numeración.

## Paso a paso para darlo de alta

1. Entrá a [arca.gob.ar](https://www.arca.gob.ar) con CUIT y **clave fiscal**.
2. Abrí el servicio **"Administración de puntos de venta y domicilios"**. Si no lo ves, agregalo desde "Administrador de Relaciones de Clave Fiscal".
3. Seleccioná tu empresa y elegí **A/B/M de puntos de venta**.
4. Click en **Agregar**.
5. Completá:
   - **Número:** el siguiente disponible (si es tu primero, `00001`; si ya usaste `00001` y `00002`, va `00003`).
   - **Nombre de fantasía:** opcional, te sirve para reconocerlo ("Local Centro", "Facturación online").
   - **Sistema:** el tipo de punto de venta — acá está la decisión importante, la vemos abajo.
   - **Domicilio:** el domicilio asociado (tu fiscal o el del local).
6. Confirmá. La habilitación es inmediata y ya podés emitir.

## Qué tipo de punto de venta elegir

| Vas a facturar por… | Tipo a seleccionar |
| --- | --- |
| El sitio de ARCA, comprobante por comprobante | **Factura en Línea** (Comprobantes en Línea) |
| Un sistema de facturación conectado a ARCA | **Web Services** |
| La app oficial del celular | **Facturador Móvil** |
| Controlador fiscal homologado (ticket) | **Controlador Fiscal** |

Si elegís mal el tipo, el canal real de emisión va a devolver el clásico error **"punto de venta no habilitado"** al pedir el CAE. La solución es dar de alta otro punto de venta con el tipo correcto — el equivocado podés dejarlo sin uso o darlo de baja.

## Qué cambió con la RG 5866/2026

La resolución que reorganizó el régimen de facturación desde el 1 de julio de 2026 también tocó los puntos de venta:

- **Los puntos de venta dados de baja no se pueden reutilizar.** El código queda retirado con su historial de numeración.
- **Plazos definidos para altas y bajas**, y la vinculación del punto de venta con la actividad económica declarada.

En la práctica: no des de baja un punto de venta "para limpiar" — si lo vas a volver a necesitar, dejalo inactivo.

## Después del alta: a facturar

Con el punto de venta habilitado ya podés emitir tu primer comprobante — el circuito completo está en [cómo hacer una factura electrónica paso a paso](/blog/como-hacer-una-factura-electronica). Qué letra te corresponde emitir según tu condición fiscal lo vemos en [Factura A, B y C: diferencias](/blog/factura-a-b-c-diferencias), y cómo validar que el comprobante salió autorizado, en [qué es el CAE](/blog/que-es-el-cae).

## Cómo lo resuelve ProFactur

Para facturar con ProFactur solo necesitás dar de alta un punto de venta **tipo Web Services** — es el único trámite que hacés en el sitio de ARCA. Después lo cargás una vez en la configuración y el sistema se encarga de la numeración, la solicitud de CAE y el comprobante final. Si manejás varias sucursales, ProFactur administra un punto de venta por local y te muestra las ventas de cada uno por separado. Podés [crear tu cuenta gratis](https://profactur.com/registro) y dejar el punto de venta configurado en minutos.

> El punto de venta se configura una sola vez y bien: numeración prolija desde el comprobante 00000001 y ningún error de "punto de venta no habilitado" a mitad de una venta.
