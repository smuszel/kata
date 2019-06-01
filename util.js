const { isDeepStrictEqual } = require('util');

module.exports = (title, t) => {
    let i = 0;
    const comparator = (a, b) => {
        const pass = isDeepStrictEqual(a, b);

        if (!pass) {
            const cnc = require('concordance');
            const chalk = require('chalk').default;
            const diff = cnc.diff(a, b);
            console.log(chalk.red(title), `[${i}]`);
            console.log(diff);
        }
        i++;
    };

    t(comparator);
};
