function isValidBST(root) {
    let validity = true;
    function helper(node, min, max) {
        if (!node) return;
        if (node.val <= min || node.val >= max) {
            validity = false;
            return;
        }
        helper(node.left, min, node.val);
        helper(node.right, node.val, max);
    }
    helper(root, -Infinity, Infinity);
    return validity;
}

module.exports = isValidBST;
