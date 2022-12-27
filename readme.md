# Correr el bot

## Requisitos

1. [Node.js](https://nodejs.org/en/) 

## Pasos

1. Instalar dependencias con `npm i`.
2. Configurar el tiempo de comprobación modificando el valor de la constante `CHECK_INTERVAL` en `index.js`.
3. Ejecutar `node index.js`

## ¿Que hace?

Cada cierto tiempo (definido en `CHECK_INTERVAL`) consulta la API de adidas para ver si hay disponibilidad de la camiseta. En este momento aparece un mensaje "fetching... (FECHA Y HORA)".

Si no hay disponibilidad, no muestra nada.

En caso que exista disponibilidad, comenzará a emitir un sonido y mostrará en pantalla los detalles para cada variante disponible.
