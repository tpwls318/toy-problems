/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

const toFraction = number => {
  // Your code here
  let [nat, dec] = `${number}`.split('.');
  // when dec is 0 or undefined, toFraction(3.0) === '3/1'
  if ( !dec || !+dec ) return `${nat}/1`;
  let n = dec.length, count=0;
  // initailize denomination ex) .01 => 100
  let denom = Math.pow(10, dec.length);
  // reduction (by 2 & 5)
  while( !(dec%2) && n > count++ )
    [dec, denom] = [dec/2,denom/2];
  count=0;
  while( !(dec%5) && n > count++ )
    [dec, denom] = [dec/5,denom/5];
  // toFraction(2.5) === '5/2'
  return `${dec+nat*denom}/${denom}`;
};

let arr = [0.5, 3.0, 2.5, 3.024];
while(arr.length)
  console.log(toFraction(arr.shift()));