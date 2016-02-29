module.exports = function has(obj, key) {
    return obj !== null && typeof obj !== 'undefined' && key in obj && Object.prototype.hasOwnProperty.call(obj, key);
};