(function() {
  var _ = typeof require == 'function' ? require('..') : window._;

  QUnit.module('Demandware tool');
  test('labmda', function() {
    var testArr = [1, 2, 3, 4, 5];
    strictEqual(_.filter(testArr, '-> $ <= 2').length, 2,
    	'should filter element');
    strictEqual(_.filter(testArr, 'val -> val == 2').length, 1,
    	'should filter element with value name');
    strictEqual(_.filter(testArr, '(val, idx) -> idx == 3').length, 1,
  		'should filter element with second value name works too');
    testArr[5] = {complex: {obj: {value: 1}}};
    strictEqual(_.filter(testArr, ' val -> _.prop(val, "complex.obj.value")').length, 1,
  		'should filter element with underscore in scope');
  });

}());

