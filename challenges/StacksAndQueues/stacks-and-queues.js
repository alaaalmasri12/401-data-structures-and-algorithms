'use strict';
class Node
{

    constructor()
    {
        this.storage=[];
        this.top=null;
    }
    //push will update the storage then update the node
    //example:
    /*
let a=[1,2,3];
a.unshift();
    */
    push(item)
    {
        console.log('enterd the method');
this.storage.unshift(item);//it will add the item to the fornt of the array 
this.top=item;
    }
    /*
shift will delete the top node which is 3
    */
    pop(item)
    {
        this.storage.shift();
        this.top=this.storage[0];
        return item;

    }
    peek()
    {
        return this.top;
    }
    isEmpty()
    {
return (this.storage !==null)?true:false;
    }

}

class Queue
{
 constructor()
 {
     this.storage=[];
 }   
 
 //eneuqe will add the node to the last in the stack
 enqueue(item)
 {
this.storage.push(item);
 }
//will delete the last item from the Queue
 dequeue()
 {
     this.storage.shift();
 }

 peek()
 {
    return this.storage[0];
 }
 isEmpty()
 {
return (this.storage !==null)?true:false;
 }
}

// console.log('hello');
// let stack=new Node(); //new instance of node
// storage [] top:null
// stack.push(1); 
// storage [1] top:1
// stack.push(2);
// storage [2,1] top:2
// stack.push(3);
// storage [3,2,1] top:2
// stack.pop();
// storage [2,1] top:2
// stack.pop();
// storage [1] top:1

// console.log('top node which is peek',stack.peek());
// console.log(stack);

// let queue=new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();

// console.log(queue)
module.exports = { Node, Queue }
