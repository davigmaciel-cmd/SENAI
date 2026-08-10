const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const btn3 = document.querySelector(`#btn3`)
const titulo = document.querySelector("p")

btn1.addEventListener("click", function (){
    titulo.style.color = btn1.style.color
})

btn2.addEventListener("click", function (){
    titulo.style.color = btn2.style.color
})

btn3.addEventListener("click", function (){
    titulo.style.color = btn3.style.color
})