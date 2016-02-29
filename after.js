module.exports = function after(times, func) {
    return function afterInn() {
        if (--times < 1) {
            return func.apply(this, arguments);
        }
    };
};