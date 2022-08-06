// class Product {
//     constructor(n, p) {
//         this.name = n;
//         this.price = p;
//     }

//     display() {
//         console.log(this.name, this.price);
//     }
// }

function Product(n, p) {
    this.name = n;
    this.price = p;
    
}

Product.prototype.display = function(msg) {
    console.log("prototype display",msg);
}
const p = new Product("iphone", 100000);
// p.display();

console.log(p.constructor === Product)
console.log(p.__proto__ === Product.prototype);

p.display = function (msg) {
    this.__proto__.display(msg.toUpperCase());
}

p.display("hello");