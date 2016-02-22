const _keys = require('./keys');
module.exports = function values(obj) {
    const keys = _keys(obj),
        length = keys.length,
        value = new Array(length);

    for (var i = 0; i < length; i++) {
        value[i] = obj[keys[i]];
    }
    return value;
};