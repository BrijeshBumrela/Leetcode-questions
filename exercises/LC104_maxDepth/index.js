function maxDepth(root) {
    let maxDepth = 0;

    function dive(node, depth) {
        maxDepth = Math.max(maxDepth, depth - 1);
        if (!node) return;
        dive(node.left, depth + 1);
        dive(node.right, depth + 1);
    }

    dive(root, 1);
    return maxDepth;
}

module.exports = maxDepth;
