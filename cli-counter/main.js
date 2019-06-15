const bufferToNumber = d => {
    const n = d && d.toString();
    return +n || 0;
};

const formatState = i => {
    return i.toString() + '\n';
};

const isNumberCastable = str => {
    return !isNaN(str);
}

module.exports = process => {
    let i = 0;
    process.stdin.on('data', d => {
        if (isNumberCastable(d)) {
            i += bufferToNumber(d);
            process.stdout.write(formatState(i));
        }
    });
};
