const f = require('./main');
const { assert } = require('../util');

assert(f, [
    ['a', 'no file'],
    ['b', 'nan'],
    ['c', 2],
    ['d', 5],
]);