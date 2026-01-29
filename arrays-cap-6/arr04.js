//conteudo
// push(), pop(), shift(), unshift(), slice(), splice()
let arr = [1,3,5,7,9]

//adiciona o valor no array
let teste = arr.push(11)

console.log(teste)
console.log(arr)

//pega o ultimo valor e exclui do array original
let ultimoItem = arr.pop()

console.log(ultimoItem)
console.log(arr)

//pega o primeiro valor e exclui do array original
let primeiroItem = arr.shift()

console.log(primeiroItem)
console.log(arr)

//inclui no começo do array
let teste2 = arr.unshift(4)
console.log(teste2)
console.log(arr)

//mostra a partir do indice 2 (q eu passei) e corta no 4 (ultimo indice) criando um array novo recortado
let arr2 = arr.slice(2,3)
console.log(arr2)
console.log(arr)

//o primeiro parametro é o numero q quero começar a cortar o array apartir dele
//quantos numeros quero cortar a partir do primeiro parametro
let arr3 = arr.splice(2, 1, "splice")
console.log(arr3)
console.log(arr)