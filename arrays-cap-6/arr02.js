//conteudo 
//indexOf(), lastIndexOf(), includes(), find(), findIndex()

let arr = [4,5,10,20,30, 35, 10, 5]

//passa o valor do item q quero descobrir 
//retorna o indice do primeiro encontrado
console.log(arr.indexOf(5))

//passa o valor do item q quero descobrir 
//retorna o indice do ultimo encontrado
console.log(arr.lastIndexOf(5))

//verificam se existe esse valor no array
console.log(arr.includes(5))

//retorna o primeiro valor que satisfaz a função
console.log(arr.find((el) => {
    return el > 10
}))

//retorna o indice do 1 valor que satisfaz a função
console.log(arr.findIndex((el) => {
    return el < 10
}))