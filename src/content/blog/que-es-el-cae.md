---
title: 'Qué es el CAE y cómo verificar que una factura sea válida'
description: 'El CAE es el código con el que ARCA autoriza cada factura electrónica. Qué es, por qué importa, qué pasa si falta y cómo constatar un comprobante en segundos.'
publishedAt: 2026-07-13
category: 'Facturación electrónica'
tags:
  - CAE
  - ARCA
  - Validez fiscal
  - Código QR
author: 'Martín Aquino'
faqs:
  - q: '¿Qué significa CAE?'
    a: 'Código de Autorización Electrónico. Es el número de 14 dígitos con el que ARCA autoriza cada comprobante electrónico en el momento de la emisión. Sin CAE, la factura no tiene validez fiscal.'
  - q: '¿Cómo verifico si una factura que recibí es válida?'
    a: 'Escaneá el código QR del comprobante, o entrá al servicio de constatación de comprobantes en el sitio de ARCA y cargá CUIT del emisor, tipo, punto de venta, número, fecha, importe y CAE. El sistema confirma si ARCA autorizó ese comprobante con esos datos.'
  - q: '¿Qué es la fecha de vencimiento del CAE?'
    a: 'Es el plazo que da ARCA para usar la autorización otorgada. No significa que la factura "venza": un comprobante emitido y entregado con su CAE vigente al momento de emisión es válido para siempre.'
  - q: '¿Cuál es la diferencia entre CAE y CAEA?'
    a: 'El CAE se solicita comprobante por comprobante, en línea. El CAEA (Código de Autorización Electrónico Anticipado) se pide por lote y por quincena, y está pensado para grandes emisores que no pueden depender de la disponibilidad del servicio en cada venta.'
  - q: '¿Puede ARCA rechazar la solicitud de CAE?'
    a: 'Sí. Los motivos típicos: datos del receptor inválidos, fecha fuera del rango permitido, numeración no correlativa o punto de venta mal configurado. El comprobante rechazado no existe fiscalmente; hay que corregir el error y volver a solicitarlo.'
draft: false
---

El **CAE (Código de Autorización Electrónico)** es un número de **14 dígitos** que ARCA le asigna a cada factura electrónica en el momento en que la autoriza. Es la prueba de que ese comprobante existe para el fisco: **una factura sin CAE no tiene validez fiscal** — no sirve como comprobante de venta, ni para computar crédito fiscal, ni para deducir gastos.

## Cómo funciona la autorización

Cada vez que emitís un comprobante — por Comprobantes en Línea, el Facturador Móvil o un sistema conectado por web services — ocurre esto en segundos:

1. El emisor envía a ARCA los datos de la operación (emisor, receptor, importes, IVA).
2. ARCA valida: condición fiscal de las partes, correlatividad de la numeración, fechas, consistencia de importes.
3. Si todo cierra, devuelve el **CAE y su fecha de vencimiento**, que se imprimen al pie del comprobante junto con el código QR.
4. Si algo falla, **rechaza la solicitud** y el comprobante no se emite.

El detalle importante: la factura electrónica no se emite "y después se informa" — **nace autorizada o no nace**. Por eso el CAE es el dato que separa un comprobante real de un papel sin valor.

## La fecha de vencimiento del CAE (y el mito del "vencimiento de la factura")

Junto al CAE aparece una fecha de vencimiento. Genera confusión, así que vale aclarar: **la factura no vence**. La fecha refiere a la vigencia de la autorización otorgada. Un comprobante emitido correctamente, con su CAE, es válido para siempre — guardalo los años que exige la normativa.

## Cómo verificar si una factura es válida

Cualquier persona puede constatar un comprobante, sin clave fiscal:

### Con el código QR

Todos los comprobantes electrónicos llevan un **QR obligatorio**. Al escanearlo, te lleva al sitio de ARCA y muestra si el comprobante fue autorizado, con sus datos. Es la verificación más rápida.

### Con el servicio de constatación de ARCA

En el sitio de ARCA, el servicio de **constatación de comprobantes** ([serviciosweb.afip.gob.ar/genericos/comprobantes](https://serviciosweb.afip.gob.ar/genericos/comprobantes/cae.aspx)) permite cargar los datos a mano: CUIT del emisor, tipo y letra, punto de venta, número, fecha, importe y CAE. El sistema responde si ARCA autorizó un comprobante con exactamente esos datos.

**Cuándo conviene constatar:** facturas de proveedores nuevos, importes grandes, o cualquier comprobante que vayas a computar como crédito fiscal. Una factura apócrifa detectada a tiempo es un problema del emisor; detectada en una inspección, es tuyo también.

## Qué revisar si te rechazan el CAE

Los rechazos más comunes al solicitar autorización:

- **Datos del receptor inválidos:** CUIT inexistente o condición de IVA que no coincide con el padrón.
- **Fecha fuera de rango:** más de 5 días hacia atrás en productos, 10 en servicios.
- **Numeración no correlativa:** suele pasar al mezclar canales de emisión en el mismo [punto de venta](/blog/punto-de-venta-arca) — cada canal necesita el suyo.
- **Tipo de comprobante que no corresponde** a tu condición fiscal — repasá [qué letra te corresponde emitir](/blog/factura-a-b-c-diferencias).

Y si el comprobante salió autorizado pero con un error de contenido (importe, cliente), no se puede modificar: se corrige con [nota de crédito](/blog/nota-de-credito-electronica) como explicamos en [cómo anular una factura electrónica](/blog/como-anular-una-factura-electronica).

## Cómo lo resuelve ProFactur

ProFactur solicita el CAE automáticamente al confirmar cada venta y valida los datos **antes** de enviarlos a ARCA — CUIT contra el padrón, letra del comprobante, correlatividad — para que el rechazo no ocurra. Si ARCA observa algo, el sistema te lo muestra traducido a un mensaje entendible en lugar del código de error crudo. Cada comprobante queda guardado con su CAE, QR y PDF listos para reenviar cuando el cliente lo pida. [Probalo gratis](https://profactur.com/registro).

> Regla simple: si un comprobante no tiene CAE (o su QR no valida), para el fisco no existe. Verificar tarda 30 segundos y evita computar crédito fiscal de una factura que nunca fue autorizada.
