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
  test('_.propSet', function() {
    var ob = {};
    _.propSet(ob, 'some.deep.property.in.object', 2);
        strictEqual(ob.some.deep.property.in.object, 2, 'should set deep prop');

  });
  test('merge', function() {
    var test1 = {'val1': { 'val2' : 1}};
    var test2 = {'val1': { 'val3' : 3}, 'str' : 'string'};

    var result = _.merge(test1, test2, {
      'val1.val33' : 'str',
      'noval' : 'val14.ree.foo',
      'val1.val3' : 'val1.val3'
    });
    strictEqual(result.val1.val33, 'string', 'should map objects');
    strictEqual(result.noval, void 0, 'should not map unexist property objects');
    strictEqual(result.val1.val3, 3, 'should map inner property objects');

  });

}());

