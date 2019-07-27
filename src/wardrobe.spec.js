import test from 'ava';
import { fit } from './wardrobe';

test('With 100 size can fit 100 in 1 way', t => {
    t.deepEqual(fit(100, [100]), [[100]]);
});

test('With 50 size can fit 100 in 1 way', t => {
    t.deepEqual(fit(100, [50]), [[50, 50]]);
});

test('With 25 size can fit 100 in 1 way', t => {
    t.deepEqual(fit(100, [25]), [[25, 25, 25, 25]]);
});

// test('With 27, 73 size can fit 100 in 1 way', t => {
//     t.deepEqual(fit(100, [27, 73]), [[27, 73]]);
// });

// test('With 1, 99, 50 size can fit 150 in 2 way', t => {
//     t.deepEqual(fit(100, [1, 99, 50]), [[1, 99, 50], [50, 50, 50]]);
// });
