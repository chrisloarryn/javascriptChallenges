class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        //this.perimeter = 2 * (a+b)

    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return (this.w * this.h)
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        // super(s);
        // this.h = s;
        // this.w = s;
        // this.area = Math.pow(s, 2)
        super(s, s);
    }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);
console.log(rec)
console.log(sqr)
