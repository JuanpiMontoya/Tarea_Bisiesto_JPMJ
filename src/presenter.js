import esBisiesto from "./Bisiesto"

const anio = document.querySelector("#anio-bisiesto");
const form = document.querySelector("#bs-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const anioUs = Number.parseInt(anio.value);
  if(esBisiesto(anioUs) == true)
  {
    div.innerHTML += "<p>El año ingresado "+ anio +" es un año bisiesto</p>";
  }
  else
  {
    div.innerHTML += "<p>El año ingresado "+ anio +" no es un año bisiesto</p>";
  }
});
