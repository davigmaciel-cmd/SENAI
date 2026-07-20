let amigos = [
    {nome : "davi" , idade : 15},
    {nome : "beatriz" , idade : 16},
    {nome : "caia" , idade : 15},
    {nome : "dudu" , idade : 15}
]

amigos.forEach(function(amigo){
    console.log(`nome : ${amigo.nome} - idade : ${amigo.idade}`)
})