/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(...arr) {
  // TODO: Your code here!
  let chars = {}, result =``, max = 0;
  for (const str of arr) {
    for (const char of str) {
      chars[char] = chars[char] ? (chars[char]>max? chars[char]:++chars[char]) : 1;
      if( chars[char] === arr.length ) result+=char;
    }
    max++;
  }
  return result;
};
console.log(commonCharacters('acexivoou', 'aegihobu','hwareyou'));
