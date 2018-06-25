/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';
const compose = (...funcs)=> ( name => (funcs.reduce( (acc,func)=> func(acc), name)));
const pipe = (...funcs)=> num => funcs.reduce( (acc,func)=> func(acc), funcs.shift()(num));
   
var thanks = function(name){ return  name + ' go to hell';}
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(thanks, exclaim, greet);
console.log(welcome('phillip'));

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
var subtract5 = function(number){return number - 5;}
pipe(add2, multiplyBy3)(5) // 21
pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
console.log(  pipe(add2, multiplyBy3, subtract5)(5) );


