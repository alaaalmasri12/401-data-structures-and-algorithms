'use strict';
function Quicksort(arr, left, right) {
    if (left < right) {
        let position = Partition(arr, left, right);
        Quicksort(arr, left, position - 1);
        Quicksort(arr, position + 1, right)
    }
    return arr;
    // place the value of the pivot location in the middle.
    // all numbers smaller than the pivot are on the left, larger on the right. 
}
function Partition(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            low++
            Swap(arr, i, low)
        } 
    }
    Swap(arr, right, low + 1)
    return low + 1
}
function Swap(arr, i, low) {
    let temp;
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp;
}
console.log(Quicksort([8, 4, 23, 42, 16, 15],0,5));
module.exports = Quicksort;
