let display = document.querySelector(".display");
let btnMore = document.querySelector(".btnMore");
let btnLess = document.querySelector(".btnLess");

let contador = 0;

btnMore.addEventListener("click" , function(){
    contador ++;
    display.textContent = contador;
})

btnLess.addEventListener("click" , function() {
    contador --;
    display.textContent = contador;
})