const pessoa = {
    nome: "Daniel"
}

//isso exibe algumas propiedades do obj
//primeiro parametro é objeto e a segunda é qual chave do obj vai pegar o valor
console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))

//este metodo serve para poder definir uma propiedade
//adicionar uma nova ou mudar caso a chave seja a mesma
//se a propiedade ja existir ele vai mudar o valor
Object.defineProperty(pessoa, "sobrenome", {value: "Gresele", writable: true, enumerable: true, configurable: true})

//essa função nao permite que o valor seja sobrescrito, n vai mostrar no for ou pode e configurable é se essas definicoes podem ser mudadas ou não

console.log(pessoa)

for (let i in pessoa) {
    console.log(pessoa[i])
}