const get = require('./get');

module.exports = function property(key) {
    return function propertyInn(obj) {
        return obj === null ? void 0 : get(obj, key);
    };
};