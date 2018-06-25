/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
    let brackets = {'[':']', '{':'}','(':')'}
    let tmp=[];

    for (let i in input) {
        if ( input[i]==='[' || input[i] === '{' || input[i] === '(' ||
        input[i]===']' || input[i] === '}' || input[i] === ')' )
            tmp.push(input[i])
    }
    input = tmp.join('');
    tmp=[];
    
    for (let i in input) {
        if ( (input[i]==='[' || input[i] === '{' || input[i] === '(' ||
        input[i]===']' || input[i] === '}' || input[i] === ')'))
        {
            tmp.push(input[i]);
            if(brackets[tmp[tmp.length-2]]){
                if( input[i]==brackets[tmp[tmp.length-2]] ){              
                    tmp.pop()
                    tmp.pop()
                }       
            }  
        }
    }


    return !tmp.length;
};

console.log(
    balancedParens('[](){}'), // true
    balancedParens('[({})]'),  // true
    balancedParens('[(]{)}') ,// false
    
    balancedParens(' var wow  = { yo: thisIsAwesome() }'), // true
    balancedParens(' var hubble = function() { telescopes.awesome();') // false
);

