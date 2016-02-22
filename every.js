const find = require('./find'),
    cb = require('./cb');

module.exports = function every(obj, predicate, context) {
    predicate = cb(predicate, context);
    var result = true;
    find(obj, function everyInn(value, key) {
        if (!predicate(value, key, obj)) {
            result = false;
            return true;
        }
    }, context);
    return result;
};