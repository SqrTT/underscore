module.exports = function (val) {
    return Object.prototype.toString.call(val) === '[object Function]';
};