class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insertHelper(x, root) {
        if(root == null) {
            return new Node(x);
        }
        if(x < root.data) {
            // x should go to the lst
            root.left = this.insertHelper(x, root.left);
        } else {
            // x should go to the rst
            root.right = this.insertHelper(x, root.right);
        }

        return root;
    }

    insert(x) {
        if(this.root == null) {
            this.root = new Node(x);
            return;
        }
        this.insertHelper(x, this.root);
    }

    preorderhelper(root) {
        if(root == null) return;
        console.log(root.data);
        this.preorderhelper(root.left);
        this.preorderhelper(root.right);
    }

    preorder() {
        this.preorderhelper(this.root);
    }

    inorderhelper(root) {
        if(root == null) return;
        this.inorderhelper(root.left);
        console.log(root.data);
        this.inorderhelper(root.right);
    }

    inorder() {
        this.inorderhelper(this.root);
    }

    removeHelper(root, x) {
        /**
         * Time: O(h)
         * Space: O(h)
         */
        if(root == null) return null;
        if(root.data == x) {
            // then current node should be removed
            // Case 1: leaf node
            if(root.left == null && root.right == null) return null;

            // case 2: single child
            if(root.left == null && root.right != null) {
                // we dont have left child but have got a right child
                let temp = root.right;
                root.right = null;
                return temp;
            }
            if(root.left != null && root.right == null) {
                // we dont have right child but have got a left child
                let temp = root.left;
                root.left = null;
                return temp;
            }

            // Case 3: both the children, so we will be using rightmost of lst
            let temp = root.left;
            while(temp.right != null) temp = temp.right;
            root.data = temp.data;
            root.left = this.removeHelper(root.left,temp.data);
            return root;
        }
        if(x < root.data) {
            root.left = this.removeHelper(root.left, x); // root = 14
        } else {
            root.right = this.removeHelper(root.right, x);
        }
        return root;
    }

    remove(x) {
        this.removeHelper(this.root, x);
    }
}

function searchinBST(root, x) {
    if(root == null) return false;
    if(root.data == x) return true;

    // let result = searchinBST(root.left, x) || searchinBST(root.right, x);
    // return result;
    // let left = searchinBST(root.left, x);
    // if(left == true) return true;
    // let right = searchinBST(root.right, x);
    // if(right == true) return true;
    if(x < root.data) {
        return searchinBST(root.left, x);
    } else {
        return searchinBST(root.right, x);
    }
}


let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(45);
bst.insert(19);
bst.insert(3);
// bst.preorder();

// bst.inorder();

console.log(searchinBST(bst.root, 2))


/**
 * 10
 *  20
 *    30
 *      40
 *         50 
 */