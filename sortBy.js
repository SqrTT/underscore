const cb = require('./cb'),
      pluck = require('./pluck'),
      map = require('./map');

module.exports = function (obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return pluck(map(obj, function (value, key, list) {
        return {
            value: value,
            index: index++,
            criteria: iteratee(value, key, list)
        };
    }).sort(function (left, right) {
        var a = left.criteria,
            b = right.criteria;
        if (a !== b) {
            if (a > b || a === void 0) { return 1; }
            if (a < b || b === void 0) { return -1; }
        }
        return left.index - right.index;
    }), 'value');
};