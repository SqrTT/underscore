module.exports = function range(start, stop, step) {
    if (stop == null) {
        stop = start || 0;
        start = 0;
    }
    if (!step) {
        step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var rng = new Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
        rng[idx] = start;
    }

    return rng;
};