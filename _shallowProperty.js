module.exports = function(key) {
  return function(obj) {
    return obj != null && key in obj ? obj[key] : void 0;
  };
};