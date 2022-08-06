function Product(n) {
    this.name = n;
}

Product.prototype.display = function () {
    console.log(this.name);
}

function phone(m) {
    this.model = m;
}

phone.prototype = Object.create(Product.prototype);

let p = new phone("sjnf");
console.log(p);