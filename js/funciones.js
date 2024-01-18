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

// Función que detecta el boton para calcular la divisa (cop, dolar, euro)
export const detectarBotonCalculo = () => {
  btnCop.addEventListener("click", () => {});
  btnDolar.addEventListener("click", () => {});
  btnEuro.addEventListener("click", () => {});
};
