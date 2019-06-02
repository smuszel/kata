module.exports = stackTrace => {
    const chunks = stackTrace.split(/\n/g);
    const callerChunk = chunks[2];
    const [_, filename, __, ln, col] = callerChunk.match(/\\((\w|\.)+):(\d+):(\d+)/);
    const line = +ln;
    const column = +col;

    return { filename, line, column };
};
