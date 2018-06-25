/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
const mid = (x,y) => Math.floor( (x+y) / 2);
const binarySearch = (array, target) => {
    const BST = (first, last) => (
        array[mid(first, last)] === target ? // return mid when target matches mid value
            mid(first, last) : first === last ?  // return false if there is no value matches
                false : target < array[mid(first, last)] ? // return BST (recursive) 
                    BST(first,mid(first, last)-1) : BST(mid(first, last)+1,last));
    return [BST(0,array.length-1)];
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // [3]

var index = binarySearch([1, 2, 3, 4, 5, 7, 10, 16, 20, 25], 8);
console.log(index); // [3]
