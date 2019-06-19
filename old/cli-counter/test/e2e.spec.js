const test = require('vanad');
const cp = require('child_process');

const renderStd = std => {
    return std
        .map(x => x.toString())
        .join('')
        .split('\n');
};

test('Does not close immediately', c => {
    const p = cp.spawn('node', ['../src/index.js'], { cwd: __dirname });
    let closed = false;
    p.on('close', () => {
        closed = true;
    });

    setTimeout(() => {
        c(closed, false);
        p.kill();
    }, 1000);
});

test('Does not log anything', c => {
    const p = cp.spawn('node', ['../src/index.js'], { cwd: __dirname });
    let out = false;
    p.stdout.on('data', () => {
        out = true;
    });

    setTimeout(() => {
        c(out, false);
        p.kill();
    }, 1000);
});

test('When pushed numbers shows running sum', c => {
    const p = cp.spawn('node', ['../src/index.js'], { cwd: __dirname });
    let std = [];
    p.stdout.on('data', d => {
        std.push(d);
    });

    p.stdin.write('1');

    setTimeout(() => {
        c(renderStd(std), ['1', '']);
        p.stdin.write('10');
        setTimeout(() => {
            c(renderStd(std), ['1', '11', '']);
            p.kill();
        }, 100);
    }, 100);
}, 2);

test('Adds only correct input', c => {
    const p = cp.spawn('node', ['../src/index.js'], { cwd: __dirname });
    let std = [];
    p.stdout.on('data', d => {
        std.push(d);
    });

    p.stdin.write('1');

    setTimeout(() => {
        c(renderStd(std), ['1', '']);
        p.stdin.write('a');
        setTimeout(() => {
            c(renderStd(std), ['1', '']);
            p.kill();
        }, 100);
    }, 100);
}, 2);
