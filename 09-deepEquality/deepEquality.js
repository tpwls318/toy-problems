/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = (apple, orange) => {
  let bool=true;
  for(let x of Object.keys(apple)){  
    if(Object.keys(apple[x]).length)
      return deepEquals(apple[x], orange[x])
    else {
      if( apple[x]!== orange[x]) bool=false;    
    }
  }
  return bool;
};
console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
console.log(deepEquals({ b: {c:5}, a:1},{b: {c:6}, a:1})); // false
