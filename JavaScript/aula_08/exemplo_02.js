let alunos = [
    {nome:"davi" , nota: 9},
    {nome:"bruno", nota: 7}
]

let nomes = alunos.map(function(aluno){
    return aluno.nome
})  

console.log(nomes)