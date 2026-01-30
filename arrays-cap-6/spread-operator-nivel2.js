/*
🟡 NÍVEL 2 — Objetos
4️⃣ Copiando objeto

Faça uma cópia do objeto abaixo usando spread:

const usuario = {
  nome: "Felipe",
  idade: 22
};
 */

const usuario = {
  nome: "Felipe",
  idade: 22
};

const usuario2 = {
    ...usuario
}

console.log(usuario)
console.log("Usuário Copiado:", usuario2)

/*
5️⃣ Sobrescrevendo propriedades

Crie um novo objeto chamado usuarioAtualizado onde:

o nome continue o mesmo

a idade vire 23

const usuario = {
  nome: "Felipe",
  idade: 22
};
*/

const usuarioAtualizado = {
    ...usuario
}

usuarioAtualizado.idade = 21

console.log("Usuario Atualizado:", usuarioAtualizado)


/*
6️⃣ Adicionando nova propriedade

Crie um novo objeto adicionando a propriedade cidade: "São Paulo" sem alterar o original.
*/

const usuarioAtualizado2 = {
    ...usuario,
    cidade: "São Paulo"
}

console.log("Usuário Atualizado com Cidade:", usuarioAtualizado2)