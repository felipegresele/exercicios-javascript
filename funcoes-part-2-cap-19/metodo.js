
function latir() {
    console.log(this.nome, "faz: au au")
}

function miar() {
    console.log(this.nome, "faz: miau")
}

const cachorro = {
    nome: "mel",
    falar: latir
}

const gato = {
    nome: "mingau",
    falar: miar
}

cachorro.falar()
gato.falar()
//console.log(cachorro)