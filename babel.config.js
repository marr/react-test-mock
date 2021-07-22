module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'auto',
                targets: { browsers: ['last 2 Chrome versions'] }
            }
        ],
        '@babel/preset-react'
    ]
};