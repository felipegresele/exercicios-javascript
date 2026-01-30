/*
DESAFIO
criar duas funções: soma() e media()
- As funções podem receber 1 ou + parâmetros
*/

function soma(...numeros) {
    return numeros.reduce((acumulado, atual) => acumulado + atual, 0) //inicia contagem com 0
}

function media() {
    return soma(...numeros) / numeros.length
}

console.log(soma(1,2,3))
console.log(media(1,2,3,4,5))
