const has = require('./has');

module.exports = function (func, hasher) {
    var memoize = function (key) {
            var cache = memoize.cache;
            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
            if (!has(cache, address)) {
                cache[address] = func.apply(this, arguments);
            }
            return cache[address];
        };
    memoize.cache = {};
    return memoize;
};