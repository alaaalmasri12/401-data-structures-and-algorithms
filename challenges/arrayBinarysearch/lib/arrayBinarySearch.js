'use strict';
/*
A of  n elements with values
T  target value 
*/
function binarysearch(arr,val)
{
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] ===al) {
            return mid;
        } 
        else if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
    
}
  module.exports=binarysearch;
  
