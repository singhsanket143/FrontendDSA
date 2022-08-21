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

function swapKthNodes(head, k) {
    /**
     * Time: O(n);
     * Space: O(!)
     */
    let kthFromLeft = head;
    // console.log(kthFromLeft.data)

    let p1 = null;
    for(let i = 1; i < k; i++) {
        p1 = kthFromLeft;
        kthFromLeft = kthFromLeft.next;
    }
    // console.log(kthFromLeft.data)
    let a = head;
    let b = kthFromLeft;
    let p2 = null;
    while(b.next != null) {
        b = b.next;
        p2 = a;
        a = a.next;
    }
    let kthFromRight = a;
    // console.log(kthFromRight.data)

    let n1 = kthFromLeft.next;
    let n2 = kthFromRight.next;
    // console.log(n1.data, n2.data, p1.data, p2.data);
    if(p1 != null)
        p1.next = kthFromRight;
    if(p2 != null)
        p2.next = kthFromLeft;
    kthFromLeft.next = n2;
    if(kthFromRight == n1) {
        kthFromRight.next = kthFromLeft;
    } else {
        kthFromRight.next = n1;
    }

    if(k == 1) {
        return kthFromRight;
    }
    return head;
}

let l1 = new LinkedList();
l1.addAtHead(6);
l1.addAtHead(5);
l1.addAtHead(4);
l1.addAtHead(3);
l1.addAtHead(2);
l1.addAtHead(1);
// l1.display();
l1.head = swapKthNodes(l1.getHead(), 3);
l1.display();

