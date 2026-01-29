// const nomes = ["Felipe", "Maria", "José"]
// const idades = [20, 23, 30]
// console.log(nomes[0], idades[0])

const pessoa = {
    nome: "Felipe",
    idade: 20,
}

pessoa.nome = "pedro"
pessoa.idade = 30

console.log(pessoa)
let buscarNome = "nome"
console.log(pessoa[buscarNome])
console.log(pessoa["idade"])

