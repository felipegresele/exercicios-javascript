let str1 = "minha string bacanuda"

//modifica o primeiro elemento que encontrar
console.log(str1.replace("i", "o"))
//modifica o todos os elementos que encontrar
console.log(str1.replaceAll("i", "o"))

//retorna a primeira posição que encontrar de uma determinada string dentro de uma outra string
//se nao tiver retorna -1
console.log(str1.indexOf("minha"))

//retorna a ultima posição que encontrar de uma determinada string dentro de uma outra string
console.log(str1.lastIndexOf("i"))

//retorna um boleano se essa string existe dentro da string
console.log(str1.includes("minha"))