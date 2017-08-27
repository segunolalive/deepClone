const assert = require('assert');

const deepClone = require('./deepClone');


let a = { a: 1, b: 2, c: [1, 2, 3, { e: 5, f: [{ g: 1}, { h: 8}], i: 9}], j: 10}
let b = [1, 2, 3, { a: 1, b: 2, c: ['e', { f: 6}], g: 7}, 4]

assert.deepEqual(deepClone(a), a);
assert.notEqual(deepClone(a), a);
assert.deepEqual(deepClone(b), b);
assert.notEqual(deepClone(b), b);

console.log('All tests passed');
