var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};

  someInstance.len = 0;
  someInstance.first = 0;
  someInstance.last = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[Number(this.last)] = value;
    this.last += 1;
    this.len += 1;
  },

  dequeue: function() {
    var deqValue = this.storage[Number((this.first))];
    if (this.len !== 0) {
      delete this.storage[Number((this.first))];
      this.first += 1;
      this.len -= 1;
    }
    return deqValue;

  },

  size: function () {
    return this.len;
  }
};


