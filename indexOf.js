const getLength = require('./getLength');
const cb = require('./cb');
const isNumber = require('./isNumber');

const _isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
};

// Generator function to create the findIndex and findLastIndex functions
var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
        predicate = cb(predicate, context);
        var length = getLength(array);
        var index = dir > 0 ? 0 : length - 1;
        for (; index >= 0 && index < length; index += dir) {
            if (predicate(array[index], index, array)) return index;
        }
        return -1;
    };
};

  // Returns the first index on an array-like that passes a predicate test
const findIndex = createPredicateIndexFinder(1);
 

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
const sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
       var mid = Math.floor((low + high) / 2);
       if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
};

  // Generator function to create the indexOf and lastIndexOf functions
var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
        var i = 0, length = getLength(array);
        if (typeof idx == 'number') {
            if (dir > 0) {
                i = idx >= 0 ? idx : Math.max(idx + length, i);
            } else {
                length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
            }
        } else if (sortedIndex && idx && length) {
            idx = sortedIndex(array, item);
            return array[idx] === item ? idx : -1;
        }
        if (item !== item) {
            idx = predicateFind(slice.call(array, i, length), _isNaN);
            return idx >= 0 ? idx + i : -1;
        }
        for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
            if (array[idx] === item) return idx;
        }
        return -1;
    };
};

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
  module.exports = createIndexFinder(1, findIndex, sortedIndex);