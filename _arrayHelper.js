const shallowProperty = require('./_shallowProperty');
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
const getLength = shallowProperty('length');

// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
exports.getLength = getLength;
exports.isArrayLike = function(collection) {
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};