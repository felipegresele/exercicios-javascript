//forma formal 
//criando instaciando a classe Array do JavaScript
const arr = new Array()

const arr2 = new Array(true, "Felipe", 20, new Array(1,3,4))

//passando a posição do array q quero adicionar a variavel
arr[0] = "Pedro"
arr[1] = 21

console.log(arr)
console.log(arr2)
console.log(arr2.length)

//é possivel buscar uma posicao dentro do array e buscar uma variavel dentro do indice dele e tbm da pra buscar um indice de uma string
console.log(arr2[3][1])
console.log(arr2[1][0])

//forma literal
//criando direto com []
const arr3 = [1,2,3,4,5,6]

arr3.push("Felipe")

let n = 0
console.log(arr3[n])
console.log(arr3)