'use strict';
const binarysearch=require("../lib/arrayBinarySearch.js");
describe("binary search",()=>{
it('binary_search() should sort the array elements',()=>{
    expect(binarysearch([4,8,15,16,23,42],15)).toEqual(2);
    expect(binarysearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
});
})