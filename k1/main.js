const fs = require('fs');

module.exports = async str => {
    const buff = await fs.promises.readFile(str).catch(() => 'no file');
    const txt = buff.toString();

    if (!isNaN(txt)) {
        return 1 + +txt;
    } else if (txt.split(' ').every(x => !isNaN(x))) {
        return txt.split(' ').reduce((acc, v) => acc + +v, 1);
    } else if (buff.readBigUInt64LE) {
        return 'nan'
    } else {
        return txt
    }
}