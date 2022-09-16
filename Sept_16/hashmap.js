class Node {
    constructor(k, v) {
        this.key = k;
        this.value = v;
        this.next = null;
    }
}

class Hashmap {
    constructor() {
        this.currSize = 2;// current size of the array 
        this.arr = [];
        this.lambda = 0.5;
        this.elements = 0; // no of elements inserted in the hashmap

        for(let i = 0; i < this.currSize; i++) {
            this.arr.push(null);
        }
    }

    hash(key) {
        let ans = 0;
        let c = 101;
        let m = this.currSize;
        let x = 1;
        for(let i = 0; i < key.length; i++) {
            ans = ((ans%m) + (key.charCodeAt(i)*x)%m)%m;
            x = x*c;
        }
        return ans;
    }

    insert(k, v) {
        let bucketIndex = this.hash(k);
        let newNode = new Node(k, v);
        // add at head in ll
        newNode.next = this.arr[bucketIndex];
        this.arr[bucketIndex] = newNode;

        this.elements++;

        // check load factor
        let currLoadFactor = this.elements / this.currSize;
        if(currLoadFactor > this.lambda) {
            this.rehash();
        }
    }

    rehash() {
        this.elements = 0; // because we will be reinserting, so setting it 0
        let oldSize = this.currSize; // old array size stored
        this.currSize = 2*oldSize; // new array will be of twice length
        let oldArray = this.arr; // storing the old array 
        this.arr = []; // creating new array
        for(let i = 0; i < this.currSize; i++) {
            this.arr.push(null);
        }
        for(let i = 0; i < oldArray.length; i++) {
            let temp = oldArray[i];
            while(temp != null) {
                this.insert(temp.key, temp.value);
                temp = temp.next;
            }
        }
    }

    display() {
        console.log(this.arr);
    }
}

let hm = new Hashmap();
hm.insert("Sanket", 1);
console.log("*******");
hm.display()
hm.insert("Sandeepan", 2);
console.log("*******");
hm.display()
hm.insert("Sameer", 3);
console.log("*******");
hm.display()
hm.insert("varun", 4);
console.log("*******")
hm.display()

