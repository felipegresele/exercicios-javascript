
const pessoas = [
    {
        nome: "Felipe",
        idade: 15,
    },
    {
        nome: "Jose",
        idade: 20,
    },
    {
        nome: "Arthur",
        idade: 25,
    }
]

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}

const produtos = [
    {
        nome: "sabonete",
        marca: "dadada",
        quantidade: 10
    },
    {
        nome: "vassoura",
        marca: "dadada",
        quantidade: 15
    },
    {
        nome: "bola",
        marca: "dadada",
        quantidade: 20
    },
    {
        nome: "suco de uva",
        marca: "dadada",
        quantidade: 25
    },
    {
        nome: "suco de laranja",
        marca: "dadada",
        quantidade: 2
    },
    {
        nome: "suco de maça",
        marca: "dadada",
        quantidade: 0
    }
]

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].quantidade === 0) {
        console.log(`${produtos[i].nome} da marca ${produtos[i].marca} tem ${produtos[i].quantidade} unidade(s) no estoque, ESGOTADO!`)
    } else if (produtos[i].quantidade <= 3) {
        console.log(`${produtos[i].nome} da marca ${produtos[i].marca} tem ${produtos[i].quantidade} unidade(s), esta acabando precisa reabastecer!`)
    } else {
        console.log(`${produtos[i].nome} da marca ${produtos[i].marca} tem ${produtos[i].quantidade} unidade(s) no estoque`)
    } 
}

let numero = 10

//executa todos q for true
numero === 10 || console.log("PARO! o primeiro valor é true e passa para o proximo ate algum ser false") || numero === 5 || console.log("teste1")

//executa todos q for false
numero === 10 && numero === 5 && numero === 7 && console.log("teste 2")

console.log("TRUE") && numero === 10