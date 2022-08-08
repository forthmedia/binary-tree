class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new Node(value);
            } else {
                this.right.insert(value)
            }
        }
    }

    inorder() {
        if (this.left !== null) {
            this.left.inorder();
        }
        console.log(this.value)
        if (this.right !== null) {
            this.right.inorder();
        }
    }
}

// initialize a tree of random integers from 1 to 100
const nodes = [...Array(11)].map(() => Math.ceil(Math.random() * 100));
const tree = new Node(nodes.pop());
for (n of nodes) {
    tree.insert(n)
}
tree.inorder()