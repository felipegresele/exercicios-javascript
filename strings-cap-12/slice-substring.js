let str1 = "minha string bacanuda"

//primeiro parametro é aonde quero que começe a cortar
//segundo parametro é opcional e é até aonde vai a string
console.log(str1.slice(1, 7))

//igual o slice
//nao aceita valor negativo
console.log(str1.substring(1,7))

//com valor negativo ele começa a cortar de tras pra frente
console.log(str1.slice(-2))
//nao faz nada string continua normal
console.log(str1.substring(-2))