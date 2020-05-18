'use strict';

function shiftArray(arr,position) {

  let Middle = Math.floor(arr.length / 2)
    arr.splice(Middle, 0,position);
    return arr;
  
  }
  

//output 


console.log(shiftArray([2,4,6,8],5));
module.exports=shiftArray;