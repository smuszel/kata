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
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
    ],
};
