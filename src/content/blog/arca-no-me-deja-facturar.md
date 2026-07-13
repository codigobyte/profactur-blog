---
title: 'ARCA no me deja facturar: causas frecuentes y soluciones'
description: 'No podés emitir facturas en ARCA: las 7 causas más comunes — servicio no habilitado, punto de venta, CUIT limitado, rechazos de CAE — y cómo resolver cada una.'
publishedAt: 2026-07-13
category: 'ARCA / AFIP'
tags:
  - Errores
  - Comprobantes en Línea
  - CAE
  - Punto de venta
  - ARCA
author: 'Martín Aquino'
faqs:
  - q: '¿Por qué no me aparece Comprobantes en Línea en ARCA?'
    a: 'Porque el servicio no está adherido a tu clave fiscal. Entrá al "Administrador de Relaciones de Clave Fiscal", buscá "Comprobantes en Línea" y adherilo. Al volver a ingresar, el servicio aparece en tu panel.'
  - q: '¿Qué significa el error "punto de venta no habilitado"?'
    a: 'Que el punto de venta que estás usando no existe, está dado de baja o es de un tipo distinto al canal por el que intentás emitir. Se revisa y corrige en el servicio "Administración de puntos de venta y domicilios".'
  - q: '¿Por qué ARCA rechaza el CUIT de mi cliente?'
    a: 'El CUIT puede estar mal tipeado, inactivo o su condición de IVA no coincide con el tipo de comprobante que intentás emitir. Verificalo en la constancia de inscripción pública de ARCA antes de reintentar.'
  - q: '¿Qué es tener el CUIT limitado?'
    a: 'Un estado administrativo en el que ARCA restringe operaciones — incluida la facturación — por inconsistencias: domicilio fiscal desactualizado, falta de presentaciones, deudas o irregularidades detectadas. Se resuelve regularizando la causa que lo originó.'
  - q: '¿Puedo facturar con fecha de hace dos semanas?'
    a: 'No por los canales normales: el sistema acepta hasta 5 días hacia atrás para productos y 10 para servicios. Más atrás, la solicitud de CAE se rechaza por fecha fuera de rango.'
draft: false
---

Si ARCA no te deja facturar, la causa está casi siempre en una de estas siete situaciones. Empezá por identificar **en qué momento falla**: ¿no encontrás el servicio?, ¿no podés elegir punto de venta?, ¿el sistema rechaza al receptor?, ¿o la solicitud de [CAE](/blog/que-es-el-cae) vuelve con error? Cada síntoma tiene su solución.

## 1. No aparece el servicio Comprobantes en Línea

**Síntoma:** entrás con clave fiscal y el servicio no está en tu panel.

**Solución:** hay que adherirlo. En [arca.gob.ar](https://www.arca.gob.ar), abrí **"Administrador de Relaciones de Clave Fiscal" → Nueva relación → ARCA → Servicios interactivos → Comprobantes en Línea**, y confirmá. Cerrá sesión y volvé a entrar: el servicio aparece. Lo mismo vale para cualquier servicio que "no está": casi nunca es un error, es una adhesión pendiente.

## 2. Punto de venta inexistente, dado de baja o de tipo equivocado

**Síntoma:** el clásico **"punto de venta no habilitado"**, o el desplegable de puntos de venta vacío al generar el comprobante.

**Solución:** en **"Administración de puntos de venta y domicilios"** verificá que el punto de venta exista, esté activo y — el detalle que más se escapa — **sea del tipo correcto para el canal**: uno de "Factura en Línea" no sirve para un sistema por web services, y viceversa. Si el tipo está mal, dá de alta uno nuevo del tipo correcto: el trámite es inmediato y lo mostramos en [cómo dar de alta un punto de venta](/blog/punto-de-venta-arca). Recordá que desde la RG 5866/2026 los puntos dados de baja no se reutilizan.

## 3. Clave fiscal con nivel insuficiente

**Síntoma:** el servicio aparece pero no te deja operar, o directamente no podés adherirlo.

**Solución:** facturar requiere **clave fiscal nivel 3**. Si la tuya es de nivel menor, elevala desde la app **Mi ARCA** con validación biométrica (o presencial en una dependencia).

## 4. Datos del receptor inválidos

**Síntoma:** al cargar el CUIT del cliente, el sistema lo rechaza o la solicitud de CAE vuelve con "documento del receptor inválido".

**Solución:** tres chequeos en orden:
1. **El número:** un dígito bailado alcanza (el CUIT tiene dígito verificador).
2. **El estado:** consultá la constancia de inscripción pública — el CUIT puede estar inactivo.
3. **La coherencia comprobante–receptor:** no podés emitir Factura A a alguien que no es responsable inscripto. Repasá [qué letra corresponde a cada combinación](/blog/factura-a-b-c-diferencias).

## 5. Fecha fuera de rango

**Síntoma:** rechazo de CAE por la fecha del comprobante.

**Solución:** el sistema admite hasta **5 días hacia atrás para productos y 10 para servicios**. Si te pasaste, emití con fecha actual — la RG 5866/2026 define los momentos de emisión (productos: hasta el cierre del mes de entrega; servicios: al concluir o cobrar), así que un desfase corto entre operación y comprobante tiene margen normativo.

## 6. Condición fiscal desactualizada o régimen sin alta

**Síntoma:** el sistema no te ofrece el tipo de comprobante que esperás (por ejemplo, no aparece Factura C) o rechaza la emisión.

**Solución:** verificá en tu constancia de inscripción que el alta del régimen (monotributo o IVA) esté vigente y tu actividad económica declarada. Un alta incompleta o una baja de oficio (por falta de pago prolongada, por ejemplo) bloquean la emisión hasta regularizar.

## 7. CUIT limitado por ARCA

**Síntoma:** no podés facturar ni operar otros servicios; suele haber una notificación en el Domicilio Fiscal Electrónico.

**Solución:** el "CUIT limitado" es un estado administrativo que ARCA aplica ante inconsistencias — domicilio desactualizado, declaraciones sin presentar, deudas, o estar en análisis por facturación apócrifa. La salida depende de la causa: revisá las notificaciones en tu Domicilio Fiscal Electrónico, regularizá lo observado y, si el caso es complejo, con un contador. No hay atajo: hasta levantar la limitación, no se factura.

## Si nada de esto aplica: ¿es ARCA?

A veces el problema no sos vos. Los servicios de ARCA tienen caídas e intermitencias, sobre todo en picos de vencimientos. Si el error es genérico o el sitio no responde, esperá un rato y reintentá antes de tocar configuración que estaba bien.

## Cómo lo resuelve ProFactur

La mitad de esta lista desaparece cuando el sistema valida antes de emitir: ProFactur chequea el CUIT del receptor contra el padrón de ARCA, determina solo la letra correcta, controla la numeración del punto de venta y, si ARCA devuelve un error, te lo muestra **traducido a una causa concreta y su solución** — no el código crudo del web service. Y cuando Comprobantes en Línea está caído, el canal de web services suele seguir operativo. [Probalo gratis](https://profactur.com/registro).

> Ante un bloqueo para facturar, el orden de diagnóstico es siempre el mismo: servicio adherido → punto de venta correcto → receptor válido → fecha en rango → estado del propio CUIT. Recorrerlo lleva diez minutos y cubre el 95% de los casos.
