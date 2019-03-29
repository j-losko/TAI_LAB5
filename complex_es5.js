var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.subtract = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.abs = function () {
        return Math.sqrt(this.real ^ 2 + this.imaginary ^ 2);
    };
    Complex.prototype.toString = function () {
        return "Re: " + this.real + ", Im: " + this.imaginary;
    };
    return Complex;
}());
var a = new Complex(3, 2);
var b = new Complex(2, 3);
var addition = a.add(b);
console.log("" + addition);
var subtraction = a.subtract(b);
console.log("" + subtraction);
var absResult = subtraction.abs();
console.log(absResult);
