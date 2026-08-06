const title = document.querySelector(".title")
const btnView = document.querySelector(".btnView")
const resultado = document.querySelector("#resultado")


btnView.addEventListener("click", function(){
    resultado.textContent = title.textContent
})