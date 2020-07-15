'use strict';
function Mergesort(arr) {
    console.log('ented the code');
    let n = arr.length;
    if (n > 1) {
        let mid = n / 2;
        console.log('mid',mid);
        let left = arr.splice(0, mid);
        console.log('hello',left)
        var right = arr.splice(arr[mid],n );
        console.log('hello',right);
        console.log('mid',n);
        Mergesort(left);
        Mergesort(right);
        Mergesort(left, right, arr);
    }

    function Mergesort(left, right, arr) {
        let i = 0;
        let j = 0;
        let k = 0;
        while (i < left.length && j <right.length) {
            if (left[i] < right[i]) {
                arr[k] = left[i];
                i = i + 1;
            }
            else {
                arr[k] = right[j]
                j = j + 1
            }
        }
        k = k + 1;
        if (i = left.length) {
            arr[k] = right[i];
            console.log(arr[i]);
            return arr[k];
        }
        else {
            console.log(arr[k])
            arr[k] = left[i];
            return arr[k];
        }
    }
}
 console.log(Mergesort([8,4,23,42,16,15]))
