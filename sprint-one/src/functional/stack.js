var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // var count = (Object.keys(storage)).length;

  // Implement the methods below
  
  someInstance.push = function(value) {
    count += 1;
    return storage[Number(count - 1)] = value;
  };

  someInstance.pop = function() {
    if (count !== 0) {
      count -= 1;
    }
    var popValue = storage[(Number(count))];
    delete storage[(Number(count))];
    return popValue;

  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};