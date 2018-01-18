var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  newStack.count = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {
  pop: function() {
    if (this.count === 0) {
      return undefined;
    } else {
      this.count--;
      return (this.storage[this.count]);
    }
  },
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  size: function() {
    return this.count;
  }
};


