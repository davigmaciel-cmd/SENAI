function  celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32
}

let celsius = [
    0, 100
]

celsius.forEach(function(item){
    console.log(celsiusParaFahrenheit(item))
})