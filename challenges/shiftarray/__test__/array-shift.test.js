'use strict';
const shiftArray=require("../lib/array-shift.js");
describe("Array",()=>{
it('shiftarr() should reverse the array elements',()=>{
    // expect(shiftArray([2,4,6,8],5)).toEqual([2,4,5,6,8]);
    expect( shiftArray([4,8,15,23,42],16)).toEqual([4,8,15,16,23,42]);
});
})