/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  let node = this.makeNode(value);
  if(!this.head) this.head = node;
  if(this.tail) this.tail.next = node;
  this.tail = node;
};

LinkedList.prototype.removeHead = function(){
  if(this.head){
    const removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  } 
  return false;
};

LinkedList.prototype.contains = function(value){
  let curNode = this.head;
  while (curNode) {
    if(curNode.value === value) return true;
    curNode = curNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = 
  (value) => ({value, next: null});

var list = new LinkedList();
console.log(list.tail);  //yields 'null'
list.addToTail(4);
list.addToTail(5);
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead());  //yields '4'
console.log(list.tail.value);  //yields '5';