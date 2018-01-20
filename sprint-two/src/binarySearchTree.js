var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left;
  tree.right;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {

  if (this.value > value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
      return;
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
      return;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    if (this.left !== undefined) {
      return this.left.contains(value);
    }
  } else if (this.value < value) {
    if (this.right !== undefined) {
      return this.right.contains(value);
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(value) {
  value(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(value);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(value);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
