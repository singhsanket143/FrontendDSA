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

	addAtTail(data) {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) { // if ll is empty, addattail is equal to addathead
			this.addAtHead(data);
			return;
		}
		let tail = this.head;
		while(tail.next != null) tail = tail.next;
		let newNode = new Node(data);
		tail.next = newNode;
	}

	removeAtAtail() {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) return; // empty ll
		if(this.head.next == null) { // only one node in the list
			this.head = null;
			return;
		}
		let temp = this.head;
		while(temp.next.next != null) {
			// the above condition gives us access to second last node
			temp = temp.next;
		}
		temp.next = null;
	}

	addAt(pos, data) {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) {
			this.addAtHead(data);
			return;
		}
		let temp = this.head;
		for(let i = 0; i < pos && temp.next != null; i++) {
			temp = temp.next;
		}
		// now inside temp we have access to the node at pos
		let newNode = new Node(data);
		newNode.next = temp.next;
		temp.next = newNode;
	}

	removeAt(pos) {
        /**
         * Time: O(n)
         * Space: O(1)
         */
		if(this.head == null) return; // LL was empty
		if(this.head.next == null || pos == 0) {
			// either you have a single node or pos is 0
			this.removeAtHead();
			return;
		}
		let prev = this.head;
		for(let i = 0; i < pos - 1 && prev != null; i++) {
			prev = prev.next;
		}
		if(prev.next == null) {
			// it's a tail removal
			this.removeAtAtail();
			return;
		}
		let nodeToBeDeleted = prev.next;
		prev.next = nodeToBeDeleted.next;
		nodeToBeDeleted.next = null;
	}

	display() {
        /**
         * Time: O(n)
         * Apace: O(1)
         */
		let temp = this.head;
		while(temp != null) {
			console.log(temp.data);
			temp = temp.next;
		}
	}

	reverseLLPointerIterative() {
		/**
		 * Time: O(n)
		 * Space: O(1)
		 */
		let prev = null;
		let curr = this.head;
		while(curr != null) {
			let temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}
		this.head = prev;
	}

	f(curr) {
		/**
		 * Time: O(n)
		 * Space: O(n) // due to call stack space, call stack will have n entries when we reach tail
		 */
		if(curr.next == null) {
			// if node's next is null it is the tail node
			return curr;
		}
		let tail = this.f(curr.next); // recursively assume it reverses
		curr.next.next = curr; // self work
		curr.next = null; // self work
		return tail;
	}
	reverseLLPointersRecursive() {
		let tail = this.f(this.head);
		this.head = tail;
	}

	reverseLLValueIterative() {
		/**
		 * Time: O(n^2)
		 * Space: O(1)
		 */
		let len = 0;
		let temp = this.head;
		while(temp != null) {
			temp = temp.next;
			len++;
		}
		let curr = this.head;
		for(let i = 0; i < len/2; i++) {
			let temp = this.head;
			// console.log(curr.data);
			for(let j = 0; j < len - i - 1; j++) {
				temp = temp.next;
			}
			let v = curr.data;
			curr.data = temp.data;
			temp.data = v;
			curr = curr.next;
		}
	}

	g(curr) {
		/**
		 * Time: O(n)
		 * Space: O(n)
		 */
		if(curr == null) {
			return;
		}
		this.g(curr.next);
		if(this.start == curr || curr.next == this.start) {
			this.flag = false;
		}
		if(this.flag == true) {
			let temp = this.start.data;
			this.start.data = curr.data;
			curr.data = temp;
			this.start = this.start.next;
		}
	}
	reverseLLValueRecursive() {
		this.start = this.head;
		this.flag = true;
		this.g(this.head);
	}

}

let ll = new LinkedList();
ll.addAtHead(7);
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.addAtHead(1);
ll.display();
console.log("***");
ll.reverseLLValueRecursive();
ll.display();