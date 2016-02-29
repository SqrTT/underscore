const restArgs = require('./restArgs'),
    isFunction = require('./isFunction');

// Internal pick helper function to determine if `obj` has key `key`.
var keyInObj = function(value, key, obj) {
    return key in obj;
};

module.exports = restArgs(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (isFunction(iteratee)) {
        if (keys.length > 1) iteratee = require('./optimizeCb')(iteratee, keys[1]);
        keys = require('./allKeys')(obj);
    } else {
        iteratee = keyInObj;
        keys = require('./flatten')(keys, false, false);
        obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
});
