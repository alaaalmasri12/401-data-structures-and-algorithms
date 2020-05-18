'use strict';
function shiftArray(arr,position) {

  let Middle = Math.ceil(arr.length / 2);
    arr.splice(Middle, 0,position);
    return arr;
  
  }
  module.exports=shiftArray;
  
