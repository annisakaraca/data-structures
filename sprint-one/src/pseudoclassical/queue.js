var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.firstIndex = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count === this.firstIndex) {
    return undefined;
  } else {
    var dequeuedValue = this.storage[this.firstIndex];
    this.firstIndex++;
    return dequeuedValue;
  }
};

Queue.prototype.size = function() {
  return (this.count - this.firstIndex);
};


