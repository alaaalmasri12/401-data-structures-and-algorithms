'use strict';
insert(data, position = this.length) 
{
   let node = new this.Node(data);
   if (this.head === null) {
      this.head = node;
      this.length++;
      return this.head;
   }
   let iter = 1;
   let currNode = this.head;
   while (currNode.next != null && iter < position) {
      currNode = currNode.next; iter++;
   }
   node.next = currNode.next;
   currNode.next = node;
   this.length++;
   return node;
}
let list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(15, 2);
list.display();