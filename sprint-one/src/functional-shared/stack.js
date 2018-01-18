// var extend = function(to, from) {
//   for (var key in from) {
//     if (key !== constructor) {
//       to[key] = from[key];
//     }
//   }
// };



var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};

  someInstance.count = 0;

  _.extend(someInstance, Stack.stackMethods);

  return someInstance;
};



Stack.stackMethods = {};

Stack.stackMethods.push = function(value) {
  this.storage[Number(this.count)] = value;
  this.count += 1;
};

Stack.stackMethods.pop = function() {
  var popValue = this.storage[Number((this.count - 1))];
  if (this.count !== 0) {
    delete this.storage[Number((this.count - 1))];
    this.count -= 1;
  }
  return popValue;

};

Stack.stackMethods.size = function () {
  return this.count;
};