const restArgs = require('./restArgs');
const uniq = require('./uniq');
const flatten = require('./flatten');

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
module.exports = restArgs(function(arrays) {
    return uniq(flatten(arrays, true, true));
});