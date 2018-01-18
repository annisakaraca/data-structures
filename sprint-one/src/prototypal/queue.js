var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.firstIndex = 0;

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count - this.firstIndex === 0) {
      return undefined;
    } else {
      var dequeuedValue = this.storage[this.firstIndex];
      this.firstIndex++;
      return dequeuedValue;
    }
  },
  size: function() {
    return (this.count - this.firstIndex);
  }
};


