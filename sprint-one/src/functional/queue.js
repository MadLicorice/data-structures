var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var len = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    len += 1;
    storage[Number(len - 1)] = value;
  };

  someInstance.dequeue = function() {
    debugger;
    if (len !== 0) {
      len -= 1;
    }
    var popValue = storage[0];
    delete someInstance[0];
    return popValue;
  };

  someInstance.size = function() {
    return len;
  };

  return someInstance;
};
