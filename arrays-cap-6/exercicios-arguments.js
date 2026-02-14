/*
🧠 Exercício 1 — Ver o arguments

👉 Objetivo: só entender o que chega na função

function mostrar() {
  console.log(arguments);
}

mostrar("React", "Java", "SQL");
*/

//arguments armazena oq eu passo nos parametros da função
function mostrarArguments() {
    console.log(arguments)
}

mostrarArguments(1, "felipe", 3)

/*
🧠 Exercício 2 — Somar números sem parâmetros

👉 Aqui começa a mágica

function somar() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(somar(5, 10, 15));
*/

function somar() {
    let total = 0

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        console.log(arguments[i])
    }

    return console.log(total)
}

somar(1, 2, 4, 5, 6, 10, 19)

/*
🔹 Exercício 3 — Contar argumentos

Crie uma função que:

Retorne quantos argumentos foram passados para ela

Use arguments.length
*/

function contarQuantidadeDeArguments() {
    let total = 0;
    const soma = total + arguments.length
    return soma;
}

console.log(contarQuantidadeDeArguments(1, 3, "felipe", false, true))

/*
🔹 Exercício 4 — Maior número

Crie uma função que:

Receba qualquer quantidade de números

Retorne o maior deles

Use apenas arguments
*/

function maiorNumero() {
    const numeros = [...arguments]
    return numeros
}

console.log(maiorNumero(1, 10, 30))

/*
🔹 Exercício 5 — Filtrar pares

Crie uma função que:

Receba vários números

Retorne somente os números pares

Use arguments
*/

function filtrarPares() {
    const numeros = [...arguments]
    const numerosPares = []
    const numerosImpares = []
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            numerosPares.push(numero)
            console.log("Pares: " + numerosPares)
        }
        else if (numero % 2 !== 0) {
            numerosImpares.push(numero)
            console.log("Impares: " + numerosImpares)
        }
    }
    return numerosPares
}

console.log("Pares:", filtrarPares(1, 2, 3, 4))

/*
🔹 Exercício 6 — Converter arguments em array

Crie uma função que:

Converta arguments em um array

Retorne esse array

Depois use algum método de array (map, filter ou reduce)
*/
function converterParaArray() {
    const convertendo = [...arguments]
    if (Array.isArray(convertendo)) {
        console.log("É um array")
    }
    return console.log(convertendo);
}

converterParaArray(1, 2, 3)

/*
🔹 Exercício 7 — Simular um carrinho de compras

Crie uma função que:

Receba preços como argumentos

Some tudo

Retorne o total formatado como "R$ XX,XX"
*/

function carrinhoDeCompras() {
    const valores = [...arguments] //transformando os valores em array
    for (let valor of valores) {
        if (typeof valor !== "number" || isNaN(valor)) {
            console.log("Erro este valor não é um numéro:", valor)
            return
        }
    }
    const soma = valores.reduce((acumulado, atual) => acumulado + atual, 0)
    console.log(`Soma Total: R$:${soma.toFixed(2)}`)
    return soma;
}

carrinhoDeCompras(1, 2, 3, "felipe")

/*
🔹 Exercício 8 — Descobrir erro

Crie uma arrow function que:

Tente usar arguments

Observe o erro

Explique (em comentário) por que isso acontece
*/

//apenas function tem arguments
const acharErro = () => {
    console.log(arguments)
}

acharErro(1,2)

/*
🔹 Exercício 9 — arguments + loop

Crie uma função que:

Percorra arguments usando:

for

for...of

Compare qual ficou mais simples
*/

function Percorrendo() {
    const valores = [...arguments]
    for (let valor of valores) {
        console.log(valor)
    }
    for (let i = 0; i < valores.length; i++) {
        console.log("Indice:" + i + " Valor:" + valores[i])
    }
}

Percorrendo(1,2,3)

/*
🔹 Exercício 10 — arguments vs rest

Crie duas funções que:

Façam exatamente a mesma coisa

Uma usando arguments

Outra usando ...rest
Depois escreva qual você achou mais legível.
*/