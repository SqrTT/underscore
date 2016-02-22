function closeIter(iter) {
    if (iter && 'close' in iter) {
        iter.close();
    }
}

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var getLength = require('./property')('length');
var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

module.exports = function iterateDW(collection, callback, firstElfn) {
    var iter,
    keys,
    value,
    result,
    length,
    i,
    count = 0,
    callfirstElfn = firstElfn && function (v) {
        if (firstElfn) {
            callfirstElfn = null;
            firstElfn(v);
            return true;
        }
    };

    if (typeof collection === 'object' && collection !== null) {
        if ('iterator' in collection && typeof collection.iterator === 'function') {
            // suppose that collection is DW collection
            iter = collection.iterator();
            while (iter.hasNext()) {
                value = iter.next();
                if (callfirstElfn && callfirstElfn(value)) {
                    count++;
                    continue;
                }
                result = callback(value, count++, collection);
                if (result === false) {
                    closeIter(iter);
                    return result;
                }
            }
            closeIter(iter);
        } else if ('hasNext' in collection && typeof collection.hasNext === 'function') {
            // suppose that collection is DW iterator
            while (collection.hasNext()) {
                value = collection.next();
                if (callfirstElfn && callfirstElfn(value)) {
                    count++;
                    continue;
                }
                result = callback(value, count++, collection);
                if (result === false) {
                    return result;
                }
            }
            closeIter(collection);
        } else if (isArrayLike(collection)) {
            // suppose that collection is array
            for (i = 0, length = collection.length; i < length; i++) {
                if (callfirstElfn && callfirstElfn(collection[i])) {
                    continue;
                }
                result = callback(collection[i], i, collection);
                if (result === false) {
                    return result;
                }
            }
        } else {
            // suppose that collection is plain object
            keys = require('./keys')(collection);
            for (i = 0, length = keys.length; i < length; i++) {
                if (callfirstElfn && callfirstElfn(collection[keys[i]])) {
                    continue;
                }
                result = callback(collection[keys[i]], keys[i], collection);
                if (result === false) {
                    return result;
                }
            }
        }
    }
};