let x = 10;
let y = [10]; //array e objeto armazena uma referencia na memoria do computador nao copia
let w = {n: 10};

function mudaX(n){
    n++;
    console.log("valor interno: ", n)
}

function mudaY(y) {
    y.push(11)
    console.log(y)
}

function mudaW(obj) {
    obj.n = 11
    console.log(obj)
}

mudaX(x)
console.log("valor externo: ", x)

//no array e objeto estou passando a referencia inteira entao ele vai muda no da função e no original
mudaY(y)
console.log(y)

mudaW(w)
console.log(w)