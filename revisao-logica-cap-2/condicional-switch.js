
diaSemana = "teste"

if (diaSemana === 0) {
    console.log("Hoje é domingo")
} 
else if (diaSemana === 1) {
    console.log("Hoje é segunda")
} 
else if (diaSemana === 2) {
    console.log("Hoje é terça")
} 
else if (diaSemana === 3) {
    console.log("Hoje é quarta")
}
else if (diaSemana === 4) {
    console.log("Hoje é quinta")
} 
else if (diaSemana === 5) {
    console.log("Hoje é sexta")
} 
else if (diaSemana === 6) {
    console.log("Hoje é sabado")
} else {
    console.log("Hoje é --")
}

let dia = ""

//no case eu passo qual é o valor ou nome se for string da minha variavel e ele vai comparar para ver é igual o valor e tipo dela ===
switch(diaSemana) {
    case 0: 
        dia = "domingo"
        break
    case 1: 
        dia = "segunda"
        break
    case 2:
        dia = "terça"
        break
    default: 
        dia = "hoje é dia --"
}

console.log(`Hoje é: ${dia}`)