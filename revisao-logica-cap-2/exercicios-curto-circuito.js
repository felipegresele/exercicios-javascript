// 🟢 EXERCÍCIO 1 — básico
// Perguntas:

// Quais letras aparecem no console?
// vai aparecer a letra "A" e "C" pq a primeira condição é true entao ele continua rodando

// Por quê?

true && console.log("A")
false && console.log("B")
true && console.log("C")
false && console.log("D")

//🟡 EXERCÍCIO 2 — ordem importa

//O que aparece?

//os dois aparecem pq no && os dois sao true entao ele vai rodar a ultima condicao
//mas se fosse false alguma ele so retorna false e para de executar

//Qual operador decidiu parar ou continuar?

//os dois

let x = 10;

x === 10 && console.log("X maior que 5")  ;
x < 5 || console.log("X não é menor que 5");

//🟠 EXERCÍCIO 3 — retornos (essa separa quem entendeu)

let resultado =
  true && "OK" // os dois sao true
  || true && "ERRO" //nao exibe pq é um false e true entao ele para de rodar no false e ignora o resto
  || "PADRÃO";

console.log(resultado);