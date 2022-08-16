class Node {
	constructor(d) {
		this.data = d; // data parameter represents the actual data stored in node
		this.next = null; // this will be a ref to the next node connected to the curr node
	}
}

class LinkedList {
	// singly
	constructor() {
		// when we initialise a new linked list head will be empty
		this.head = null;
        this.tail = null;
	}

	addAtHead(data) {
        /**
         * Time: O(1)
         * Space: O(1)
         */
		let newNode = new Node(data); // created a new node
        if(this.head == null) {
            this.tail = newNode;
        }
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
        if(this.head == null) this.tail = null;
	}

	addAtTail(data) {
        /**
         * Time: O(1)
         * Space: O(1)
         */
		if(this.head == null) { // if ll is empty, addattail is equal to addathead
			this.addAtHead(data);
			return;
		}
		let newNode = new Node(data);
		this.tail.next = newNode;
        this.tail = newNode;
	}

	getHead() {
		if(this.head == null) return undefined;
		return this.head.data;
	}

}

class Queue {
	constructor() {
		this.ll = new LinkedList();
	}
	enqueue(x) {
		this.ll.addAtTail(x);
	}

	dequeue() {
		this.ll.removeAtHead();
	}

	getFront() {
		return this.ll.getHead();
	}
}

let qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
qu.dequeue();
qu.dequeue();
qu.dequeue();
qu.enqueue(50);
qu.enqueue(60);

console.log(qu.getFront())