//@vanad
const t = require('../util');
const f = require('./f');

t('Has text click me', t => {
    const btn = f();
    const txt = btn && btn.textContent;
    t(txt, 'click me');
});

t('Displays number of times being clicked', t => {
    const btn = f();
    btn.click();
    const txt = btn && btn.textContent;
    t(txt, '1');
    btn.click();
    const txt2 = btn && btn.textContent;
    t(txt2, '2');
});
