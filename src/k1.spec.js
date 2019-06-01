const t = require('../util');

t('Adding 2 values', t => {
    t(1 + 2, 3);
    t(1 + 3, 4);
    t(1 + 2, 4);
    t(2 + 3, 5);
});
