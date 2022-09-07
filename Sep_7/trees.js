class node {
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
		let newNode = new node(data); // created a new node
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
		let newNode = new node(data);
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

class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
	}
}

function pre(node) {
    /**
     * Time: O(n)
     * Space: O(max depth) 
     */
	if(node == null) return;
	console.log(node.data);
	pre(node.left);
	pre(node.right);
}

function ino(node) {
    /**
     * Time: O(n)
     * Space: O(max depth)
     */
	if(node == null) return;
	ino(node.left);
	console.log(node.data);
	ino(node.right);
}

function post(node) {
    /**
     * Time: O(n)
     * Space: O(max depth)
     */
	if(node == null) return;
	post(node.left);
	post(node.right);
	console.log(node.data);
}

function height(node) {
    if(node == null) {
        return -1;
    }

	let leftHeight = height(node.left);
	let rightHeight = height(node.right);
	return 1 + Math.max(leftHeight, rightHeight);
}

function levelorder(root) {
    let qu = new Queue();
    qu.enqueue(root);
    while(!qu.isEmpty()) {
        let curr = qu.getFront();
        qu.dequeue();
        console.log(curr.data);
        if(curr.left) {
            qu.enqueue(curr.left);
        }
        if(curr.right) {
            qu.enqueue(curr.right);
        }
    }
}

function levelOrderLevelWise(root) {
    let qu = new Queue();
    qu.enqueue(root);
    qu.enqueue(null);
    let result = "";
    while(!qu.isEmpty()) {
        let curr = qu.getFront();
        qu.dequeue();
        if(curr == null) {
            // we finished the prev level
            if(qu.isEmpty()) {
                // for the last level when we remove null queue will be empty
                break;
            }
            result += "\n";
            qu.enqueue(null);
        } else {
            result += curr.data + " ";
            if(curr.left) qu.enqueue(curr.left);
            if(curr.right) qu.enqueue(curr.right);
        }
    }
    console.log(result);
}

// hard coded tree
let root = new Node(10); // root
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(1); // leaf
root.left.left.left = new Node(0)
root.right.left = new Node(24); // leaf
root.right.right = new Node(33); // leaf

// pre(root);
// console.log("**");
// ino(root);
// console.log("**");
// post(root);
levelOrderLevelWise(root);

/**
 * 
 *              10
 *            /   \
 *          5      15
 *         /      / \
 *        1     24  33
 *       /
 *      0
*/ 
// queue -> []
// 10, 5, 15, 1, 24, 33, 0