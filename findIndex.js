const cb = require('./cb');
const getLength = require('./getLength');


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

// Returns the first index on an array-like that passes a predicate test.
module.exports = createPredicateIndexFinder(1);