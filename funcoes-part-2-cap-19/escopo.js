const str = "global string"

//pode ser criado uma mesma variavel ou parametro com mesmo nome de uma variavel que ja existe no escopo global
function teste(str) {
    console.log(this)
    console.log(str)
}

//teste("str do parametro")

const obj = {
    foo: "bar",
    teste: teste,
    //pode ser assim
    //teste
}

obj.teste()