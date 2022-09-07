class Node {
    constructor(d) {
        this.left = null;
        this.right = null;
        this.data = d;
    }
}
let arr = [10, 5, 1, 0, -1, -1, -1, -1, 15, 24, -1, -1, 33, -1, -1];
let i = 0; // this will iterate on the array
function buildTree() {
    if(arr[i] == -1) {
        i++;
        return null;
    }
    let node = new Node(arr[i]);
    i++;
    node.left = buildTree();
    node.right = buildTree();
    return node;
}

function post(root) {
    if(root == null) return null;
    post(root.left);
    post(root.right);
    console.log(root.data);
}

let root = buildTree();
post(root);

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
Input: 10, 5, 1, 0, -1, -1, -1, -1, 15, 24, -1, -1, 33, -1, -1
