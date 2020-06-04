'use strict';
const { Node, Queue } = require('../stacks-and-queues');
//test to insert a node to check if the push method works
describe("stackandqueue", () => {
   it(' Can successfully push on to a stack', () => {
      let stack = new Node();
      stack.push('a');
      // console.log(stack);//will have storage[a],top:a
      expect(stack.storage[0]).toEqual('a');

   });
   //test to push more than one item into the stack
   it(' Can successfully push more than one node  to a stack', () => {
      let stack = new Node();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2)
      expect(stack.peek()).toEqual(2);
      stack.push(3)
      expect(stack.peek()).toEqual(3);

   });
   //deleteing a the top node and check if the top.next is the peek value which means the pop works
   it('Can successfully pop off the stack',()=>{
      let stack=new Node();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.peek()).toEqual(2);


   //Can successfully empty a stack after multiple pops
   })
   it('Can successfully empty a stack after multiple pops',()=>{
      let stack=new Node();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.peek()).toBeUndefined();
   })
//Can successfully instantiate an empty stack
it('Can successfully instantiate an empty stack',()=>{
   let stack=new Node();
   expect(stack instanceof Node).toBeTruthy();
})
//Calling pop or peek on empty stack raises exception
it('Calling pop or peek on empty stack raises exception',()=>{
   let stack=new Node();
   expect(stack.peek()).toBeNull();
})

//Can successfully enqueue into a queue
it('Can successfully enqueue into a queue',()=>{
   let queue=new Queue();
   queue.enqueue(1);
   expect(queue.peek()).toEqual(1);
})
it('Can successfully enqueue multiple values into a queue',()=>{
   let queue=new Queue();
   queue.enqueue(1);
   queue.enqueue(2);
   queue.enqueue(3);
   expect(queue.peek()).toEqual(1);
   console.log(queue);
   // expect(queue.peek()).toEqual(3);
})
//deque the expected value
// it('Can successfully dequeue out of a queue the expected value',()=>{
       
      
//    let q = new Queue();
//    q.enqueue(1);
//    q.enqueue(2);
//    q.enqueue(3);
//    q.enqueue(4);

//    expect(q.dequeue()).toEqual(1);
//    expect(q.dequeue()).toEqual(2);
//    expect(q.dequeue()).toEqual(3);
//    expect(q.dequeue()).toEqual(4);


// })
//
it('Can successfully peek into a queue, seeing the expected value',()=>{
       
      
   let q = new Queue();
   q.enqueue(1);
   expect(q.peek()).toEqual(1);
   q.enqueue(2);
   expect(q.peek()).toEqual(2);

   q.enqueue(3);
   expect(q.peek()).toEqual(3);
   q.enqueue(4);

   expect(q.peek()).toEqual(4);


})
it('Can successfully instantiate an empty queue',()=>{
       
      
   let q = new Queue();
 
expect(q instanceof Queue).toBeTruthy();
})
it('Calling dequeue or peek on empty queue raises exception',()=>{
       
      
   let q = new Queue();
 
expect(q.peek()).toBeUndefined();
})
})
