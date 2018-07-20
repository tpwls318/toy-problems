/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = {};
  this.index = 0;
  // add an item to the top of the stack
  this.push = function(item){
    this.storage[this.index] = item;
    return ++this.index;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    let item = this.storage[--this.index];
    delete this.storage[this.index];
    return item;
  };

  // return the number of items in the stack
  this.size = function(){
    return this.index;
  };
};
let stack = new Stack();
console.log(
  stack.push("foo"),
  stack.push("bar"),
  stack.pop(),
  stack.size(),
  stack.pop(),
  stack.size(),
);

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item){
    // TODO: implement `enqueue`
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    if(!outbox.size()){
      while(inbox.size() > 1){
        outbox.push(inbox.pop())
      }
      return inbox.pop();
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.size() + outbox.size();
  };
};

let queue = new Queue();

queue.enqueue("foo");
queue.enqueue("bar");
queue.enqueue("car");
console.log(
  queue.dequeue(),
  queue.size(),
  queue.dequeue(),
  queue.size(),
);
queue.enqueue("baz");
console.log(
  queue.dequeue(),
  queue.size(),
);