const limit = 4;
module.exports = str => {
    const maskEndIx = Math.max(str.length - limit, 0);
    return '#'.repeat(maskEndIx) + str.slice(maskEndIx);
};
