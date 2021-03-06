var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;

    if (list.head !== null) {
      list.head = list.head.next;
      return headValue;
    }
  };

  list.contains = function(target) {

    while (list.head !== null) {
      if (list.head.value === target) {
        return true;
      } else if (list.head.next === null) {
        return false;
      } else {
        list.head = list.head.next;
      }
  
    }
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
