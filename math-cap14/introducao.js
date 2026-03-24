const min = Math.min(2,4,5,6)
const max = Math.max(2,4,5,6)

console.log(min)
console.log(max)

const arr = [1,2,4]

console.log(Math.min(...arr))

//abaixo de .5 arredonda para baixo, acima arredonda para cima
const numeroArredondado = Math.round(45.4)
console.log(numeroArredondado)

//arredondar para baixo
const arredondaParaBaixo = Math.floor(45.0434)
console.log(arredondaParaBaixo)

//arredondar para cima
const arredondaParaCima = Math.ceil(45.0434)
console.log(arredondaParaCima)

//o random varia de 0 ate quase o numero q eu multiplicar
//nunca vai retornar o numero maximo
const numeroAleatorio = Math.floor(Math.random() * 3)

console.log(numeroAleatorio)