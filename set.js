module.exports = function set(obj, key, value) {
    var parts = (key + '').split('.'),
        object = obj,
        part;

    while (parts.length > 1) {
        part = parts.shift();
        if (typeof object === 'object' && object !== null && part in object) {
            object = object[part];
        } else {
            object = object[part] = {};
        }
    }
    object[parts.shift()] = value;
    return obj;
};