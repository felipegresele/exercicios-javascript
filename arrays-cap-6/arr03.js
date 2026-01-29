//conteudo
//concat(), join(), toString()

let arr1 = [6,7,2]
let arr2 = [1,3,5]

//transforma em string
console.log(arr1.toString())

//adiciona oq eu passar como parametro em cada item do arr
console.log(arr1.join(" - "))

//concatena (adiciona) no array os itens que eu passar
let arr3 = arr1.concat(arr2, 4,5, "felipe")

console.log(arr3)