module.exports = function optimizeCb(func, context, argCount) {
    if (context === void 0) {
        return func;
    }
    switch (argCount === null ? 3 : argCount) {
    case 1:
        return function (value) {
            return func.call(context, value);
        };
        // The 2-parameter case has been omitted only because no current consumers
        // made use of it.
    case 3:
        return function (value, index, collection) {
            return func.call(context, value, index, collection);
        };
    case 4:
        return function (accumulator, value, index, collection) {
            return func.call(context, accumulator, value, index, collection);
        };
    }
    return function () {
        return func.apply(context, arguments);
    };
};
