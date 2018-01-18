var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[Number(this.count)] = value;
  this.count += 1;
};

stackMethods.pop = function() {
  var popValue = this.storage[Number((this.count - 1))];
  if (this.count !== 0) {
    delete this.storage[Number((this.count - 1))];
    this.count -= 1;
  }
  return popValue;

};

stackMethods.size = function () {
  return this.count;
};

