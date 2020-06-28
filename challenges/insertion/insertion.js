'use strict';
/*
i=1;
arr.length=6
j=0
temp=4
arr[j]=0->8
arr[j+1]=arr[0]->arr[1]=8
[8,8,23,42,16,15]


*/
function insertionsort(arr) {
    for (let i = 1; i <= arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
            arr[j + 1] = temp;
        }
    }
    return arr;

}
console.log(insertionsort([8, 4, 23, 42, 16, 15]));
//  console.log(insertionsort([20,18,12,8,5,-2]));
//  console.log(insertionsort([5,12,7,5,5,7]));
//  console.log(insertionsort([2,3,5,7,13,11]));

