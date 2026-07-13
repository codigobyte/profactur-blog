---
title: 'Cómo administrar la facturación de varias sucursales'
description: 'Puntos de venta por local, stock separado, cajas por turno y ventas consolidadas: cómo ordenar la facturación de un negocio con más de una sucursal.'
publishedAt: 2026-07-13
category: 'Guías de uso ProFactur'
tags:
  - Sucursales
  - Punto de venta
  - Comercios
  - Gestión
author: 'Martín Aquino'
faqs:
  - q: '¿Cada sucursal necesita su propio punto de venta en ARCA?'
    a: 'Es lo recomendable: un punto de venta por local, asociado a su domicilio, mantiene la numeración de cada sucursal separada y permite saber qué se vendió en cada una con solo mirar el comprobante. El alta es gratuita y se hace online.'
  - q: '¿Puedo facturar con el mismo CUIT en todas las sucursales?'
    a: 'Sí. Las sucursales son locales del mismo contribuyente: un solo CUIT, varios puntos de venta. Cada domicilio comercial debe estar declarado ante ARCA como domicilio de explotación.'
  - q: '¿Cómo controlo la caja de cada local sin estar presente?'
    a: 'Con cierres de caja por turno en cada sucursal: monto declarado contra monto esperado por el sistema, con la diferencia explícita y el usuario responsable identificado. El consolidado diario te muestra todas las cajas sin viajar.'
  - q: '¿El stock conviene manejarlo unificado o por sucursal?'
    a: 'Por sucursal, siempre: el sistema debe saber cuántas unidades hay en cada local para no vender lo que no está. El catálogo de productos y precios sí conviene centralizado, para que una remarcación aplique a todos los locales a la vez.'
  - q: '¿Qué pasa si un empleado factura mal en una sucursal?'
    a: 'Igual que en cualquier emisión: el comprobante autorizado no se borra, se corrige con nota de crédito. La diferencia con un buen sistema es que cada operación queda asociada a su usuario y sucursal, así el error se detecta y se corrige el mismo día.'
draft: false
---

Administrar la facturación de varias sucursales se resuelve con una estructura simple: **un punto de venta de ARCA por local, stock y caja separados por sucursal, catálogo y precios centralizados, y un tablero que consolide todo**. Cuando falta alguna de esas piezas, aparecen los síntomas clásicos: numeración mezclada, stock fantasma y cajas que cierran "más o menos".

## La base fiscal: un punto de venta por sucursal

El mismo CUIT puede facturar desde todos sus locales — lo que cambia es [el punto de venta](/blog/punto-de-venta-arca), el código de 5 dígitos que encabeza la numeración. La estructura correcta:

- **Sucursal Centro** → punto de venta `00002`
- **Sucursal Norte** → punto de venta `00003`
- **Ventas online** → punto de venta `00004`

Cada domicilio declarado ante ARCA, cada local con su numeración correlativa propia. El beneficio es inmediato: mirás `00003-00001542` y sabés dónde se emitió, sin abrir ningún sistema. Además, si un local tiene un problema (un [rechazo de CAE](/blog/arca-no-me-deja-facturar), un corte), no arrastra la numeración de los demás.

## Stock: separado por local, catálogo centralizado

Las dos decisiones correctas suelen confundirse:

- **Existencias por sucursal:** el sistema tiene que saber cuántas unidades hay **en cada local**. Stock global = vender en Norte lo que solo está en Centro.
- **Catálogo y precios centralizados:** el producto se define una vez, la remarcación se hace una vez y aplica a todos los locales. Con listas por canal si el online tiene otros precios.

Entre ambas, las **transferencias entre sucursales** documentadas: la mercadería que viaja de un local a otro deja rastro, no "se lleva y después vemos".

## Caja por sucursal, control a distancia

La caja es donde la distancia duele. El esquema que funciona:

- **Turnos con apertura y cierre** en cada local: monto inicial declarado, ventas por medio de pago registradas, cierre comparado contra lo esperado.
- **Usuarios con permisos por rol:** el cajero de la sucursal factura y cobra; no anula ventas ni ve los números globales.
- **Diferencias explícitas:** si faltan $8.000 en el cierre de Norte, eso queda escrito, con turno y responsable — no se disuelve en el total del mes.

## El consolidado: una pregunta, una pantalla

El objetivo de toda la estructura es poder responder sin llamar a nadie:

- ¿Cuánto vendió cada sucursal hoy?
- ¿Qué medio de pago domina en cada local?
- ¿Qué productos rotan en Centro y duermen en Norte?
- ¿Cómo cerraron todas las cajas?

Si la respuesta requiere un Excel que arma alguien los lunes, el negocio multi-sucursal está volando a ciegas cinco días por semana.

## Errores típicos al crecer de uno a varios locales

- **Reutilizar el mismo punto de venta** en dos locales: numeración entrelazada imposible de auditar por sucursal. (Y recordá: desde la RG 5866/2026 los puntos dados de baja no se reutilizan — planificá las altas.)
- **Segundo local en planilla aparte:** dos sistemas de facto, consolidación manual eterna.
- **Todos los empleados con el mismo usuario:** cuando algo no cierra, no hay a quién preguntarle.
- **Precios actualizados "cuando se puede" en cada local:** el mismo producto a dos precios según la sucursal, con la inflación amplificando el desfase.

## Cómo lo resuelve ProFactur

ProFactur está pensado para esta estructura: cada sucursal con **su punto de venta ARCA, su stock y sus cajas por turno**; el catálogo y las listas de precios centralizados; usuarios con permisos por rol y cada operación firmada por quien la hizo. El tablero consolida ventas, cajas y stock de todos los locales en tiempo real — la pregunta "¿cómo viene Norte?" se responde desde el celular. Si estás por abrir la segunda sucursal (o ya la abriste en planilla), [probalo gratis](https://profactur.com/registro) y armá la estructura antes de que el desorden escale; los planes por tamaño están en [profactur.com/precios](https://profactur.com/precios).

> Multi-sucursal ordenado no es tener más sistemas: es tener uno solo con las separaciones correctas — numeración, stock y caja por local; catálogo, precios y mirada por dueño.
