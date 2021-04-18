const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = env => {
    const configs = merge(common(env), {
        mode: 'development',
        devServer: {
            historyApiFallback: true,
            overlay: true,
            open: false,
            watchContentBase: true,
            contentBase: path.join(__dirname, 'dist'),
        },
        target: 'web',
    });
    configs.module.rules[2].use[2].options.modules.localIdentName = '[local]__[hash:base64:4]';
    return configs;
};
