
const cb = require('./cb'),
    find = require('./find');

module.exports = function some(obj, predicate, context) {
    predicate = cb(predicate, context);
    var result = false;
    find(obj, function(value, key) {
        if (predicate(value, key, obj)) {
            result = true;
            return true;
        }
    }, context);
    return result;
};