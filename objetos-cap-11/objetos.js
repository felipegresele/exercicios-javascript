//operador new

const data1 = Date();
console.log(data1)
console.log(typeof data1)

//o ideal para trabalhar com Date é trabalhar com o Objeto dela

const data2 = new Date();

//tem acessos aos metodos do Objeto ddo tipo Date 
console.log(data2)
console.log("Dia Atual: " + data2.getDate())
console.log(typeof data2)