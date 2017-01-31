// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
const isArrayLike = require('./isArrayLike');
const indexOf = require('./indexOf');

module.exports = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = require('./values')(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return indexOf(obj, item, fromIndex) >= 0;
};