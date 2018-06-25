/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */
var _ = function(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
};

_.memoize = function(func) {
  var cache = {};
  var returnFunc = function(){
    var usedArgs='';
    for(var i=0;i<arguments.length;i++)
      usedArgs+=arguments[i];
    if(cache[usedArgs] === undefined)
      cache[usedArgs] = func.apply(this, arguments);
    return cache[usedArgs];
  };
  return returnFunc;
};

var nthFibonacci = _.memoize ( function (n) {
  return  n > 2 ? nthFibonacci(n-2) + nthFibonacci(n-1) : ( n? 1 : 0 );
});

console.log(nthFibonacci(7));


