const numero = 1000.50

//numero de casas decimais que vai exibir
console.log(numero.toFixed(2))

//muda para string
console.log(typeof numero.toFixed(2))

//transforma em Strinig
console.log(numero.toString())
console.log(typeof numero.toString())

//formata de acordo com o local (pais)
console.log(numero.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
console.log(numero.toLocaleString("en-US", {style: "currency", currency: "USD"}))
console.log(numero.toLocaleString("en-US", {style: "currency", currency: "EUR"}))

//verifica se nao é do tipo "number"
console.log(isNaN("a"))
console.log(typeof parseFloat(numero))
console.log(isNaN(numero))