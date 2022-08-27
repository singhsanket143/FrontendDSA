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

    isEmpty() {
        return this.head == null;
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
    isEmpty() {
        return this.ll.isEmpty();
    }
}

function reversek(qu, k) {
    // calculate length;
    let temp = new Queue();
    let len = 0;
    while(!qu.isEmpty()) {
        temp.enqueue(qu.getFront());
        qu.dequeue();
        len++;
    }
    qu = temp;
    let arr = [];
    for(let i = 0; i < k; i++) {
        arr.push(qu.getFront());
        qu.dequeue();
    }
    for(let i = 0; i < k; i++) {
        qu.enqueue(arr[arr.length - 1]);
        arr.pop();
    }

    for(let i = 0; i < len - k; i++) {
        let el = qu.getFront();
        qu.dequeue();
        qu.enqueue(el);
    }

    return qu;
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.enqueue(8);
q.enqueue(9);
q.enqueue(10);

let res = reversek(q, 5);
while(!res.isEmpty()) {
    console.log(res.getFront());
    res.dequeue();
}