'use strict';

const insertionsort = require('../insertion');

describe('insertion test', ()=> {

 
    it('test 1', ()=> {
        
        let array = [8,4,23,42,16,15];
        let expected=[4,8,15,16,23,42];
let result=insertionsort(array);
        expect(expected).toEqual(result);
    });

    it('test 2', ()=> {
        
        let array = [20,18,12,8,5,-2];
        let expected=[-2,5,8,12,18,20];
let result=insertionsort(array);
        expect(expected).toEqual(result);
    });
  
    it('test 3', ()=> {
        
        let array = [5,12,7,5,5,7];
        let expected=[5,5,5,7,7,12];
let result=insertionsort(array);
        expect(expected).toEqual(result);
    });
    it('test 4', ()=> {
        
        let array = [2,3,5,7,13,11];
        let expected=[2,3,5,7,11,13];
let result=insertionsort(array);
        expect(expected).toEqual(result);
    });
});