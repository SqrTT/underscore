const isArrayLike = require('./_arrayHelper').isArrayLike;
const values = require('./values');
const indexOf = require('./indexOf');

// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
module.exports = function(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj)) obj = values(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return indexOf(obj, item, fromIndex) >= 0;
};