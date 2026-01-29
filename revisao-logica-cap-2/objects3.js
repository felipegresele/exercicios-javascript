const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function(n) {
        console.log(this)
        //aqui thi faz referencia ao objeto produto
        if (n > this.qtd) {
            console.log("quantidade insuficiente")
        }  
        this.qtd -= n; 
    },

    //assim retorna o objeto inteiro
    teste1: function() {
        console.log("teste 1")
        console.log(this)
    },

    //na arrow function o this retorna apenas o objeto vazio
    //e no html retorna elemento window
    teste2: () => {
        console.log("teste 2")
        console.log(this)
    }
}

produto.teste1()

produto.teste2()