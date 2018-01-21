

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  var isFound = false;

  if (!bucket) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    bucket.forEach(function(elem) {
      if (elem[0] === k) {
        isFound = true;
      }
    });
    if (isFound) {
      for (var i = 0; i < bucket.length; ) {
        if (bucket[i][0] === k) {
          bucket[i][1] = v;
          this._storage.set(index, bucket);
          break;
        }
      } 
    } else {
      this._storage.get(index);
      bucket.push(tuple);
      this._storage.set(index, bucket);
    }

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var value;
  for (var i = 0; i < bucket.length; i += 1) {
    if (bucket[i][0] === k) {
      value = bucket[i][1];
      break;
    }
  }

  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var access = this._storage.get(index);
  access.forEach(function(elem) {
    if (elem[0] === k) {
      access.splice(elem, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


