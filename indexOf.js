const createIndexFinder = require('./_createIndexFinder');
const findIndex = require('./findIndex');
const sortedIndex = require('./sortedIndex');

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
module.exports = createIndexFinder(1, findIndex, sortedIndex);