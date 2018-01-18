class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.firstIndex = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count - this.firstIndex === 0) {
      return undefined;
    } else {
      var dequeuedValue = this.storage[this.firstIndex];
      this.firstIndex++;
      return dequeuedValue;
    }
  }

  size() {
    return (this.count - this.firstIndex);
  }
}
