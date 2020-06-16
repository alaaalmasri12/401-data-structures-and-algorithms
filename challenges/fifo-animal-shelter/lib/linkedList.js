const Node = require('../node');
const node=require('../merge');
class LinkedList {
  constructor() {
    this.head = null;
  }

  includes(value) {
    var node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }


  append(value) {
    let node = new Node(value);
    //if the value is not null assign the head to the inserted node
    if (!this.head) {
      this.head = node;
      return this;
    }
    let newNode = this.head;
    while (newNode.next) {
      newNode = newNode.next;
    }
    newNode.next = node;
    return this;
  }
  toString() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.value + "  =>  ";
      curr = curr.next;
    }
    console.log(this.head);
    return str;
  }

  insertBefore(value, newval) {

    let thisNode = this.head;

    while (thisNode.next !== null) {
      console.log('alaaaaaa', thisNode.next);
      if (thisNode.next.value === value) {
        console.log('enterd')
        let newitem = new Node(newval);
        newitem.next = thisNode.next;
        thisNode.next = newitem;
        console.log(thisNode.next);
        return thisNode;
      }
      thisNode = thisNode.next;
    }

  }
  insertAfter(value, newval) {

    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.value === value) {
        let newitem = new Node(newval);
        newitem.next = thisNode.next;
        thisNode.next = newitem;
        console.log(thisNode.next);
        return thisNode;
      }
      thisNode = thisNode.next;
    }

  }
  kthFromEnd(k) {
      let thisNode = this.head;
      let length = 0;
      let pos = 0;
      while (thisNode) {
        length++;
        thisNode = thisNode.next;
      }
      pos = length - k - 1;
      if (pos < 0 || k < 0)
        return 'Exception';
      thisNode = this.head;
      while (pos) {
        thisNode = thisNode.next;
        pos--;
      }
      return thisNode.value;
    }
    merge(L1, L2) {
      // create new linked list pointer
      var L3 = new Node(null, null);
      var prev = L3;
  
      // while both linked lists are not empty
      while (L1 !== null && L2 !== null) {
        if (L1.data) {
          console.log(L1.data);
  
          prev.next = L1;
          L1 = L1.next;
          prev = prev.next;
  
  
        }
        if (L2.data) {
          console.log(L2.data);
          prev.next = L2;
          L2 = L2.next;
          prev = prev.next;
        }
  
  
      }
      return L3.next;
  
    }
  }
module.exports = LinkedList;
let list = new LinkedList();

let initialValue = 1;
list.append(initialValue);
let secondValue = 3;
list.append(secondValue);
let thirdValue = 8;
list.append(thirdValue);
let forthValue = 2;
list.append(forthValue);
// list.insertBefore(3, 5);
// list.insertBefore(1, 5);
// list.insertBefore(2, 5);
// list.insertBefore(4, 5);
// list.insertAfter(3,5);
// list.insertAfter(2,5);
// list.insertAfter(4,5);

// console.log(list.kthFromEnd(0));
// console.log(list.kthFromEnd(2));
// console.log(list.kthFromEnd(6));

// test 1
// create first linked list: 1 -> 3 -> 10
// var n3 = new node(2, null);
// var n2 = new node(3, n3);
// var n1 = new node(1, n2);
// var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
// var n6 = new node(4, null);
// var n5 = new node(9, n6);
// var n4 = new node(5, n5);
// let L2 = n4;
// console.log(list.merge(L1, L2));

//test 2
// create first linked list: 1 -> 3 -> null
// var n3=new node(null,null);
// var n2 = new node(3,n3);
// var n1 = new node(1, n2);
// var L1 = n1; 

// // // create second linked list: 5 -> 6 ->9=> null
// var n6 = new node(4, null);
// var n5 = new node(9, n6);
// var n4 = new node(5, n5);
// var L2 = n4;
// L2 = n4;
// console.log(list.merge(L1, L2));

//test 3
// create first linked list: 1 -> 3 -> null
var n3=new node(2,null);
var n2 = new node(3,n3);
var n1 = new node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 ->9=> null
var n6 = new node(null, null);
var n5 = new node(9, n6);
var n4 = new node(5, n5);
let L2 = n4;


console.log(list.merge(L1, L2));
