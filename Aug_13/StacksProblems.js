class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class LinkedList {
	// singly
	constructor() {
		// when we initialise a new linked list head will be empty
		this.head = null;
		this.start = null; // temporary variable for problem solving
		this.flag = null; // temporary variable for problem solving
	}

	addAtHead(data) {
        /**
         * Time: O(1)
         * Space: O(1)
         */
		let newNode = new Node(data); // created a new node
		newNode.next = this.head; // set the next of new node to head
		this.head = newNode; // update the head to the new node
	}

	removeAtHead() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
		if(this.head == null) return;
		let temp = this.head.next; // stored access to new head
		this.head.next = null; // de linked the old head
		this.head = temp; // updated the head
	}

    getHead() {
        /**
         * Time: O(1)
         */
        if(this.head != null) {
            // LL is not empty
            return this.head.data;
        }
        return undefined; // in case of empty LL
    }

    isEmpty() {
        return this.head == null;
    }
}


class Stack {
    constructor() {
        this.ll = new LinkedList();
    }

    push(x) {
        // insert an element x in the stack
        /**
         * Time: O(1)
         */
        this.ll.addAtHead(x);
    }

    pop() {
        // remove the last added element from the stack
        /**
         * Time: O(1)
         */
        this.ll.removeAtHead();
    }

    top() { // in few terminlogies, top is also referred as PEEK
        // this function will help us to get the topmost element of the stack
        /**
         * Time: O(1)
         */
        return this.ll.getHead();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }

    insertAtBottom(x) {
        let temp = new Stack();
        while(!this.isEmpty()) {
            let top = this.top();
            temp.push(top);
            this.pop();
        }
        this.push(x);
        while(!temp.isEmpty()) {
            let top = temp.top();
            this.push(top);
            temp.pop();
        } 
    }
}

function insertAtBottom(st, x) {
    let temp = new Stack();
    while(!st.isEmpty()) {
        let top = st.top();
        temp.push(top);
        st.pop();
    }
    st.push(x);
    while(!temp.isEmpty()) {
        let top = temp.top();
        st.push(top);
        temp.pop();
    }
}

function nextGreater(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let st = new Stack(); // stack of indexes
    let output = Array(arr.length);
    st.push(0);
    for(let i = 1; i < arr.length; i++) {
        while(!st.isEmpty() && arr[i] > arr[st.top()]) {
            // we took a shift, we need to resolve
            output[st.top()] = arr[i];
            st.pop();
        }
        st.push(i);
    }
    while(!st.isEmpty()) {
        output[st.top()] = -1;
        st.pop();
    }
    return output
}

function nextSmaller(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let st = new Stack(); // stack of indexes
    let output = Array(arr.length);
    st.push(0);
    for(let i = 1; i < arr.length; i++) {
        while(!st.isEmpty() && arr[i] < arr[st.top()]) {
            // we took a shift, we need to resolve
            output[st.top()] = arr[i];
            st.pop();
        }
        st.push(i);
    }
    while(!st.isEmpty()) {
        output[st.top()] = -1;
        st.pop();
    }
    return output
}

function prevGreater(arr) {
    arr.reverse();
    let output = nextGreater(arr);
    output.reverse();
    arr.reverse();
    return output;
}

function prevSmaller(arr) {
    arr.reverse();
    let output = nextSmaller(arr);
    output.reverse();
    arr.reverse();
    return output;
}


// let st = new Stack();
// st.push(1);
// st.push(2);
// st.push(3);
// st.push(4);
// // console.log(st.top());
// // st.pop();
// // console.log(st.top());
// st.insertAtBottom(13);
// while(!st.isEmpty()) {
//     console.log(st.top());
//     st.pop();
// }

let arr = [3,10,7,4,6,3,8,12,16,9]
console.log(prevGreater(arr))