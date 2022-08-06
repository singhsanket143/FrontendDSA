function product(n, p) {
    console.log("this at start", this);
    this.name = n;
    this.price = p;
    console.log("this at end", this);
    // return {marks: 100}
    return [100]
}

const iphone = new product("iphone", 100000);
console.log(iphone)