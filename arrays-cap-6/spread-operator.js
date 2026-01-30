//spread operator
// ...

const arr = [1,2,3]

sum(arr)
sum(1,2,3)
sum(...arr)

//quebra o array e passa os elementos do array separados 
//percorre 1 por 1

function sum() {
    console.log(arguments)
    console.log(arguments.length)
}