//conteudo
//every(), some(), forEach(),filter() e map()

const arr = [1,5,10, "ola", true]

//verifica se todos os elementos do array sao da condição que estou passando
let soNumeros = arr.every((el) => {
    console.log(el)
    console.log(typeof el)
    return typeof el === "number"
})

//verifica se existe ja um elemento desse no array
let apenasUmElementoForVerdadeiro = arr.some((el) => {
    console.log(el)
    return typeof el === "number" && el < 20
})

let filtro = arr.filter((el, i, array) => {
    console.log(el)
    console.log(i)
    console.log(array)
    return typeof el === "number"
})

//passa sobre cada item do array e itera 
arr.forEach((el, i) => {
    console.log(el * i)
})

const arr2 = [1,2,3]

arr2.forEach((el, i) => {
    console.log(el * i)
})

console.log(filtro)

// console.log(soNumeros)
// console.log(apenasUmElementoForVerdadeiro)