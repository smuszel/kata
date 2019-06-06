// @vanad
const t = require('vanad');
const f = require('./f');

t('Ages regular items', t => {
    t(f({ type: 'regular', sellIn: 10, quality: 10 }), { type: 'regular', sellIn: 9, quality: 9 });
    t(f({ type: 'regular', sellIn: 1, quality: 2 }), { type: 'regular', sellIn: 0, quality: 1 });
});

t('Quality and sellin cannot drop below zero', t => {
    t(f({ type: 'regular', sellIn: 0, quality: 0 }), { type: 'regular', sellIn: 0, quality: 0 });
    t(f({ type: 'regular', sellIn: 11, quality: 0 }), { type: 'regular', sellIn: 10, quality: 0 });
});

t('Quality degardes faster when pass the sell in', t => {
    t(f({ type: 'regular', sellIn: 0, quality: 10 }), { type: 'regular', sellIn: 0, quality: 8 });
    t(f({ type: 'regular', sellIn: 0, quality: 1 }), { type: 'regular', sellIn: 0, quality: 0 });
});
