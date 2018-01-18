class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count += 1;
  }

  pop() {
    if (this.count !== 0) {
      var popValue = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count -= 1;
      return popValue;
    }
  }

  size() {
    return this.count;
  }
}

