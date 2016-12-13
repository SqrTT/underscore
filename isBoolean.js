// Is a given value a boolean?
module.exports = function(obj) {
  return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
};