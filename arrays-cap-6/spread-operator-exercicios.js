//spread operator exericicios

/*
1️⃣ Copiando array

Crie uma cópia do array abaixo usando spread, sem usar .slice().

const numeros = [1, 2, 3, 4];
*/

const numeros = [1,2,3,4]

const numerosCopiados = [...numeros]
console.log(numerosCopiados)

/*
2️⃣ Juntando arrays

Una os dois arrays abaixo em um único array chamado resultado.

const a = [10, 20];
const b = [30, 40];
*/

const a = [10, 20];
const b = [30, 40];

const arrJuntos = [...a,...b]

console.log(arrJuntos)

/*
3️⃣ Adicionando itens

Crie um novo array adicionando o número 0 no início e 5 no final:
*/

const arr = [1,2,3,4]

const adicionandoValorInicial = arr.unshift(0)
const adicionandoValorFinal = arr.push(5)

console.log(arr)