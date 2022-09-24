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

function firstNegativeInWindowSizeK(arr, k) {
    // we will first store negatives from the first window of size k
    let qu = new Queue();
    for(let i = 0; i < k; i++) {
        if(arr[i] < 0) {
            qu.enqueue(i);
        }
    }
    if(!qu.isEmpty()) {
        console.log(arr[qu.getFront()]); // print negatuve from first window of size k
    } else {
        console.log(0);
    }
    let i = 0, j = k-1; // this is the bound of the first window of size k
    while(j < arr.length-1) {
        // we go to the next window
        i++;
        j++;
        if(!qu.isEmpty() && qu.getFront() == i-1) {
            qu.dequeue(); // because i-1 is out of the window
        }
        if(arr[j] < 0) {
            qu.enqueue(j);
        }
        if(!qu.isEmpty()) {
            console.log(arr[qu.getFront()]); 
        } else {
            console.log(0);
        }
    }
}

firstNegativeInWindowSizeK([-4,-6,-7,8], 3);