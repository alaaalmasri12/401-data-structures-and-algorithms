'use strict';
const Node = require('./node');
class BinaryTree {
    constructor(root) {
        this.root = root;
    }
    preorder() {
        let results = [];
        let _move = (node) => {
            results.push(node.value);
            if (node.left) _move(node.left);
            if (node.right) _move(node.right);
        }
        _move(this.root);
        return results

    }
    inorder() {
        let results = [];
        let _move = (node) => {
            if (node.left) _move(node.left);
            results.push(node.value);
            if (node.right) _move(node.right);

        }
        _move(this.root);
        return results

    }
    postorder() {
        let results = [];
        let _move = (node) => {
            if (node.left) _move(node.right);
            if (node.right) _move(node.node);
            results.push(node.value);
        }
        _move(this.root);
        return results

    }
    add(Nodeitem) {
        let current = this.root;
        //create a new node
        let newnode = new Node(Nodeitem);
        //if we didnt have any root we put the new node as a root
        if (!this.root) {
            this.root = newnode;
        }
        else {
            while (current) {
                if (newnode.value < current.value) {
                    if (!current.left) {
                        current.left = newnode;
                        break;
                    }
                    //to pass all the left side of the tree
                    current = current.left;
                }
                else if (newnode.value > current.value) {
                    if (!current.right) {
                        current.right = newnode;
                        break;
                    }
                    //to pass all the right side of the tree
                    current = current.right;
                }
                else {
                    break;
                }
            }
            console.log('alaaaaaaa', newnode);
        }
    }
    contain(Nodeitem) {
        let current = this.root;
        if (!this.root) {
            return false;
        }
        else if (this.root.value === Nodeitem) {
            return true;
        }
        while (current) {
            if (Nodeitem < current.value) {
                console.log("enterd");
                if (!current.left) {
                    return false;
                }
                if (current.left.value === Nodeitem) {
                    return true;
                }



                current = current.left;
            }
            current = this.root;
            while (current) {
                if (Nodeitem > current.value) {
                    if (!current.right) {
                        return false;
                    }
                    if (current.right.value === Nodeitem) {
                        return true
                    }
                    //to pass all the right side of the tree
                    current = current.right;
                }
            }

            return false;

        }
    }
    fizzbuzz(tree) {
        let curent = tree.root;
        let _walk = (curent) => {
            if (curent.value % 3 === 0 && curent.value % 5 === 0) {
                curent.value = 'FizzBuzz';
            }
            else if (curent.value % 3 === 0) {
                curent.value = 'fizz';
            }
            else if (curent.value % 5 === 0) {
                curent.value = 'buzz';
            }
            else if(curent.value % 3 !== 0 && curent.value % 5 !== 0)
            {
                curent.value=`${curent.value}`;
            }
            if (curent.left) {
                _walk(curent.left);
            }
            if (curent.right) {
                _walk(curent.right);
            }
        }
        _walk(tree.root);
        return curent;

    }
}

let tree = new BinaryTree();
let newtree=new BinaryTree();

tree.add(5);
tree.add(3);
tree.add(15);
tree.add(30);
tree.add(6);
tree.add(45);
console.log(newtree.fizzbuzz(tree));
// console.log(tree.contain(5));
// console.log(tree.contain(3));
// console.log(tree.contain(8));
// console.log(tree.contain(10));
// console.log(tree.contain(32));
// console.log(tree.contain(15));
// console.log(tree.contain(12));



// console.log(tree);
module.exports = BinaryTree;