const forEach = require('./forEach'),
    set = require('./set'),
    get = require('./get');

module.exports = function merge(dst, src, maps) {
    dst = dst || {};
    src = src || {};
    var value;

    forEach(maps, function mergeInn(s, d) {
        value = get(src, s);
        if (typeof value !== 'undefined') {
            set(dst, d, value);
        }
    });
    return dst;
};