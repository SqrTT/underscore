
module.exports = function(attrs) {
    attrs = require('./extendOwn')({}, attrs);
    return function(obj) {
        return require('./isMatch')(obj, attrs);
    };
};