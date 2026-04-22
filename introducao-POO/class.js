//ES6

class Animal {
  //quando eu chamo o operdador new passando o new
  //esta funcao construtora sera executada
  constructor(nome, tipo) {
    if (this instanceof Animal) {
      this.nome = nome;
      if (tipo) this.tipo = tipo;
    } else {
        throw new Error("Animal deve ser criado com um novo operador")
    }
  }

  obterTipo() {
    return this.nome + " é do tipo " + this.tipo;
  }
}

const cachorro = new Animal("mel", "mamifero");

console.log(cachorro);

//mesmo sendo class animal é uma função
console.log(typeof Animal);

console.log(cachorro.obterTipo());

//caso o usuario nao passe o tipo ele vai ter no prototype do object um tipo padrao
//nao vai aparecer no objeto inteiro mas se o usuario tentar acessar a propriedade ele tem acesso pois esta no prototype
//se nao for definido no prototype fica undefined caso o usuario não preencha o campo
Animal.prototype.tipo = "desconhecido";

const animal = new Animal("sapo");

//nao vai exibir tipo pois nao esta definido
console.log(animal);

//nao tem no objeto entao precisa acessar o tipo padrao armazenado no prototype
console.log(animal.tipo);
