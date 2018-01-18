var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var addedNode = Node(value);
    if (list.head === null) {
      list.head = addedNode;
    } else {
      list.tail.next = addedNode;
    }
    list.tail = addedNode;
  };

  list.removeHead = function() {
    var item = list.head.value;
    list.head = list.head.next;
    return item;
  };

  list.contains = function(target) {
    var search = function(node, target) {
      if (node.value !== target && node.next === null) {
        return false;
      } else if (node.value === target) {
        return true;
      } else {
        return search(node.next, target);
      }
    };
    return search(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
