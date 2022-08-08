import Node from './binary-tree.js'

// initialize trees of random integers from 1 to 100
const nodes = [...Array(11)].map(() => Math.ceil(Math.random() * 100));
const tree1 = new Node(nodes.pop());
for (let n of nodes) {
    tree1.insert(n)
}
const nodes2 = [...Array(11)].map(() => Math.ceil(Math.random() * 100));
const tree2 = new Node(nodes2.pop());
for (let n of nodes2) {
    tree2.insert(n)
}

// IS SAME TREE 
const isSameTree = (p,q) => {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.value !== q.value) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
console.log('Is same tree ' + isSameTree(tree1, tree1));
console.log('Is same tree ' + isSameTree(tree1, tree2));

// MAX DEPTH
const maxDepth = root => {
    if (root == null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right)

    let max = Math.max(left, right);
    return max + 1;
}
console.log('Max depth tree 1 is: ' + maxDepth(tree1));
console.log('Max depth tree 2 is: ' + maxDepth(tree2));

// LEVEL ORDER
const levelOrder = root => {
    const result = [];
    const queue = [];

    if (root) {
        queue.push(root)
    }

    while (queue.length) {
        let level = [];
        let count = queue.length;

        for (let i = 0; i < count; i++) {
            let node = queue.shift();
            level.push(node.value);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right)
        }
        result.push(level)
    }
    return result;
}
console.log('Level order');
console.log(levelOrder(tree1));
