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

    getHead() {
        return this.head;
    }
}

let l1 = new LinkedList();
// l1.addAtHead(4);
l1.addAtHead(3);
l1.addAtHead(2);
l1.addAtHead(1);

let l2 = new LinkedList();
l2.addAtHead(7);
l2.addAtHead(8);
l2.addAtHead(9);
l2.addAtHead(10);
l1.display();
console.log("**")
l2.display();
console.log("**")

function alternateMerge(l1, l2) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let a = l1.getHead();
    let b = l2.getHead();
    while(a != null && b != null) {
        let n1 = a.next;
        let n2 = b.next;
        a.next = b;
        if(n1 == null ){
            break;
        }
        b.next = n1;
        a = n1;
        b = n2;
    }
    l2.head = null;
}

alternateMerge(l1, l2);
l1.display();