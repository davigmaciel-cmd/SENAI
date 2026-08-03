let alunos = [
    {nome: "igor",nota: 9},
    {nome:"bruno",nota:5}
]

let aprovados = alunos.filter(function(aluno){
    return aluno.nota >= 7
})

console.log(aprovados)