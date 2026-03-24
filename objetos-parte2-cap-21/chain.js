const calc = {
    value: 0,
    somar(n) {
        this.value += n
        //retornar o proprio objeto
        return this
    },
    subtrair(n) {
        this.value -= n
        return this
    },
    log() {
        console.log(this.value)
    }
}

//isso nao da certo
//calc.somar(5).somar(2)

//tem q retornar o proprio obj para dar certo
console.log(calc.somar(5).somar(2).subtrair(1))
