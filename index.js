const h1 = document.querySelector("h1");
const input = document.querySelector("btnCalcular");
const form = document.querySelector("#form");
const valor1Input = document.getElementById("valor1")
const valor2Input = document.getElementById("valor2")
const btnCalcularButton = document.getElementById("btnCalcular")
const totalP = document.getElementById("total")

btnCalcularButton.addEventListener("click", evaluar)

function evaluar(event){
    event.preventDefault()
    const total = parseFloat(valor1Input.value) + parseFloat(valor2Input.value)
    totalP.innerText = "El resultado es: " + total
}
