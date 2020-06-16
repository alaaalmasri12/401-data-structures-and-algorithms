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
 breadthFirstTraversal(tree) {
    let resulte = [];
    let childs = [];
    let node = tree.root;
    if (!node) return 'the tree is empty';
    childs.push(node);
    while (childs.length) {
      let tempNode = childs.shift();
      resulte.push(tempNode.value);
      if (tempNode.left) childs.push(tempNode.left);
      if (tempNode.right) childs.push(tempNode.right);
    }
    return resulte;
  }
}

let tree2 = new BinaryTree();
  let tree1 = new BinaryTree();
  tree1.add(2);
  tree1.add(7);
  tree1.add(5);
  tree1.add(2);
  tree1.add(6);
  tree1.add(9);
  tree1.add(5);
  tree1.add(11);
  tree1.add(4);
  console.log(tree2.breadthFirstTraversal(tree1));
// console.log(tree.contain(5));
// console.log(tree.contain(3));
// console.log(tree.contain(8));
// console.log(tree.contain(10));
// console.log(tree.contain(32));
// console.log(tree.contain(15));
// console.log(tree.contain(12));

// console.log(tree);