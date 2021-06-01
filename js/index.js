const getAleatorio() => Math.ceil(Math.random() * 10);

/*Generamos el aleatorio:*/
const aleatorio = getAleatorio();

const inputElemento = document.querySelector(".numero");
const botonElemento = document.queriSelector(".adivinar");

botonElemento.addEventListener("click", () => {
  const numeroUsuario = +inputElemento.value; /*Usamos el + delante para decirle que es un numero*/
})
