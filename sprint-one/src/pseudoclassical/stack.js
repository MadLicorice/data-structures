var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[Number(this.count)] = value;
  this.count += 1;
};

Stack.prototype.pop = function() {
  var popValue = this.storage[Number((this.count - 1))];
  if (this.count !== 0) {
    delete this.storage[Number((this.count - 1))];
    this.count -= 1;
  }
  return popValue;

};

Stack.prototype.size = function () {
  return this.count;
};



