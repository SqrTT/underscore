const map = require('./map'),
    property = require('./property');

module.exports = function pluck(obj, key) {
    return map(obj, property(key));
};