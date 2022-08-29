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

// hard coded tree
let root = new Node(10); // root
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(1); // leaf
root.right.left = new Node(24); // leaf
root.right.right = new Node(33); // leaf

pre(root);
console.log("**");
ino(root);
console.log("**");
post(root);

/**
 * 
 *              10
 *            /   \
 *          5      15
 *         /      / \
 *        1     24  33
 */ 