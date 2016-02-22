module.exports = function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function composeInn() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) {
            result = args[i].call(this, result);
        }
        return result;
    };
};