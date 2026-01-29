form.addEventListener("submit", function (event) {
    event.preventDefault(); //evita o reload automatico
})

function calcularIMC() {
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const mensagem = document.getElementById("mensagem")

    const pesoValue = Number(peso.value)
    const alturaValue = Number(altura.value)

    if (isNaN(pesoValue) || pesoValue <= 0) {
        mensagem.style.color = "red"
        mensagem.innerHTML = "Erro, valor de peso é inválido"
        return
    }

    if (alturaValue !== typeof number) {
        mensagem.style.color = "red"
        mensagem.innerHTML = "Erro, valor de altura so pode ser numérico"
        return
    }

    if (isNaN(alturaValue) || alturaValue <= 0) {
        mensagem.style.color = "red"
        mensagem.innerHTML = "Erro, valor de altura é inválido"
        return
    }

    const calculo = pesoValue / alturaValue * 2
    mensagem.style.color = "green"
    mensagem.innerHTML = "Seu IMC é de " + calculo.toFixed(2);

}