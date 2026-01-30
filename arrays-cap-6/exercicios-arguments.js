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

mostrarArguments(1,"felipe", 3)

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

somar(1,2,4,5,6,10,19)

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

console.log(contarQuantidadeDeArguments(1,3,"felipe", false, true))

function maiorNumero() {
    const numeros = [...arguments]
    return numeros
}

console.log(maiorNumero(1,10,30))

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

console.log("Pares:", filtrarPares(1,2,3,4))