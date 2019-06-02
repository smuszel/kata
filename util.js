const findCaller = require('./findCaller');
const getCaller = require('./getCaller');
const jsdom = require('jsdom');
const cnc = require('concordance');
const chalk = require('chalk').default;

/** @type {Testcase[]} */
const runningTests = [];

/** @param {Caller} caller */
const findTestcase = caller => {
    let diff = Infinity;
    /** @type {Testcase} */
    let testcase;

    runningTests.forEach(test => {
        const currDiff = caller.line - test.caller.line;
        if (currDiff > 0 && currDiff < diff) {
            diff = currDiff;
            testcase = test;
        }
    });

    //@ts-ignore
    return testcase;
};

// @ts-ignore
Reflect.defineProperty(global, 'window', {
    get: () => {
        return findTestcase(findCaller(new Error().stack, 'test.js')).window;
    },
});

// @ts-ignore
Reflect.defineProperty(global, 'document', {
    get: () => {
        return findTestcase(findCaller(new Error().stack, 'test.js')).document;
    },
});

const comparator = (a, b) => {
    const pass = cnc.compare(a, b).pass;

    if (!pass) {
        const diff = cnc.diff(a, b);
        const { line } = getCaller(new Error().stack);
        const out = JSON.stringify({ callerLine: line, diff });

        console.log(out);
    }
};

module.exports = (title, t) => {
    const dom = new jsdom.JSDOM();
    const caller = getCaller(new Error().stack);
    const window = dom.window;
    const document = dom.window.document;
    runningTests.push({ caller, window, document });
    setImmediate(() => {
        t(comparator);
    });
};
