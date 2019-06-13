const bufferToNumber = d => {
    const n = d && d.toString();
    return +n || 0;
};

const formatState = i => {
    return i.toString() + '\n';
};

module.exports = process => {
    let i = 0;
    process.stdin.on('data', d => {
        i += bufferToNumber(d);
        process.stdout.write(formatState(i));
    });
};
