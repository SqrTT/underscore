
module.exports = function cb(value, context, argCount) {
    if (value === null || typeof value === 'undefined') {
        return require('./identity');
    }
    if (typeof value === 'function') {
        return require('./optimizeCb')(value, context, argCount);
    }
    const type = typeof value;
    if (type === 'function' || type === 'object' && !!value) {
        return require('./matcher')(value);
    }
    return require('./property')(value);
};