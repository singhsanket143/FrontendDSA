class Stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        /**
         * Time: O(1)
         */
        this.#arr.push(x); // add an element to the last
    }
    
    pop() {
        /**
         * Time: O(1)
         */
        this.#arr.pop(); // remove element from last index
    }

    top() {
        /**
         * Time: O(1)
         */
        return this.#arr[this.#arr.length - 1]; // return the element at the last index
    }

    isEmpty() {
        return this.#arr.length == 0;
    }
}

let st = new Stack();

st.push(10);
st.push(33);
st.push(1);
console.log(st.top());
st.pop();
console.log(st.top());

