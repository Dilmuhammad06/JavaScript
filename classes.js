class Example{

    constructor(var_a){
        this.var_a = var_a
    }

    output(){
        return this.var_a
    }
}

const objecto = new Example('Hello World!')
console.log(objecto.output())