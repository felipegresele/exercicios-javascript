//conteudo
//reverse(), reduce() + Desafio

let arr = [1,2,3]
//so coloca ao contrario o array
console.log(arr.reverse())

//pega o primeiro valor acumulado e soma com o atual
//faz isso até acumular com todos os valores do array
let soma = arr.reduce((acumulador, atual) => {
    return acumulador + atual
})

console.log(soma)

const numeros = [1,2,3,4,4];

const numerosUnicos = numeros.reduce((numerosUnicos, numeroAtual) => {
    if (numerosUnicos.indexOf(numeroAtual < 0)) {
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
}, [])

console.log(numerosUnicos)