1-sift array cases
function shiftArray(arr,position) {

  let Middle = Math.ceil(arr.length / 2);
    arr.splice(Middle, 0,position);
    return arr;
  
  }
  2-test array case

  const shiftArray=require("../lib/array-shift.js");
describe("Array",()=>{
it('shiftarr() should reverse the array    elements',()=>{
    // expect(shiftArray([2,4,6,8],5)).toEqual([2,4,5,6,8]);
    expect( shiftArray([4,8,15,23,42],16)).toEqual([4,8,15,16,23,42]);
});
})
3-expected 
shiftArray([2,4,6,8],5) 
 expected = [2,4,5,6,8]
    actual = [2,4,6,8],5
