class Complex {
    private real:number;
    private imaginary:number;
    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(obj: Complex) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }

    subtract(obj: Complex) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }

    abs() {
        return Math.sqrt(this.real ^ 2 + this.imaginary ^ 2);
    }

    toString() {
        return "Re: " + this.real + ", Im: " + this.imaginary;
    }
}

let a = new Complex(3,2);
let b = new Complex(2,3);

let addition = a.add(b);
console.log("" + addition);

let subtraction = a.subtract(b);
console.log("" + subtraction);

let absResult = subtraction.abs();
console.log(absResult);