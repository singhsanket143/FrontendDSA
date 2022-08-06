class Product {
	// constructor will be the first function to be called for creating an object
	constructor(n, p) {
        console.log("Constructor called !!!!")
		this.name = n;
        this.price = p; 
	}

	// member function 
	displayProduct() {
        console.log("Name of the product is", this.name);
        console.log("Price of the product is", this.price);
	}

	buyProduct() {

	}

}

const iphone = new Product("Iphone", 100000);
console.log(iphone);
// member functions can be called by . operator
iphone.displayProduct();