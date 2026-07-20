let cargo = "gerente"

switch(cargo) {
    case 1 :
        console.log("estagiario → R$ 1500")
        break;
    
    case 2 :
        console.log("analista → R$ 4000")
        break;

    case 3 :
        console.log("gerente → R$ 8000")
        break;

    case 4 :
        console.log("diretor → R$ 15000")
        break;

    default:
        console.log("Cargo não encontrado")
}