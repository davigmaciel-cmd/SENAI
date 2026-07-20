let filme = {
    titulo: "pequeno principe",
    autor: "tom holand",
    ano: 2018,
    genero: "animação"
}

for (let chave in filme) {
    console.log(`${chave} - ${filme[filme.chave]}`)
}
console.log(Object.keys(filmes))
console.log(Object.values(filmes))