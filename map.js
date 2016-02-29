const cb = require('./cb'),
    iterateDW = require('./iterateDW');

module.exports = function map(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var results = [];
    iterateDW(obj, function () {
        results.push(iteratee.apply(null, arguments));
    });
    return results;
};