const t = require('../util');

const badAdd = (x, y) => {
    return x + y + Math.random();
};

t('Addition is comutative', t => {
    t(1, 1);
    t(badAdd(1, 2), badAdd(2, 1));
    t(1, 2);
});

t('Add 2 values', t => {
    t(badAdd(1, 2), 3);
});
