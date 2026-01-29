let idade = 19
let paisPresentes = false
let comprouBilhete = true

console.log("Idade " + idade + ", os pais estao presentes: " + paisPresentes + ", comprou bilhete: " + comprouBilhete)

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode viajar: ${podeViajar}`)