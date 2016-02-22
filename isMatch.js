const keysFn = require('./keys');

module.exports = function isMatch(object, attrs) {
    const keys = keysFn(attrs),
        length = keys.length;
    
    if (!object) {
        return !length;
    }
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) {
            return false;
        }
    }
    return true;
};