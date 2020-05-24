const Node=require('../node');
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  includes(value) {
    var node = this.head;
    console.log('value',node);
    while(node !== null){
      if(node.value === value){
       return true;
      }
      node = node.next;
    }
    return false; 
  }
  

  insert(value) {
let node=new Node(value);
//if the value is not null assign the head to the inserted node
if(!this.head)
{
  this.head=node;
  return this;
}
let newNode=this.head;
while(newNode.next)
{
  newNode=newNode.next;
}
newNode.next=node;
return this;
  }
toString()
{
  var curr = this.head; 
  var str = ""; 
  while (curr) { 
      str += curr.value + "  =>  " ; 
      curr = curr.next; 
  } 
  console.log(this.head);
  return str; 
}
}
module.exports=LinkedList;

