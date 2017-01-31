const find = require('./find');
module.exports = function first(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) {
        n = 1;
    }
    var result = [];
    find(array, function (value) {
        if (result.length !== n && result.length < n) {
            result.push(value);
        } else {
            return true;
        }
    });
    if (result.length && n === 1) {
        result = result.pop();
    }
    return result;
};
