'use strict';
let model=require('../StacksAndQueues/stacks-and-queues');
let queue=model.Queue;

class Animalshlter
{
    constructor()
    {
        this.dog=new queue();
        this.cat=new queue();
    }
    enQueue(animal) {
        if (animal.type === 'dog') {
          this.dog.enqueue(animal.name);
        }
        if (animal.type === 'cat') {
          this.cat.enqueue(animal.name);
        }
      }
    
      deQueue(pref) {
        if (pref.type !== 'dog' && pref.type !== 'cat') {
          return null;
        }
        else if(pref.type ==='cat')
        {
            return pref;
        }
        else
        {
            return pref
        }
        
      }
    
}
let animal=new Animalshlter('alaa');
let johnny={
    name:'johnny',
    type:'dog'
}
let sherry={
    name:'sherry',
    type:'cat'
}
let abdlha_obaid={
    name:'sherry',
    type:'haybrid'
}
animal.enQueue(johnny);
animal.enQueue(sherry);
console.log('alaaaaaaaa',animal.deQueue(abdlha_obaid));

console.log(animal);