/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
let i;

// Feel free to add helper functions if needed.

// Total: 
// worst: n(n+5)/2 => O(n^2)
// best: 3n , When the array already sorted
const bubbleSort = array => {
  // Your code here.
  let count = 0, tmp =0 ;
  let newArr = [...array];// n
  for(i=array.length-1;i>0;i--){
      tmp = 0;
      // n(n-1)/2
      newArr.reduce( (acc,e,x,arr) => {
        count++;
        if( acc > e) [ arr[x-1], arr[x], tmp] = [e, acc, tmp+1];
        return acc > e ? acc : e;
    });   
    array[i]=newArr.pop();// n
    if(!tmp) {
      array=[...newArr, ...array.slice(i)];// n
      console.log(count);
      return array;
    }
  }
  array[i]=newArr.pop();
  console.log(count, newArr);
  return array;    
};

console.log(bubbleSort([7 ,2, 1, 3, 5, 4]));
// [ 2, 1, 3, 5, 4, 7 ]
// [ 1, 2, 3, 4, 5, 7 ]
console.log(bubbleSort([7 ,6, 5, 4, 3, 2, 1]));
// worst - count :  n(n-1)/2 = 21
console.log(bubbleSort([1 ,2, 3, 4, 5, 6, 7]));
// best  - count :  n-1 = 6

