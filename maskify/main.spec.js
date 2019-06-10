const f = require('./main');
const test = require('vanad');

test('Does not change string under max length', c => {
    c(f(''), '');
    c(f('aaaa'), 'aaaa');
});

test('Above limit hides the rest', c => {
    c(f('12345'), '#2345');
    c(f('12345ab'), '###45ab');
});
