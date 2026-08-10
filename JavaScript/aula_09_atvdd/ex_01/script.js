const btnView = document.querySelector ("#btnView") ;
const resultado = document.querySelector ("#resultado");

btnView.addEventListener("click",function(){
    const title = document.querySelector(`h1`)
    resultado.textContent = title.textContent;
});