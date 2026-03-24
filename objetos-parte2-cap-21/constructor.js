function Cachorro(nome) {
    //esse diz faz referencia ao obj novo criado
    let posicao = 0
    this.nome = nome
    console.log(this)

    this.latir = function() {
        //esse nome armazena a referencia do nome do novo obj
        console.log(this.nome, "esta latindo")
    }

    this.andar = function(distancia) {
        posicao += distancia
        console.log(this.nome + " andou ", distancia + " m")
        console.log(this.nome + " andou no total:", posicao, "m")
    }
}

//quando eu utilizo o operador new ele cria um objeto cachorro vazio 
const rex = new Cachorro("rex")
const mel = new Cachorro("mel")

console.log(rex)
console.log(rex.latir())
rex.andar(5)
rex.andar(20)

mel.andar(4)
mel.andar(5)