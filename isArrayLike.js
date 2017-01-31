const getLength = require('./getLength');
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

module.exports = function(collection) {
    const length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};