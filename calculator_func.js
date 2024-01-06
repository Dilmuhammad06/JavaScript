class Calculator{

    constructor(a,b){
        this.a = a
        this.b = b
    }

    plus(){
        return this.a + this.b
    }

    minus(){
        return this.a - this.b
    }

    devision(){
        return this.a / this.b
    }

    multiple(){
        return this.a * this.b
    }

}

const calc = new Calculator(5,3)
console.log(calc.multiple())