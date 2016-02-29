
const cb = require('./cb'),
    forEach = require('./forEach');

module.exports = function filter(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    forEach(obj, function filterInn(value, index, list) {
        if (predicate(value, index, list)) {
            results.push(value);
        }
    });
    return results;
};