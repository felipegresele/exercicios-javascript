const data = new Date();

//data
console.log(data.toLocaleDateString())

//data e horario

//aceita o parametro de qual formato é para exibir
console.log(data.toLocaleString("pt-BR"))

//coloco o dia da semana que é a data, data completa e horario
console.log(data.toUTCString())

//horario
console.log(data.toLocaleTimeString())