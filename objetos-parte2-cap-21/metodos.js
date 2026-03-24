//new Object
//construtor basico
const obj = new Object({
    nome: "Felipe",
    sobrenome: "Gresele"
})

obj.idade = 20
obj.sobrenome = "dadada"

console.log(obj)

//apenas é usado a classe quando vc quer q o objeto tenha acesso as funcões que a classe obj do js oferece


//Object.create()

//cria outro objeto herdando a propriedade do objeto base

const pessoa = {
    falar() {
        console.log("ola!")
    }
}

const joao = Object.create(pessoa);

joao.nome = "Joao"

console.log(joao.nome)
//so herda o que tem no obj base
//joao nao tem a fn falar em seu objeto mas no seu prototipo do js ele herda essa classe do obj base (pessoa) e la tem essa fn entao ele executa
joao.falar()

console.log(joao)

//Object.assign()

const pessoa2 = {
    nome: "Felipe"
}
const dados = {
    idade: 20
}

//Object.assign(destino, origem)

//copia propriedades de um objeto para outro
Object.assign(pessoa2, dados)

console.log(pessoa2)

 //Object.keys()

 const pessoa3 = {
    nome: "Daniel",
    idade: 21,
    cidade: "SP"
 }

 //retorna o nome das chaves
 console.log(Object.keys(pessoa3))

 //Object.values()

 //retorna o valor de cada chave
 console.log(Object.values(pessoa3))

 //Object.entries()

 const pessoa4 = {
    nome: "Daniel",
    sobrenome: "Souza",
    idade: 21,
    cidade: "SP"
 }

//retorna todas as chaves e valor e vira um array
//array de arrays
const objEntries = Object.entries(pessoa4)

console.log(Array.isArray(objEntries))

console.log(objEntries)

 for (const [chave, valor] of Object.entries(pessoa4)) {
    console.log(chave, valor)
 }

 const arr2 = [[1,2,3], [3,"Felipe", " Gresele "]]

const resultado = arr2.map((linha) => linha.map(valor => typeof valor === "string" ? valor.trim() : valor ))

const arr3 = []
const arr4 = {}

console.log(typeof arr3)
console.log(typeof arr4)