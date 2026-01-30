/*
7️⃣ Atualizando estado (array)

Você tem uma lista de tarefas e quer adicionar uma nova:

const tarefas = ["Estudar JS", "Treinar"];


Crie um novo array adicionando "Codar React" sem modificar o array original.
 */

const tarefas = ["Estudar", "Treinar"]

const arrAtualizado = [...tarefas, "Codar React"]

console.log(tarefas)
console.log(arrAtualizado)

/*
8️⃣ Atualizando estado (objeto)

Você tem um estado de usuário:

const user = {
  nome: "Felipe",
  logado: false
};

Crie um novo objeto onde logado vira true.
 */

const user = {
  nome: "Felipe",
  logado: false
};

const user2 = {
  ...user,
  //o js qnd executa nao pode ter duas chaves iguais 
  //entao ele pega o valor da ultima chave caso tenha 2 chaves com mesmo nome
  logado: true,
}

console.log(user)
console.log(user2)



/*
🔴 NÍVEL 4 — Pegadinhas
9️⃣ Ordem importa

Qual será o valor final de novoObjeto?

const obj = { a: 1, b: 2 };

const novoObjeto = {
  b: 3,
  ...obj
};


👉 Explica o porquê.
 */

const obj = { a: 1, b: 2 };

const novoObjeto = {
  b: 3,
  ...obj
};

console.log(novoObjeto)

const nome = {
  nome: "felipe",
  idade: 21
}

console.log(nome)

/*
🔟 Spread + função

Crie uma função soma que receba vários números e retorne a soma deles usando spread.

Exemplo de uso:

soma(1, 2, 3, 4); // 10
*/

function somar(...numeros) {
    return numeros.reduce((acumulado, atual) => acumulado + atual,0)
}

const numeros = [1,2]

console.log(somar(1,2,3,15,6))