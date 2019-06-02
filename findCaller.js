module.exports = (stackTrace, name) => {
    const chunks = stackTrace.split('\n');
    const chunk = chunks.find(c => c.includes(name));
    const [_, filename, __, ln, col] = chunk.match(/\\((\w|\.)+):(\d+):(\d+)/);
    const line = +ln;
    const column = +col;

    return { filename, line, column };
};
