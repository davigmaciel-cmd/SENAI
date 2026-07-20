let statuss = "entregue"

switch(statuss) {
    case 1 :
        console.log("pendente")
        break ;

    case 2 :
        console.log("pagamento não finalizado")
        break;

    case 3 :
        console.log("enviado")
        break;

    case 4 :
        console.log("a caminho")
        break;

    case 5 :
        console.log("entregue")
        break;

    case 6 :
        console.log("finalizado")
        break;
    
    default:
        console.log("error 404")
}