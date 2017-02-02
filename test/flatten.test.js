const flatten = require('../src/');
const assert  = require('assert');

describe('Flatten tests', () => {
  it('only works for arrays', () => {
    assert.deepEqual(flatten({ 'hello': 'world' }), undefined);
    assert.deepEqual(flatten('hello'), undefined);
    assert.deepEqual(flatten(12345), undefined);
    assert.deepEqual(flatten(true), undefined);
  });
  
  //not much point to this but eh, idc
  it('should work for empty arrays', () => {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([[]]), []);
  });
  
  it('works with flat arrays', () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
  
  it('flattens nested arrays', () => {
    assert.deepEqual(
      flatten([1, [2, 3, [4, 5, [6], [[7]]], 8], 9]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
    assert.deepEqual(flatten([[[[[[[1]]]]]]]), [1]);
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
  });
  
  it('does not modify the existing array', () => {
    const initial = [[1, 2], 3];
    flatten(initial);
    assert.deepEqual(initial, [[1, 2], 3]);
  });
});
