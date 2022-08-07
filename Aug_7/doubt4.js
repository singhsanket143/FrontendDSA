class A {
    constructor(v) {
        this.x = v;
    }
}

class B extends A {
    constructor(x, y) {
        super(x);
        this.y = y;
        // this.x = x;
    }
}

let b = new B(10, 20);
console.log(b);
