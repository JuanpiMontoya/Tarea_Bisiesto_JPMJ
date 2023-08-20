import fizzbuzz from "./fizzbuzz"

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#fb-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  let contador = 1;
  while (contador <= firstNumber)
  {
    div.innerHTML += "<p>"+ fizzbuzz(contador) +"</p>";
    console.log(contador)
    contador++;
  } 
});
