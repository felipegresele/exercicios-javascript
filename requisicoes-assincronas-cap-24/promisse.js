//Promise representa uma operacao assincrona que ainda nao terminou
//ela pode ter 3 estados, 1 - pendente, 2 - resolvida ou 3- rejeitada

const promisse = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve("Deu certo")
    } else {
        reject("Deu errado")
    }
})

console.log(promisse)

//metodos mais importantes da promisse - then(), catch() e finally()
// then é a funcao que eu vou determinar o que vai fazer quando a Promisse fizer a requisição com o servidor e buscar os dados, então faça isso
// catch é quando der erro, então faça isso
// finally é uma função opcional e é o que ela vai fazer por final
promisse.then(data => console.log(data)).catch(data => console.log(data)).finally(() => console.log("Terminou!"))

//fetch(

//fetch é uma função usada para fazer requisições assincronas HTTP para APIs)
//retorna uma promisse



