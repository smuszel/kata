const cnc = require('concordance');
const chalk = require('chalk').default;

const stackTraceParser = stackTrace => {
    const chunks = stackTrace.split(/\n/g);
    const caller = chunks[2].split('at ')[1].split(':');
    const callerFilename = caller[0] + ':' + caller[1];
    const callerLine = +caller[2];

    return { callerFilename, callerLine };
};

module.exports = (title, t) => {
    const comparator = (a, b) => {
        const pass = cnc.compare(a, b).pass;

        if (!pass) {
            const diff = cnc.diff(a, b);
            const { callerLine } = stackTraceParser(new Error().stack);
            const out = JSON.stringify({ callerLine, diff });

            console.log(out);
        }
    };

    t(comparator);
};

// const fs = require('fs');
// const src = fs
//     .readFileSync(ss[0] + ':' + ss[1])
//     .toString()
//     .split('\n');
// const startIx = src.findIndex(line => line.includes(title));
// const endIx =
//     src.slice(startIx, src.length).findIndex(line => {
//         return line === '});\r';
//     }) + startIx;
// const lines = src.slice(startIx, endIx + 1);
// const failIx = +ss[2] - startIx - 1;
// console.log(failIx);
// lines[failIx] = chalk.bgRedBright(lines[failIx]);
// console.log('\n');
// console.log(lines.join('\n'));
// console.log('\n');
// console.log(diff);
