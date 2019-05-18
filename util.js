const { yellow, blue, red } = require('chalk').default;

const assert = async (f, xs) => {
    xs.forEach(async ([arg, exp], ix) => {
        const res = await f(arg);
        const msg = `[${red(ix)}] result ${blue(res)} should equal ${yellow(exp)}`;
        console.assert(res === exp, msg);
    });
}

module.exports = { assert };