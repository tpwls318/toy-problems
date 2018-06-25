$(document).ready( (function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  
  //$('p').css({'font-weight':'bold'})
  $p = $('p').text();
  words = $p.split(" ").filter( x=>{ return x.length ? x.charCodeAt(0)!==10 : 0 } )
  words = words.map( x => `<span>${x}</span>` );
  $('p').empty();
  for (const word of words) {
    $('p').append(word)
  }
  //function(index,currentcontent)

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  
  setInterval( ()=>{
    $('span').css({"color":'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)})
  } , 1000)

}));
