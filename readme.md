# Correr el bot

## Requisitos

1. [Node.js](https://nodejs.org/en/) 

## Pasos

1. Instalar dependencias con `npm i`.
2. Configurar el tiempo de comprobación modificando el valor de la constante `CHECK_INTERVAL` en `index.js`.
3. Por ejemplo, para realizar comprobaciones cada `35 segundos`, se debería colocar:
```js
const CHECK_INTERVAL = 35000;
```
3. Configurar los talles de interés modificando el valor de la constante `WATCH_VARIANTS ` en `index.js`.
Por ejemplo para que sólo detecte talle `M` y `L`, se debería colocar:
```js
const WATCH_VARIANTS = ['M', 'L'];
```
4. Ejecutar `node index.js`.

## ¿Que hace?

Cada cierto tiempo (definido en `CHECK_INTERVAL`) consulta la API de adidas para ver si hay disponibilidad de la camiseta. En este momento aparece un mensaje "fetching... (FECHA Y HORA)".

Si no hay disponibilidad, no muestra nada.

En caso que exista disponibilidad de los talles de interés (definido en `WATCH_VARIANTS`), comenzará a emitir un sonido y mostrará en pantalla los detalles para cada variante disponible.
