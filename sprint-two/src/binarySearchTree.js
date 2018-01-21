var BinarySearchTree = function(value) {
  var BST = {};

  BST.value = value;
  BST.right = null;
  BST.left = null;
  

  BST.insert = function(value) {

    if (value > BST.value) {
      if (BST.right === null) {
        var newNode = BinarySearchTree(value);
        BST.right = newNode;
      } else {
        BST.right.insert(value);
      }
    } else {
      if (BST.left === null) {
        var newNode = BinarySearchTree(value);
        BST.left = newNode;
      } else {
        BST.left.insert(value);
      }
    }

    return newNode;
  };

  BST.contains = function(value) {
    if (value === BST.value) {
      return true;
    }

    if (value > BST.value) {
      if (BST.right === null) {
        return false;
      } else {
        if (BST.right.contains(value)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (BST.left === null) {
        return false;
      } else {
        if (BST.left.contains(value)) {
          return true;
        } else {
          return false;
        }
      }
    }
  };
  
  BST.depthFirstLog = function(cb) {
    debugger;
    cb(BST.value);
    var left = !!BST.left;
    var right = !!BST.right;

    if (left && right) {
      BST.left.depthFirstLog(cb);
      BST.right.depthFirstLog(cb);
    } else if (left) {
      BST.left.depthFirstLog(cb);
    } else if (right) {
      BST.right.depthFirstLog(cb);
    } 

  };

  return BST;
};

// if value === target
//   return true;
// else 
//   link.head = link.head.next;
//   link.head.contains(target);
//   return true;

/*
 * Complexity: What is the time complexity of the above functions?
 */