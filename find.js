const cb = require('./cb'),
    iterateDW = require('./iterateDW');

module.exports = function find(obj, predicate, context) {
    var result;
    predicate = cb(predicate, context);
    iterateDW(obj, function(element, index, collection) {
        if (predicate(element, index, collection)) {
          result = element;
          return false;
        }
    });
    return result;
};