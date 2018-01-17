var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var total = 0;
  var firstIndex = 0;

  // strategy: keep track of the index where the queue begins
  // when an item is dequeued, the start index must be incremented
  // because the new first item in the queue will be the value of the next
  // numerical key

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[total + firstIndex] = value;
    total++;
  };

  someInstance.dequeue = function() {
    if (total === 0) {
      return undefined;
    } else {
      total--;
      var dequeuedValue = storage[firstIndex];
      firstIndex++;
      return dequeuedValue;
    }
  };

  someInstance.size = function() {
    return total;
  };

  return someInstance;
};
