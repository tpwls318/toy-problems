var ArrayProto = Array.prototype;
var nativeMap = ArrayProto.map;
var _ = function(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
};
_.range = function(start, stop, step) {
  if (arguments.length <= 1) {
    stop = start || 0;
    start = 0;
  }
  step = arguments[2] || 1;

  var len = Math.max(Math.ceil((stop - start) / step), 0);
  var idx = 0;
  var range = new Array(len);

  while(idx < len) {
    range[idx++] = start;
    start += step;
  }

  return range;
};

_.map = _.collect = function(obj, iterator, context) {
  var results = [];
  if (obj == null) return results;
  if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
  each(obj, function(value, index, list) {
    results[results.length] = iterator.call(context, value, index, list);
  });
  return results;
};
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  // TODO: your solution here
  var i = 0;
  var result = [];
  var toTernary = function(num){
    var ternary = '';
    var limit= Math.pow(3,n-1);
    var tc=0;
    while(num>0){ 
      if(num>=limit){
        num-=limit;
        tc++;
      }else{
        ternary+=tc;
        limit/=3;
        tc=0;
      }
    }
    return ternary+tc;
  };
  result = _.range(0,Math.pow(3,n)-1)
  .map( x=>toTernary(x))
  .map(function (x) {
    x=x+'';
    while(x.length<n) {
      x+='0';
    }
    return x;
  })
  .map(function (context, value, index, list){
    var x = [];
    for(i in context){
      if(context[i] === '0') x.push('rock');
      else if(context[i] === '1') x.push('paper');
      else if(context[i] === '2') x.push('scissors');
    }
    return x;     
  });
  // while(n > 0){
  //   for(j=0;j<n;j++){
  //     iterator();
  //   }
  //   n--;
  // }
  // for(i in rPS){
  //   for(j in rPS){
  //     for(k in rPS){
  //       for(l in rPS){
  //         for(m in rPS){
  //           result.push([rPS[i],rPS[j],rPS[k],rPS[l],rPS[m]]);
  //         }
  //       }
  //     }
  //   }
  // }
  return result;
};

console.log(rockPaperScissors(3));


