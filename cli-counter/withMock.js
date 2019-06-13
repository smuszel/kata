const test = require('vanad');
const cliCounter = require('./main');

const mockProcess = () => {
    let _handler;
    let out = [];
    return {
        stdin: {
            on: (_, handler) => {
                _handler = handler;
            },
        },
        stdout: {
            write: x => out.push(x),
        },
        get handler() {
            return _handler;
        },
        out,
    };
};

test('Starts with zero', c => {
    const p = mockProcess();
    cliCounter(p);
    p.handler();
    c(p.out, [0]);
});

test('Shows running sum of passed numbers', c => {
    const p = mockProcess();
    cliCounter(p);
    p.handler('123');
    c(p.out, [123]);
    p.handler('7');
    c(p.out, [123, 130]);
    p.handler('10');
    c(p.out, [123, 130, 140]);
});
