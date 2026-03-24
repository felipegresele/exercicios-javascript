
function sotearNumeroAleatorio(inicio = 0, fim = 10) {
    console.log(inicio, fim)
    const calculo = Math.floor(Math.random() * (fim - inicio + 1) + inicio) 
    return console.log(calculo)
}

sotearNumeroAleatorio(1,5)