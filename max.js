const forEach = require('./forEach');

module.exports = function max(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity, computed;
    if (iteratee == null || (typeof iteratee == 'number' && typeof obj[0] != 'object') && obj != null) {
        forEach(obj, function(value) {
            if (value > result) {
                result = value;
            }
        });
    } else {
        iteratee = require('./cb')(iteratee, context);
        forEach(obj, function(v, index, list) {
            computed = iteratee(v, index, list);
            if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                result = v;
                lastComputed = computed;
            }
        });
    }
    return result;
};