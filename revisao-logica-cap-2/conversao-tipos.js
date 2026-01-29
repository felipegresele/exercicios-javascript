let n1 = 10
let n2 = "2"

//o javascript em executacao ele é inteligente o suficiente para ver se essa string ela é um numero se for um numero ele pode ser number 
//entao trasforma esse numero em tipo number faz a multiplicação
//se colocar algum valor na string q nao senha um numero retorna NaN no resultado da operação - NotaNumber
console.log(n1 * n2);

let n3 = 10
let n4 = "2"

//o + serve para somar e concatenar string entao o js entende q é para concatenar entao ele transforma o numero para string para juntar as varíaveis
console.log(n3 + n4, typeof n3, typeof n4)

//para converter string para numero tem 3 formas

//parseInt, parseFloat e Number()

n4 = parseInt(n4)
console.log(n3 + n4, typeof n4)

n5 = "10.3233"
n5 = parseFloat(n5)

console.log(n4 + n5, typeof n5)

//se tiver letra junto com o numero ele ignora e so exibe o numero
let n6 = "14a"
n6 = parseInt(n6)

//se a letra vir antes do numero ele da erro NaN
//não consegue identicar o numero
let n7 = "a15"
n7 = parseInt(n7)

//Usando Number() ele da erro nas duas formas retorna tipo NaN, so pode ter numéro na string
let n8 = "a15"
n7 = Number(n7)

console.log(n6)
console.log(n7)