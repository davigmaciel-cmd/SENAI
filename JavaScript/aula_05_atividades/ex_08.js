let valorCompra = 250
let valorfinal

if(valorCompra > 500) {
    valorCompra = valorcompra * 0.8
}
    
else if (valorCompra >= 200) {
    valorfinal = valorCompra * 0.9
}

else if (valorCompra <= 100) {
    valorfinal = valorCompra * 0.95
}

else {
    valorfinal = valorcompra 
}

console.log (`Valor Final : R$ ${valorfinal}`)