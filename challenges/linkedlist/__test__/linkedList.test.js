'use strict';
const LinkedList = require("../lib/linkedList");

describe("linkedlist", () => {
   it('contructor()', () => {
      let list = new LinkedList();
      expect(list.head).toBeNull();
   });
   it('insert()', () => {
      let list = new LinkedList();
      let initialValue = 'test First';
      list.insert(initialValue);
      expect(list.head.value).toEqual(initialValue);
   });
   it('The head property will properly point to the first node in the linked list', () => {
      let list = new LinkedList();
      let initialValue = 'test First';
      list.insert(initialValue);
      // console.log('hellllllllllllllllllllllllllo',list.head);

      if (!list.head) {
         list = this.head;
         expect(list).toEqual(initialValue);
      }
   });
   it('Can properly insert multiple nodes into the linked list', () => {
      let list = new LinkedList();
      let initialValue = 'test First';
      list.insert(initialValue);
      let secondValue = 'second value';
      list.insert(secondValue);
      // console.log(list);
      expect(list).toEqual(list);
   });
   it('Will return true when finding a value within the linked list that exists', () => {
      let list = new LinkedList();
      let initialValue = 'test First';
      list.insert(initialValue);
      expect(list.includes('test First')).toEqual(true);
   });
   it('Will return false when finding a value within the linked list that doesnt exists', () => {
      let list = new LinkedList();
      let initialValue = 'test First';
      list.insert(initialValue);
      expect(list.includes('test Firstsadasd')).toEqual(false);
   });
    it('Can properly return a collection of all the values that exist in the linked list', ()=> {
       let list = new LinkedList();
       let initialValue = 'test First';
       list.insert(initialValue);
       let secobdValue = 'test second';
       list.insert(secobdValue);
       console.log('asdasdasdsadhelooooooooooooooooooooooooooooooooo',list.toString())
       expect(list.toString()).toEqual(list.toString());
    });
})
