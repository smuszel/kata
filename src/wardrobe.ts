const sum = seq =>
    Object.keys(seq)
        .map(k => seq[k] * +k)
        .reduce((a, b) => a + b, 0);

const rend = res =>
    Object.keys(res)
        .flatMap(k =>
            (k + ' ')
                .repeat(res[k])
                .split(' ')
                .filter(Boolean)
                .map(x => +x),
        )
        .sort((a, b) => a - b);

export const fit = (len: number, sizes: number[]): number[][] => {
    const res = [];
    let curr = [];
    let toAdd = [];
    const fitSeq = s => seq => {
        const nextSeq = { ...seq, [s]: seq[s] + 1 };
        const nextLen = sum(nextSeq);

        if (nextLen === len) {
            res.push(nextSeq);
        } else if (nextLen < len) {
            toAdd.push(nextSeq);
        }
    };

    const run = () => {
        sizes.forEach(s => {
            const fitSeq_ = fitSeq(s);
            curr.forEach(fitSeq_);
        });
    };

    const init = sizes.map(k => ({ [k]: 0 })).reduce((a, b) => ({ ...a, ...b }), {});

    sizes.forEach(s => fitSeq(s)(init));

    while (toAdd.length !== 0) {
        curr = toAdd;
        toAdd = [];
        debugger;
        run();
    }

    return res.map(rend);
};
fit(100, [50, 50]);
