/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(str){
    const key = getIndexBelowMaxForKey(str, storageLimit);
    if( storage[key] ) {
      let next = storage[key];
      while(next[1]) {
        next = next[1];
      }
      next[1] = [str, null];
    } else {
      storage[key] = [str, null];
    }
    return key;
  };

  result.retrieve = function(str){
    const key = getIndexBelowMaxForKey(str, storageLimit);
    let next = storage[key];
    while (next) {
      if(next[0] === str)
        return str;
      next = next[1];
    }
    return false;
  };

  result.remove = function(str){
    const key = getIndexBelowMaxForKey(str, storageLimit);
    let next = storage[key];
    if(next[0] === str) {
      storage[key] = next[1];
      return true;
    }
    while (next[1]) {
      if(next[1][0] === str) {
        next[1] = next[1][1];
        return true;
      }
      next = next[1];
    }
    return false;
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const myHash = makeHashTable();
myHash.insert("injured");
myHash.insert("shrinking");
myHash.insert("painless");
myHash.insert("hitchhiker");
myHash.insert("leverage");
myHash.insert("shameful");
myHash.insert("enormous");
myHash.insert("honorless");
myHash.insert("allowed");
myHash.insert("tangible");
myHash.insert("unavoidable");
myHash.insert("augur");
myHash.insert("bellicose");
myHash.insert("revere");
myHash.insert("preposterous");
myHash.insert("piquant");
myHash.insert("loyalist");
myHash.insert("magnanimous");
myHash.insert("redoubtable");
myHash.insert("immutable");
myHash.insert("orthodox");
myHash.insert("aversion");
myHash.insert("vague");
myHash.insert("verisimilar");
myHash.insert("byzantine");
myHash.insert("backbreaking");
myHash.insert("diverge");
myHash.insert("premeditated");
myHash.insert("spontaneous");
myHash.insert("tranquilize");
myHash.insert("enslave");
myHash.insert("fertile");
myHash.insert("inauspicious");
myHash.insert("gainsay");
myHash.insert("undergirder");
console.log(myHash.retrieve("inevitable"));
// console.log(myHash.remove("unavoidable"));
console.log(myHash.retrieve("unavoidable"));
// console.log(myHash.remove("augur"));
console.log(myHash.retrieve("augur"));
console.log(myHash.remove("inauspicious"));
console.log(myHash.retrieve("inauspicious"));

const duplicate = (...arr) => {
  let obj = {};
  arr.forEach( val => {
    let key = getIndexBelowMaxForKey(val,1000)
    
    obj[key] = obj[key]? obj[key].push(val) :[val];
  });
  // console.log(arr.length ,Object.keys(obj).length);
  // console.log(obj[]);
  
  return obj;
}

