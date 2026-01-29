//capacidade do js de içar (rodar primeiro) quando é executado uma function declaration

//a funcao é exibida tanto antes quanto depois o hoisting dela é executado primeiro quando o js é executado

teste()

function teste() {
    console.log("teste função")
}

teste()

//var nao é mais utilizado
//mas a variavel é criada mas atribuida undefined se eu tentar executar o valor antes de ter criado
console.log(teste2)
var teste2 = "ola"

//const e let da erro de variavel nao criada
let teste3 = "teste3"
console.log(teste3)