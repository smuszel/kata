const test = require('vanad');
const f = require('../src/main');

test('Ages regular items', c => {
    c(f({ type: 'regular', sellIn: 10, quality: 10 }), {
        type: 'regular',
        sellIn: 9,
        quality: 9,
    });
    c(f({ type: 'regular', sellIn: 1, quality: 2 }), {
        type: 'regular',
        sellIn: 0,
        quality: 1,
    });
}, 2);

test('Quality and sellin cannot drop below zero', c => {
    c(f({ type: 'regular', sellIn: 0, quality: 1 }), {
        type: 'regular',
        sellIn: 0,
        quality: 0,
    });
    c(f({ type: 'regular', sellIn: 11, quality: 1 }), {
        type: 'regular',
        sellIn: 10,
        quality: 0,
    });
}, 2);

test('Quality degardes faster when past the sell in', c => {
    c(f({ type: 'regular', sellIn: 0, quality: 10 }), {
        type: 'regular',
        sellIn: 0,
        quality: 8,
    });
    c(f({ type: 'regular', sellIn: 0, quality: 1 }), {
        type: 'regular',
        sellIn: 0,
        quality: 0,
    });
}, 2);

test('Quality degrades twice as fast for hot items', c => {
    c(f({ type: 'hot', sellIn: 0, quality: 6 }), { type: 'hot', sellIn: 0, quality: 2 });
    c(f({ type: 'hot', sellIn: 0, quality: 3 }), { type: 'hot', sellIn: 0, quality: 0 });
    c(f({ type: 'hot', sellIn: 10, quality: 6 }), { type: 'hot', sellIn: 9, quality: 4 });
}, 3);

test('Items convert to trash when item quality is 0', c => {
    c(f({ type: 'hot', sellIn: 0, quality: 0 }), {
        type: 'trash',
        sellIn: 0,
        quality: 0,
    });
    c(f({ type: 'regular', sellIn: 10, quality: 0 }), {
        type: 'trash',
        sellIn: 0,
        quality: 0,
    });
}, 2);
