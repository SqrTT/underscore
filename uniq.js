// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
const getLength = require('./getLength');
const contains = require('./includes');
const cb = require('./cb');
const isBoolean = require('./isBoolean');

module.exports = function(array, isSorted, iteratee, context) {
    if (!isBoolean(isSorted)) {
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
        var value = array[i],
            computed = iteratee ? iteratee(value, i, array) : value;
        if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
        } else if (iteratee) {
        if (!contains(seen, computed)) {
            seen.push(computed);
            result.push(value);
        }
        } else if (!contains(result, value)) {
        result.push(value);
        }
    }
    return result;
};