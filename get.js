module.exports = function get(object, path, defaults) {
    var parts = (path + '').split('.'),
        part;

    while (parts.length) {
        part = parts.shift();
        if (typeof object === 'object' && object !== null && part in object) {
            object = object[part];
        } else if (typeof object === 'string') {
            object = object[part];
            break;
        } else {
            object = defaults;
            break;
        }
    }
    return object;
};