var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.len = 0;
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last += 1;
  this.len += 1;
};

queueMethods.dequeue = function() {
  var deqValue;
  if (this.len !== 0) {
    deqValue = this.storage[this.first];
    delete this.storage[this.first];
    this.len -= 1;
    this.first += 1;
  }
  return deqValue;
};

queueMethods.size = function () {
  return this.len;
};







