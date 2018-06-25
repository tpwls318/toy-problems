/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var [a1,b1] = [...array.filter(x => x<0).sort((a,b)=>a-b)];
  var [a2,b2,c2] = [...array.sort((a,b)=>b-a)];
  return a1*b1*a2 > a2*b2*c2 ? a1*b1*a2 : a2*b2*c2;
};
console.log(largestProductOfThree([2, 1, -3, 7, 9, -11, -5,]));

