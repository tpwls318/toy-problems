/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/
var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

var _ = function(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
};

_.contains = _.include = function(obj, target) {
  if (obj == null) return false;
  if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
  return any(obj, function(value) {
    return value === target;
  });
};

Array.prototype.isSubsetOf = function(arr){
  // console.log(ArrayProto);
  
  // for (const key in arr) {
  //   console.log(arr[key]);
  //   if(typeof arr[key] === 'function') console.log('func : ', key);    
  // }

  for (let i=0;i < this.length;i++) 
    if( !_.contains(arr, this[i]) ) return false; 
  return true;
};
var a = ['commit','push',9];
console.log(a.isSubsetOf(['commit','rebase','push','blame',5,9]));  // true
var b = ['merge','reset','reset'];
console.log(b.isSubsetOf(['reset','merge','add','commit']));  // true

// array = [1,2,3,4,5];
// console.log(array.isSubsetOf([2,3]));

