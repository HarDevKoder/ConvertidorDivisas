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
export const calcularValoresDivisas = () => {
  let [cop, dolar, euro] = ["", "", ""];

  // Cálculos para Ingreso de COP
  inputCop.addEventListener("input", () => {
    cop = inputCop.value.replace(/[,]/g, "");
    let regex = /^[0-9]*$/;
    if (regex.test(cop)) {
      let cop2 = Number(cop);
      if (cop2 >= 1000) {
        cop2 = cop2.toLocaleString("en");
        inputCop.value = cop2;
      }
      obtenerDatos("https://open.er-api.com/v6/latest/COP").then((datos) => {
        let dolarCalculado = Number((datos.rates.USD * cop).toFixed(2));
        let euroCalculado = Number((datos.rates.EUR * cop).toFixed(2));
        inputDolar.value = dolarCalculado.toLocaleString("en");
        inputEuro.value = euroCalculado.toLocaleString("en");
      });
    } else {
      alert("Entrada inválida. Por favor, ingresa solo números.");
      inputCop.value = "";
      inputCop.focus();
    }
  });

  // Cálculos para Ingreso de USD
  inputDolar.addEventListener("input", () => {
    dolar = inputDolar.value.replace(/[,]/g, "");
    let regex = /^[0-9]*$/;
    if (regex.test(dolar)) {
      let dolar2 = Number(dolar);
      if (dolar2 >= 1000) {
        dolar2 = dolar2.toLocaleString("en");
        inputDolar.value = dolar2;
      }
      obtenerDatos("https://open.er-api.com/v6/latest/USD").then((datos) => {
        let copCalculado = Number((datos.rates.COP * dolar).toFixed(2));
        let euroCalculado = Number((datos.rates.EUR * dolar).toFixed(2));
        inputCop.value = copCalculado.toLocaleString("en");
        inputEuro.value = euroCalculado.toLocaleString("en");
      });
    } else {
      alert("Entrada inválida. Por favor, ingresa solo números.");
      inputDolar.value = "";
      inputDolar.focus();
    }
  });

  // Cálculos para Ingreso de EUR
  inputEuro.addEventListener("input", () => {
    euro = inputEuro.value.replace(/[,]/g, "");
    let regex = /^[0-9]*$/;
    if (regex.test(euro)) {
      let euro2 = Number(euro);
      if (euro2 >= 1000) {
        euro2 = euro2.toLocaleString("en");
        inputEuro.value = euro2;
      }
      obtenerDatos("https://open.er-api.com/v6/latest/eur").then((datos) => {
        let copCalculado = Number((datos.rates.COP * euro).toFixed(2));
        let dolarCalculado = Number((datos.rates.USD * euro).toFixed(2));
        inputCop.value = copCalculado.toLocaleString("en");
        inputDolar.value = dolarCalculado.toLocaleString("en");
      });
    } else {
      alert("Entrada inválida. Por favor, ingresa solo números.");
      inputEuro.value = "";
      inputEuro.focus();
    }
  });
};
