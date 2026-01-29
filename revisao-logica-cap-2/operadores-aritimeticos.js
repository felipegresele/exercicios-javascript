// + - * / % **

let n1 = 10;
let n2 = 5;

//operadores aritméticos
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(2 ** 3)

if (n1 % 2 === 0) {
    console.log(n1 + " é multiplo de 2")
} else {
    console.log(n1 + " não é multiplo de 2")
}

console.log(n1 % 2)

//operadores de atribuicao
 
let n3 = 25;

//n3 = n3 + 15;
// isso é a mesma coisa q isso acima
n3 += 15

console.log(n3)

//incremento e decremento 
let i = 0
//poderia fazer dessas formas
//i = i + 1
//i += 1

//adiciona 1
i++;

//subtrai 1
i--;

//dessa forma ele incrementa nessa variavel e nao atribui ao valor de i
++i;

console.log(i)

//comparação
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=, = vem sempre depois
!= valores diferentes
!== valores e tipos diferentes
*/

console.log(n1, n2)
console.log(n1 > 10)
console.log(n1 < 10)
console.log(n1 >= 10)
console.log(n1 <= 11)
console.log(n1 != "10") //quando é string ele verifica se essa string é um numero eae vai comprar o valor com a variavel por isso da false
console.log(n1 !== "10")