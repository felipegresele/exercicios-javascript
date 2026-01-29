let numero = 1

let isValid = false

//o if verifica se esta condicao q estou passando ela é true
if (!isValid) {
    console.log("é valido")
} else {
    console.log("nao é valido")
}

//se o primeiro valor for false ele para tudo e nao executa mais nada para frente
//se for true ele executa e passa para o proximo
isValid && console.log("teste 1")

//ele vai executar o primeiro apenas se for "true", ou seja se for verdadeiro se nao for ele passa para o proximo passo
//o passo q for executado como true o compilador do js so vai executar essa condição true e nada mais 
isValid || console.log("teste 2")
