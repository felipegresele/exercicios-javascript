/*
Objetivo: treinar como o += acumula valor.

Faça isso:

let frase = "";

frase += "Olá";
frase += " tudo";
frase += " bem?";
console.log(frase);


Pergunta:
➡️ O que aparece no console e por quê?
 */

let frase = "";

frase += "Olá"
frase += " tudo"
frase += " bem?"

console.log(frase)

/*
✅ EXERCÍCIO 2 — Somando valores aos poucos
let total = 0;

total += 5;
total += 7;
total += 3;

console.log(total);
*/

let total = 0;

total += 5;
total += 7;
total += 3;

console.log(total);

/*
✅ EXERCÍCIO 4 — Criar frase usando loop

Crie uma frase assim:

1 2 3 4 5

Com:

let msg = "";

for (let i = 1; i <= 5; i++) {
    msg += i + " ";
}

console.log(msg);
 */

let msg = "";

for (let i = 0; i < 5; i++) {
    msg += `${i}.Frase `;
}   

console.log(msg)

let nome = "felipe"
let sobrenome = "gresele"

const formandoNome = nome + " " + sobrenome
console.log(formandoNome);
