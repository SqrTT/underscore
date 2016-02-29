module.exports = function keys(obj) {
    const type = typeof obj;
    if (!(type === 'function' || type === 'object' && !!obj)) {
        return [];
    }
    return Object.keys(obj);
};