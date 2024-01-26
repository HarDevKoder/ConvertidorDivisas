// ----------------------------------------------------------------------------
// IMPORTO FUNCIONES A UTILIZAR
// ----------------------------------------------------------------------------
import {
  referenciarElementosDom,
  resaltarTarjetas,
  calcularValoresDivisas,
  verificarServiceWorker,
} from "./funciones.js";

// ----------------------------------------------------------------------------
// PROGRAMA PRINCIPAL
// ----------------------------------------------------------------------------

// referencio elementos del DOM
referenciarElementosDom();

// Verifico en consola si el navegador soporta service worker
verificarServiceWorker();

// Resalto la tarjeta selecconada
resaltarTarjetas();

// Realizar Calculos de divisas
calcularValoresDivisas();
