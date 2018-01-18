class Queue {
  constructor() {
    this.storage = {};
    this.len = 0;
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this.storage[this.last] = value;
    this.last += 1;
    this.len += 1;
  }

  dequeue() {
    if (this.len !== 0) {
      var deqValue = this.storage[this.first];
      delete this.storage[this.first];
      this.first += 1;
      this.len -= 1;
      return deqValue;
    }
  }

  size() {
    return this.len;
  }
}
