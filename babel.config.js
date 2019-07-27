const targets = {
    node: 'current',
};

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets,
            },
        ],
        '@babel/preset-typescript',
    ],
};
