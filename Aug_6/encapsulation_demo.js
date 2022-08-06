class A {
    #y; // declare the private variable
    constructor() {
        this.x = undefined;
        this.#y = null; // private 
    }
    display() {
        console.log(this.x);
    }

    getY() {
        console.log(this.#y);
    }

    putY(el) {
        if(typeof el != 'string') {
            return;
        }
        this.#y = el;
    }
}

const aObj = new A();
console.log(aObj);

aObj.x = 10;
// aObj.#y = 9;

console.log(aObj)
aObj.putY(10)
aObj.getY();