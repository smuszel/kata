const f = require('./main');

const res = [
    f('a'),
    f('b'),
    f('c'),
    f('d'),
]

const exp = [
    'no file',
    'nan',
    2,
    5
];

res.forEach((r, ix) => {
   console.assert(r === exp[ix])
})