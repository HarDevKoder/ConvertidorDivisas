// ----------------------------------------------------------------------------
// IMPORTO FUNCIONES A UTILIZAR
// ----------------------------------------------------------------------------
import { referenciarElementosDom, resaltarTarjetas } from "./funciones.js";


// ----------------------------------------------------------------------------
// PROGRAMA PRINCIPAL
// ----------------------------------------------------------------------------

// referencio elementos del DOM
referenciarElementosDom();

// Creo Array con las tarjetas (divs)
const divs = [cop, dolar, euro];

// Resalto la tarjeta selecconada
resaltarTarjetas(divs);


