'use strict';

const model = require('../StacksAndQueues/stacks-and-queues');
const Stack = model.Node

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){

    if(this.stack1.top == null ){
      this.stack1.push(value);
      return this.stack1;
    }
  }

  dequeue(){
    if(this.stack1.top == null ){
      return 'empty';
    }
    return this.stack1.pop();
  }
}
let queues=new PseudoQueue();
queues.enqueue(1);
queues.enqueue(2);
module.exports = PseudoQueue;