

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var arr = this._storage.get(index);

  if (arr) {
    arr.push(tuple);
    this._storage.set(index, arr);
  } else {
    var access = this._storage.set(index, []);
    var arr = this._storage.get(index);
    arr.push(tuple);
    this._storage.set(index, arr);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var access = this._storage.get(index);
  var value;
  access.forEach(function(elem) {
    if (elem[0] === k) {
      value = elem[1];
    }
  });
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


