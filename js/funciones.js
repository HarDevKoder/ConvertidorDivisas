// Referenciar los elementos del DOM
export const referenciarElementosDom = () => {
  return {
    container: document.querySelector("#container"),
    btnCop: document.querySelector("#btnCop"),
    btnDolar: document.querySelector("#btnDolar"),
    btnEuro: document.querySelector("#btnEuro"),
    inputCop: document.querySelector("#inputCop"),
    inputDolar: document.querySelector("#inputDolar"),
    inputEuro: document.querySelector("#inputEuro"),
  };
};

// Funcion que resalta el div seleccionado
export const resaltarTarjetas = () => {
  const divs = [cop, dolar, euro];
  divs.forEach((div) => {
    div.addEventListener("click", () => {
      // Desresalto todos los divs
      divs.forEach((div) => div.classList.remove("resaltado"));
      // Resalto el div actual
      div.classList.add("resaltado");
      if (div.id === "cop") {
        inputCop.style.display = "block";
        inputCop.focus();
      } else if (div.id === "dolar") {
        inputDolar.style.display = "block";
        inputDolar.focus();
      } else {
        inputEuro.style.display = "block";
        inputEuro.focus();
      }
    });
  });
};

// Funcion que extrae los valores de la API
export async function obtenerDatos(url) {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}

// Función que detecta escritura en un input y muestra equivalencias en tiempo real
export const detectarEscrituraInput = () => {
  let [cop, dolar, euro] = [0, 0, 0];

  inputCop.addEventListener("input", () => {
    cop = Number(inputCop.value);
    obtenerDatos("https://open.er-api.com/v6/latest/COP").then((datos) => {
      inputDolar.value = Number((datos.rates.USD * cop).toFixed(2));
      inputEuro.value = Number((datos.rates.EUR * cop).toFixed(2));
    });
  });

  inputDolar.addEventListener("input", () => {
    dolar = Number(inputDolar.value);
    obtenerDatos("https://open.er-api.com/v6/latest/USD").then((datos) => {
      inputCop.value = Number(datos.rates.COP * dolar).toFixed(2);
      inputEuro.value = Number(datos.rates.EUR * dolar).toFixed(2);
    });
  });

  inputEuro.addEventListener("input", () => {
    euro = Number(inputEuro.value);
    obtenerDatos("https://open.er-api.com/v6/latest/eur").then((datos) => {
      inputCop.value = Number(datos.rates.COP * euro).toFixed(2);
      inputDolar.value = Number(datos.rates.USD * euro).toFixed(2);
    });
  });
};
