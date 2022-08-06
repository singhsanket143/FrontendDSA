class Complex {
	constructor(r, i) {
		this.real = r;
		this.imag = i;
	}

	add(c) { // c is the complex number to be added
		this.real += c.real;
		this.imag += c.imag;
	}
	display() {
		console.log(this.real, " + i", this.imag);
	}

}

const c1 = new Complex(3, 2);

c1.display();

const c2 = new Complex(7, 2);

c1.add(c2);

c1.display();