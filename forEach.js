const iterateDW = require('./iterateDW'),
    optimizeCb = require('./optimizeCb');

module.exports = function forEach(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    iterateDW(obj, function forEachInn() {
        iteratee.apply(null, arguments);
    });
    return obj;
};