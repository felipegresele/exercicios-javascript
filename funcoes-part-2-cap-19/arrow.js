
//função normal
function teste() {
    console.log("function expression teste")
    return "fn expression"
}

const t1 = teste()

//o retorno da fn teste ficou armazenado na variavel t1
console.log(t1)

const testeArrow = () => {
    console.log("arrow function testeArrow")
    return "fn arrow"
}

const t2 = testeArrow()

console.log(t2)

//diferenças

//a fn expression pode ser chamada em qualquer lugar do codigo, antes ou depois da implementação dela pois ela tem estado global
//a fn arrow so pode ser chamada abaixo da implementação dela se nao o js nao consegue identificar a fn

//na arrow function se eu passar apenas 1 parametro apenas nao precisa de paranteses

const testeArrow2 = str => {
    return "texto => " + str
}

//se for so uma linha de codigo
//nao precisa da palavra "return", o js ja entende como return
const testeArrow3 = () => console.log("fn arrow - testeArrow3")

const t3 = testeArrow2("texto passado por parametro")

console.log(t3)

testeArrow3()

const testeArrowObjt = () => {
    return {
        foo: "bar"
    }
}

//a unica forma de retornar obj na arrow fn é usando ()

const testeArrowObjtCerto = () => ({foo: "bar", teste: "felipe"})

const t4 = testeArrowObjtCerto()
console.log(t4)
console.log(t4.foo)
console.log(t4["foo"]) //pega o valor dessa chave
console.log(t4.teste)