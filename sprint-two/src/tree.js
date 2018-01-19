var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

//O(1)
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

//O(n)
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      var result = this.children[i].contains(target);
      if (result) {
        return true;
      }
    }
  } 
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
