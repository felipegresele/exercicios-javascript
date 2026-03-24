/*
Exercício 1

O que será exibido?

function falar() {
    console.log(this.nome)
}

const pessoa = {
    nome: "Felipe",
    falar: falar
}

pessoa.falar()
*/

function falar() {
    console.log(this.nome)
}

const pessoa = {
    nome: "Felipe",
    falar: falar
}

pessoa.falar()

/*
Exercício 2
function mostrar() {
    console.log(this.idade)
}

const aluno = {
    idade: 20,
    mostrar: mostrar
}

const func = aluno.mostrar

func()

O que aparece?
*/

//quando eu atribuo a um outro objeto o javascript perde a referencia do this

function mostrar() {
    console.log(this.idade)
}

const aluno = {
    idade: 20,
    mostrar: mostrar
}

const func = aluno.mostrar

func()