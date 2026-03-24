//destructuring

//sem

const pessoa = {
    nome: "Felipe",
    idade: 20
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.sobrenome)

//com

//renomear o nome e atribuir valor se o campo vir null
const {nome: meuNome, idade, sobrenome = "dada"} = pessoa


console.log(meuNome)
console.log(idade)
console.log(sobrenome)

//Object.freeze

const usuario = {
    nome: "Felipe",
    endereco: {
        estado: "SP"
    }
}

//congela o valor
Object.freeze(usuario)

//nao alterar, adicionar ou remover propriedades

usuario.nome = "Joao"

//OBS: se tiver um outro objeto dentro do obj base, ele pode ser mudado
//so congela o primeiro nivel
usuario.endereco.estado = "RJ"

console.log(usuario.nome)
console.log(usuario)

//retorna se um obj ta congelado ou nao
console.log(Object.isFrozen(usuario))

//Object.keys() e Object.getOwnPropertyNames()

const obj = {nome: "Felipe", sobrenome: "Gresele", idade: 21}

Object.defineProperty(obj, "sobrenome", {value: "dada", enumerable: false, writable: false})

//retorna apenas propiedades enumeraveis
console.log(Object.keys(obj))

//retorna propiedades enumeraveis ou nao, retorna TUDO
console.log(Object.getOwnPropertyNames(obj))