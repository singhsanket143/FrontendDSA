function Product(n) {
    this.name = n;
}

Product.prototype.display = function () {
    console.log(this.name);
}

function phone(m) {
    Product.call(tis, "Phone"); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    this.model = m;
}

phone.prototype = Object.create(Product.prototype);

let p = new phone("sjnf");
console.log(p);