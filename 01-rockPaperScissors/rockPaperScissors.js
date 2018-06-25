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
  let result = [];
  const toTernary = num => {
    let ternary = '';
    let limit= Math.pow(3,n-1);
    let tc=0;
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
  result = Array.from({length: Math.pow(3,n)-1}, (v, i) => i)
    .map(x => toTernary(x))
    .map(x => {
      x=x+'';
      while(x.length<n) {
        x+='0';
      }
      return x;
    })
    .map( el => {
      let x = [];
      for(let i in el){
        if(el[i] === '0') x.push('rock');
        else if(el[i] === '1') x.push('paper');
        else if(el[i] === '2') x.push('scissors');
      }
      return x;     
    });
  return result;
};

console.log(rockPaperScissors(3));


