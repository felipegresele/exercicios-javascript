b = []
console.log(b)

b.push("teste")
console.log(b)

function alterarArray(arr1) {
    arr1.push("adicionado")
}

let arr2 = ["a"] 

alterarArray(arr2)
console.log(arr2)

//TIPOS DE VALOR

//o valor x vai ser 20 e o de y continuar 10 pq eu to criando uma nova variavel e x e y alocam espaços unicos e diferentes na mémoria
let x = 10
//o y esta sendo criado agora e vai receber uma copia do valor de x
let y = x
x += 10

console.log(x, y)

//TIPOS DE REFERENCIA

// agora quando é em um objeto, array e funcao é diferente
//ele sempre vai pegar o dado atualizado pq a variavel q criei faz referencia a um espaço alocado na memoria

let x1 = { valor: 10 }
let y1 = x1;

//local na memoria ex mem.0002 = {valor: 10}
//let x = mem.0002
//let y = x => mem.0002
//se mudo o valor em uma ou outra ambos iram perceber a mudança e atualizar pq ambos apontam para mesmo local de memoria

x1.valor = 20;
y1.valor = 30;

console.log(x1)
console.log(y1)