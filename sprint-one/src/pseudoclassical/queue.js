var Queue = function() {
  this.storage = {};
  this.len = 0;
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last += 1;
  this.len += 1;
};

Queue.prototype.dequeue = function() {
  var deqValue;
  if (this.len !== 0) {
    deqValue = this.storage[this.first];
    delete this.storage[this.first];
    this.len -= 1;
    this.first += 1;
  }
  return deqValue;
};

Queue.prototype.size = function () {
  return this.len;
};

