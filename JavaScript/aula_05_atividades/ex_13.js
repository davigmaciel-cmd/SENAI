let statuss = "entregue"

switch(statuss) {
    case "pendente" :
        console.log("pagamento não finalizado")
        break ;

    case "enviado" :
        console.log("a caminho")
        break;

    case "entregue" :
        console.log("finalizado")
        break;

    default:
        console.log("status desconhecido")
}