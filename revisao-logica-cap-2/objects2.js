const pessoa = {
    nome: "Felipe",
    idade: 20,
    email: "felipe@gmail.com"
}

console.log(pessoa)

//prop é cada propiedade do objeto e nao seu valor
for (let propriedade in pessoa) {
    console.log(propriedade)
    console.log(pessoa[propriedade])
}