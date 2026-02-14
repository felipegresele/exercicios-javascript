"use strict"
//o que é o this

//o this no scopo global quando aberto no navegador ele é o objeto window (valor global)

console.log(this)

function fnExpression() {
    //objeto global
    //no use strict ele so trabalha dentro do espaço que ele esta alocado e assume o valor undefined
    console.log("this dentro de fnExpression: " + this)
}

fnExpression();

const fnArrow = () => {
    console.log("this dentro de arrow function")
    console.log(this)
}

fnArrow()