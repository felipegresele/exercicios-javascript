const arr = [1,2,3]

const obj = {
    nome: "Felipe",
    idade: 20,
    faculdade: "ADS",
}

//esse pega a chave/valor
//bom para objeto
for (let propiedade in obj) {
    console.log(propiedade)
    console.log(obj[propiedade])
}

//esse pega apenas o valor
//bom para array
for (n of arr) {
    console.log(n)
}