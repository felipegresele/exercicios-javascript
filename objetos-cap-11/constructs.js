//função construtura é uma função para gerar objetos

//função construtora precisa começar com letra maiscula
//vai gerar um  objeto com essas propriedades
function Tarefa(name) {
    "use strict"
    this.name = name
    this.createdAt = new Date()
    this.updatadAt = null
    this.changeName = function(newName) {
        this.name = newName
        this.updatadAt = new Date()
    }
}

const tarefa1 =  new Tarefa("minha tarefa 1")
tarefa1.changeName("nome atualizado")

const tarefa2 =  new Tarefa("minha tarefa 2")

//se eu nao passar o operador new
//oq ta sendo armazenado é o retorno mas a função nao retorna nada entao por isso é undefined
const tarefa3 = Tarefa();

console.log(tarefa1)
console.log(tarefa2)
console.log(tarefa3)