var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var len = 0;
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    last += 1;
    len += 1;
    storage[Number(last - 1)] = value;
    
  };

  someInstance.dequeue = function() {
    if (len !== 0) {
      len -= 1;
    }
    var popValue = storage[Number(first)];
    delete storage[Number(first)];
    first += 1;
    return popValue;
  };

  someInstance.size = function() {
    return len;
  };

  return someInstance;
};
