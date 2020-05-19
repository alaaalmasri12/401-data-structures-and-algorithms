1-binary search  array cases
function binarysearch(arr,val)
{
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] ===val) {
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
   2-test array case

  const shiftArray=require("../lib/array-shift.js");
describe("binary search",()=>{
it('binary_search() should sort the array elements',()=>{
    expect(binarysearch([4,8,15,16,23,42],15)).toEqual(2);
    expect(binarysearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
});
})
3-expected 
binarysearch([2,4,6,8],5) 
 expected = 2
    actual = [4,8,15,16,23,42],15)
