/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

 function search(root, val) {
    if(root == null) return null;
    if(root.val == val) return root;
    if(root.val < val) {
        return search(root.right, val);
    } else {
        return search(root.left, val);
    }
}

var searchBST = function(root, val) {
    return search(root, val);
};