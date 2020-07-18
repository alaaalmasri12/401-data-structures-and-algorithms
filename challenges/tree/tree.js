class Node {

    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor(value) {
        this.root = new Node(value);
        this.counter = 0;
    }
    insert(value) {

        this.counter++;
        let newNode = new Node(value);
        const _add = (node) => {
            if (value < node.data) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    _add(node.left);
                }
            }
            else if (value > node.data) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    _add(node.right);
                }
            }
        }
        _add(this.root);
    }
    contain(value) {
        let curent = this.root;
        while (curent) {
            if (curent.data === value) {
                return true;
            }
            else if (curent.data < value) {
                curent = curent.left;
            }
            else if (curent.data > value) {
                curent = curent.right;
            }
        }
        return false;
    }
    preoder() {
        let results = [];
        const _walk = (node) => {
            results.push(node.data);
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        }
        _walk(this.root);
        console.log(results);
        return results;
    }
    inorder() {
        let results = [];
        const _walk = (node) => {
            if (node.left) _walk(node.left);
            results.push(node.data);
            if (node.right) _walk(node.right);
        }
        _walk(this.root);
        console.log(results);
        return results;
    }
    postorder() {
        let results = [];
        const _walk = (node) => {
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
            results.push(node.data);
        }
        _walk(this.root);
        console.log(results);
        return results;
    }
    findmaximumvalue() {
        let curent = this.root;
        while (curent.right) {
            curent = curent.right;
        }
        return curent.data;
    }
}
let bts = new BinaryTree(1);
bts.insert(0);
bts.insert(2);
bts.insert(5);
bts.insert(7);
bts.insert(6);
bts.insert(10);
// console.log(bts.contain(8));
// bts.preoder();
// bts.postorder();
console.log(bts.findmaximumvalue());
// console.log(bts);