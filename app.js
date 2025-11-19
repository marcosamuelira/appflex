/**
 *  App flex
 * @author Marcos Samuel
 */

function calcular() {
    //Entrada
    // variavel ETANOL recebe o conteudo da cixa input
    let etanol = frmflex.inputetanol.value
    console.log(etanol) // teste e apoio a lógica

    let gasolina = frmflex.inputgasolina.value
    console.log(gasolina) // teste e apoio a lógica


    //Processamento
    //se o valor do litro do etanol custar até 70% do valor da gasolina abastecer com Etanol

    if (etanol < 0.7 * gasolina) {
        console.log("abasteça com etanol")
        // a linha abixo troca a imagem no html
        document.getElementById("status").src = "./img/etanol.png"
    } else {
        console.log("abasteça com gasolina")
        // a linha abixo troca a imagem no html
        document.getElementById("status").src = "./img/gasolina.png"
    }

}

function limpar() {
    document.getElementById("status").src = "./img/neutro.png"
}

