const f = require('./main');

const res = Promise.all([
    f('a'),
    f('b'),
    f('c'),
    f('d'),
]);

const exp = [
    'no file',
    'nan',
    2,
    5
];

res.then(rs => rs.forEach((r, ix) => {
   console.assert(r === exp[ix], `[${ix}] ${r} should equal ${exp[ix]}`)
}))