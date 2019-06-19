const jsd = require('jsdom');
const test = require('vanad');
const f = require('../src');

const dom = new jsd.JSDOM();
global['window'] = dom.window;
global['document'] = dom.window.document;

test('Has text click me', c => {
    const btn = f();
    const txt = btn && btn.textContent;
    c(txt, 'click me');
});

test('Displays number of times being clicked', c => {
    const btn = f();
    btn.click();
    const txt = btn && btn.textContent;
    c(txt, '1');
    btn.click();
    const txt2 = btn && btn.textContent;
    c(txt2, '2');
}, 2);
