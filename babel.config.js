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
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
    ],
};
