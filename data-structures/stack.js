/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

function Stack(capacity) {
  // implement me...
  this.items = {};
  this.currentIndex = 0;
  this.capacity = capacity;
}

Stack.prototype.push = function(value) {
  // implement me...
  if (Object.keys(this.items).length < this.capacity) {
    this.items[this.currentIndex] = value;
    this.currentIndex += 1;
  } else {
    return "Max capacity already reached. Remove element before adding a new one.";
  }
};
// Time complexity:

Stack.prototype.pop = function() {
  // implement me...
  const item = this.items[this.currentIndex - 1];
  delete this.items[this.currentIndex - 1];
  this.currentIndex -= 1;
  return item;
};
// Time complexity:

Stack.prototype.peek = function() {
  // implement me...
  return this.items[this.currentIndex - 1];
};
// Time complexity:

Stack.prototype.count = function() {
  // implement me...
  return Object.keys(this.items).length;
};

Stack.prototype.contains = function(item) {
  for (let key in this.items) {
    if (this.items[key] === item) {
      return true;
    }
  }

  return false;
};

Stack.prototype.until = function(item) {
  const length = Object.keys(this.items).length - 1;
  let counter = 0;
  for (let i = length; length > 0; i -= 1) {
    counter += 1;
    if (this.items[String(i)] === item) {
      return counter;
    }
  }

  return -1;
};

const pile = new Stack(7);
pile.push("Magazines");
pile.push("DVDs");
pile.push("Clothes");
pile.push("Pizza");
console.log(pile.count());
console.log(pile.pop());
console.log(pile.count());
console.log(pile.peek());
console.log(pile.contains("DVDs"));
console.log(pile.contains("Pizza"));
console.log(pile.until("Magazines"));
// Time complexity:

/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
