---
title: 'Comprobantes en Línea de ARCA: guía completa para facturar gratis'
description: 'Cómo habilitar y usar Comprobantes en Línea, el servicio gratuito de ARCA: configuración inicial, emisión paso a paso, consulta de comprobantes y sus límites.'
publishedAt: 2026-07-13
category: 'ARCA / AFIP'
tags:
  - Comprobantes en Línea
  - ARCA
  - Factura electrónica
  - Clave fiscal
author: 'Martín Aquino'
faqs:
  - q: '¿Comprobantes en Línea es gratis?'
    a: 'Sí, es el servicio oficial y gratuito de ARCA para emitir comprobantes electrónicos uno por uno desde el navegador. Solo necesitás clave fiscal nivel 3 y un punto de venta habilitado.'
  - q: '¿Cómo recupero una factura que emití en Comprobantes en Línea?'
    a: 'Dentro del servicio, en "Consultas" podés buscar por fecha, tipo y punto de venta cualquier comprobante emitido, verlo e imprimirlo de nuevo en PDF. Los comprobantes no se pierden: quedan registrados en ARCA.'
  - q: '¿Comprobantes en Línea sirve para facturar todos los días en un comercio?'
    a: 'Funciona, pero es manual: no guarda lista de precios ni clientes frecuentes, no descuenta stock, no envía el comprobante por correo y cada factura exige recargar todos los datos. Para emisión diaria o por volumen, un sistema conectado por web services ahorra la mayor parte de ese tiempo.'
  - q: '¿Qué configuro antes de emitir mi primera factura?'
    a: 'Dos cosas: los "Datos adicionales del comprobante" dentro del propio servicio (ingresos brutos, fecha de inicio de actividades, leyendas) y un punto de venta tipo "Factura en Línea" en el servicio de administración de puntos de venta.'
  - q: '¿Qué hago si Comprobantes en Línea no funciona o está caído?'
    a: 'Las intermitencias son habituales en fechas de vencimientos. Esperá y reintentá; verificá también que el problema no sea de adhesión del servicio o del punto de venta. Los sistemas que emiten por web services usan otro canal, que suele seguir operativo.'
draft: false
---

**Comprobantes en Línea** es el servicio gratuito de ARCA para emitir facturas electrónicas desde el navegador, comprobante por comprobante. Para muchísimos monotributistas es la puerta de entrada a la facturación — y para emisión ocasional, alcanza y sobra. Esta guía cubre la puesta a punto, la emisión, las consultas y también sus límites, para que sepas cuándo te queda chico.

## Habilitarlo: adhesión del servicio

1. Ingresá a [arca.gob.ar](https://www.arca.gob.ar) con CUIT y **clave fiscal nivel 3**.
2. Si "Comprobantes en Línea" no aparece en tu panel, andá a **"Administrador de Relaciones de Clave Fiscal" → Nueva relación → ARCA → Servicios interactivos → Comprobantes en Línea** y confirmá.
3. Cerrá sesión y volvé a entrar: el servicio ya figura.

## Configuración inicial (una sola vez)

### Datos adicionales del comprobante

Dentro del servicio, antes de la primera emisión, completá **"Datos adicionales del comprobante"**: número de ingresos brutos (o condición), fecha de inicio de actividades y las leyendas que deben aparecer al pie. Sin esto, el sistema no te deja generar comprobantes.

### Punto de venta

Necesitás un punto de venta **tipo "Factura en Línea"** dado de alta en "Administración de puntos de venta y domicilios". Es gratis e inmediato — el paso a paso está en [cómo dar de alta un punto de venta en ARCA](/blog/punto-de-venta-arca). Ojo: ese punto de venta es exclusivo de este canal; si además usás un sistema de facturación, este lleva otro punto de venta (tipo web services).

## Emitir un comprobante paso a paso

1. **Generar comprobantes** → elegí punto de venta y tipo de comprobante. El sistema solo ofrece los que tu condición fiscal permite — si tenés dudas de por qué te ofrece B y no A, mirá [Factura A, B y C: diferencias](/blog/factura-a-b-c-diferencias).
2. **Datos de emisión:** fecha, concepto (productos / servicios / ambos), condición de venta.
3. **Receptor:** CUIT para empresas y monotributistas; a consumidor final solo es obligatorio identificarlo desde $10.000.000 (RG 5866/2026).
4. **Detalle:** descripción, cantidad, precio, alícuota de IVA si sos responsable inscripto.
5. **Confirmar:** ARCA autoriza y devuelve el comprobante con su [CAE](/blog/que-es-el-cae) en PDF, listo para descargar y mandarle al cliente.

## Consultar, reimprimir y ajustar comprobantes

- **Consultas:** todo lo emitido queda registrado; podés buscar por fecha, tipo y punto de venta, y **regenerar el PDF** cuando el cliente perdió la factura.
- **Notas de crédito y débito:** se emiten desde el mismo menú de generación, indicando el comprobante asociado — la guía completa está en [nota de crédito electrónica](/blog/nota-de-credito-electronica).
- **Anulaciones:** una factura autorizada no se borra; se anula con nota de crédito por el total, como explicamos en [cómo anular una factura electrónica](/blog/como-anular-una-factura-electronica).

## Los límites de Comprobantes en Línea

Es una herramienta de **emisión**, no de gestión. Lo que no hace:

- **No guarda clientes ni productos:** cada factura arranca de cero — CUIT, descripción y precio se cargan a mano cada vez.
- **No envía comprobantes por correo:** descargás el PDF y lo mandás vos.
- **No controla stock ni precios:** el precio que tipeás es el que sale.
- **No acumula reportes:** cuánto facturaste este mes, o en el año móvil del monotributo, lo sumás vos comprobante por comprobante.
- **Depende de su disponibilidad:** en picos de vencimiento el servicio se satura; sin canal alternativo, la venta espera.

Para 3 facturas por mes, nada de esto pesa. Para un comercio que emite todos los días, cada punto de esta lista es tiempo — y la señal de que conviene evaluar un sistema conectado por web services, como comparamos en [cómo hacer una factura electrónica](/blog/como-hacer-una-factura-electronica).

## Cómo lo resuelve ProFactur

ProFactur emite los mismos comprobantes válidos ante ARCA, pero con la gestión alrededor: clientes y productos guardados, precios y stock actualizados, envío automático del PDF por correo, y los totales — diarios, mensuales, año móvil del monotributo — calculados solos. La transición es simple: dás de alta un punto de venta tipo web services y tus comprobantes siguen la numeración nueva desde el primer día, mientras lo emitido por Comprobantes en Línea queda consultable en ARCA como siempre. [Probalo gratis](https://profactur.com/registro).

> Comprobantes en Línea es exactamente lo que promete: emisión gratuita, oficial y manual. La pregunta correcta no es si es bueno — es cuántas veces por semana lo usás y cuánto tiempo te lleva cada una.
