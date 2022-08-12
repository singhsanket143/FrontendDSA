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
}

let st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
console.log(st.top());
st.pop();
console.log(st.top());
