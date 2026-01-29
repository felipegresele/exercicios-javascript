function exibirTexto() {
    let isValid = true;

    console.log("texto", isValid)
}

function exibirTextoEscopoGlobal() {
    //quando eu nao defino o tipo de variavel ele vai para escopo global entao eu consigo chamar ele fora da função também
    "use strict"
    //impede de criar variaveis no escopo global e manda erro para tirar a variavel
    let mostrarTexto = "Variavel no escopo global!";

    console.log("texto", mostrarTexto)
}

exibirTexto()
exibirTextoEscopoGlobal()

//aqui vai dar erro no console pois a variavel isValid é uma let entao so existe no escopo da função que é aonde ela foi criada
console.log(mostrarTexto)