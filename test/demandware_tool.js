(function() {
  var _ = typeof require == 'function' ? require('..') : window._;

  QUnit.module('Demandware tool');

  test('_.set', function(assert) {
    var ob = {};
    _.set(ob, 'some.deep.property.into.object', 2);
    assert.strictEqual(ob.some.deep.property.into.object, 2, 'should set deep prop');

  });
  test('merge', function(assert) {
    var test1 = {val1: {val2: 1}};
    var test2 = {val1: {val3: 3}, str: 'string'};

    var result = _.merge(test1, test2, {
      'val1.val33': 'str',
      noval: 'val14.ree.foo',
      'val1.val3': 'val1.val3'
    });
    assert.strictEqual(result.val1.val33, 'string', 'should map objects');
    assert.strictEqual(result.noval, void 0, 'should not map unexist property objects');
    assert.strictEqual(result.val1.val3, 3, 'should map inner property objects');

  });

}());

