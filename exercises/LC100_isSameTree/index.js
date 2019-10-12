function isSameTree(p, q) {
    let sameTree = true;

    function checkSameNode(n1, n2) {
        if (!n1 && !n2) return;
        if ((!n1 || !n2) || (n1.val !== n2.val)) {
            sameTree = false;
            return;
        }
        checkSameNode(n1.left, n2.left);
        checkSameNode(n1.right, n2.right);
    }
    checkSameNode(p, q);
    return sameTree;
}

module.exports = isSameTree;
