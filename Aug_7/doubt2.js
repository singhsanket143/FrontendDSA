function Product(n) {
    this.name = n
  }
  
  Product.prototype.display = function () {
   console.log(this.name)
  }
  
  function Mobile(s) {
    this.make = s
  }
  
  Mobile.prototype = Object.create(Product.prototype)
  
  Product.prototype.print = function() {
    console.log("printing")
  }
  let sham = new Mobile("Iphone")
  
  console.log(sham)