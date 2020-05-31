const Node=require('../node');
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  includes(value) {
    var node = this.head;
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

insertBefore(val,newval)
{
    let thisNode = this.head;
 
    while(thisNode.value === val) {
      
            this.head.next=new Node(newval);
            
        return thisNode;

    }  
 }
}
module.exports=LinkedList;
// let list = new LinkedList();
// let initialValue = 1;
// list.append(initialValue);
// let secondValue = 2; 
// list.append(secondValue);
//  let thirdValue = 3; 
// list.append(thirdValue);
// let forthValue = 4; 
// list.append(forthValue);
// console.log(list.insertBefore(1,5));
// // console.log(list);
