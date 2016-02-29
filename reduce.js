const iterateDW = require('./iterateDW'),
    optimizeCb = require('./optimizeCb');


module.exports = function reduce(obj, iteratee, memo, context) {
    iteratee = optimizeCb(iteratee, context, 4);
    function initial(value) {
        memo = value;
    }
    if (typeof memo === 'undefined') {
        if (!obj) {
            return void 0;
        }
        iterateDW(obj, function reduceInn(value, key, collection) {
            memo = iteratee(memo, value, key, collection);
        }, initial);
    } else {
        iterateDW(obj, function reduceInn2(value, key, collection) {
            memo = iteratee(memo, value, key, collection);
        });
    }
    return memo;
};