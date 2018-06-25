/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
  let i, temp = string[0];
  for(i in string){
    if(temp !== string[+i+1]) return string[+i+1];
    if(+i===string.length-2) return false;
  }
};
console.log(firstNonRepeatedCharacter('ABA'));
console.log(firstNonRepeatedCharacter('AACBDB'));


