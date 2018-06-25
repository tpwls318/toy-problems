/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance: 6 0 1 2 3 4 5 
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  if (rotated[0] === target) return 0;
  let index = rotated[0] < target ? target-rotated[0]: rotated.length-(rotated[0]-target);
  if( index > rotated.length-1 ) return null;
  else if ( rotated[index]===target ) {}
  else if (rotated[index] < target) {
    while ( rotated[index]!==target )
      index++;
  } else return null;
  return index;
};
 console.log(  rotatedArraySearch( [0, 1, 2, 3, 4, 5, 6], 2) );//2
 console.log(  rotatedArraySearch( [4, 5, 6, 0, 1, 2, 3], 2) );//5
 console.log(  rotatedArraySearch( [4, 5, 6, 0, 1, 2, 3], 100) );//null
 console.log(  rotatedArraySearch( [4, 5, 6, 0, 1, 2, 3], 6) );//2
 console.log(  rotatedArraySearch( [6, -3, -1, 2, 3, 5], 2) );//3


