let filmes = [
    {titulo: "Pantera negra", ano:2018 , genero:"ação"},
    {titulo: "carros 3", ano:2019 , genero:"animação" },
    {titulo: "toy store 5" , ano : 2026 , genero:"animação"},
]

filmes.forEach(function(filme) {
    console.log(`${filme.titulo} - ${filme.ano} - ${filme.genero}`)
})