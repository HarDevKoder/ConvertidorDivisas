// Referenciar los elementos del DOM
export const referenciarElementosDom = () => {
  return {
    cop: document.querySelector("#cop"),
    dolar: document.querySelector("#dolar"),
    euro: document.querySelector("#euro")
  };
};

// Funcion que resalta el div seleccionado
export const resaltarTarjetas = (divs) => {
  divs.forEach(div=>{
    div.addEventListener('click', ()=>{
      // Desresalto todos los divs
      divs.forEach(div => div.classList.remove("resaltado"));
      // Resalto el div actual
      div.classList.add("resaltado");
    })
  })
}
 