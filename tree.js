export default class Node {
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

    print(padding = '', pipe = false, pointer = '   ') {

        console.log(padding + pointer + this.value)

        if (pipe)
            padding += '│  ';
        else
            padding += '   ';
            
        if (this.left !== null) {
            this.left.print(
                padding,
                (this.right ? true : false),
                (this.right ? '├──' : '└──')
            );
        }
        if (this.right !== null) {
            this.right.print(padding, false, '└──');
        }
    }
}
