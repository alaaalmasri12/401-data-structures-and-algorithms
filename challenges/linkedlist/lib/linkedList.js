const Node = require('../node');
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


list.toString();
