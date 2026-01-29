
let nomeGlobal = "felipe"

function exibirNome() {

    //funcao por bloco funciona apenas dentro do bloco em que ela esta dentro
    let nome1 = "joao"

    // o var tem escopo por função ou seja uma variavel funciona funcao inteira
    if (true) {
        var nome2 = "pedro"
        console.log("var dentro do bloco if: " + nome2)
    }

    if (true) {
        let nome1 = "jose"
        console.log("let dentro do bloco if: " + nome1)
    }

    console.log("var nome2 do if funciona fora do bloco if: " + nome2)
    console.log("let nome1 dentro da funcao no escopo local: " + nome1)
}

exibirNome()

console.log("O nomeGlobal esta no escopo global: " + nomeGlobal)

//isso tbm se atribui a funcoes
//se eu tiver uma funcao dentro de outra funcao nao da para chamar ela sem chamar a funcao principal

function funcaoPrincipal() {
    let nome = "Função Principal local dentro da funcaoPrincipal"

    function funcaoSecundaria() {
        let nome = "Função Secundaria local na funcaoSecundaria dentro da funcaoPrincipal"
        console.log(nome)
    }
    
    //so da para chamar aqui pois essa funcao é em escopo local e so existe aqui dentro da funcaoPrincipal()
    funcaoSecundaria()
    console.log(nome)
}

funcaoPrincipal();