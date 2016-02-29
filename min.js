const forEach = require('./forEach'),
      cb = require('./cb');

module.exports = function (obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity, computed;
    if (iteratee == null || (typeof iteratee == 'number' && typeof obj[0] != 'object') && obj != null) {
      forEach(obj, function(value) {
        if (value != null && value < result) {
          result = value;
        }
      });
    } else {
      iteratee = cb(iteratee, context);
      forEach(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
};