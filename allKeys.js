module.exports = function allKeys(obj) {
    const type = typeof obj;
    if (!(type === 'function' || type === 'object' && !!obj)) {
        return [];
    }
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
};