'use strict';
var stack=[];
function isStringBalanced(str)
{

    for(let i=0;i<=str.length;i++)
    {
        if(str[i]=='(' ||str[i]=='{'||str[i]=='[')
        {
            stack.push(str[i]);
        }
        else if(str[i]==')' ||str[i]=='}'||str[i]===']')
        {
            stack.pop();
            if(stack.length===0)
            {
                return true;
            }
            else
            {
                return false;
            }
      }    
    }
    return false;
}
console.log('test1',isStringBalanced('{}'));
console.log('test100',isStringBalanced('[]'));

console.log('test2',isStringBalanced('{}(){}'));
console.log('test3',isStringBalanced('()[[Extra Characters]]'));
console.log('test4',isStringBalanced('(){}[[]]'));
console.log('test5',isStringBalanced('{}{Code}[Fellows](())'));
console.log('test6',isStringBalanced('[({}]'))

console.log('test7',isStringBalanced('(]('))
console.log('test8',isStringBalanced('{(})'))
console.log('test9',isStringBalanced('{'))
console.log('test10',isStringBalanced(')'))
console.log('test11',isStringBalanced('[}'))















