const { merge } = require('webpack-merge'); //allows to merge diff webpack files
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json'); 
const commonConfig = require('./webpack.common'); //import common config

const prodConfig = {
    mode: 'production', //minify js files and optimizations and take longer to build
    output: {
        filename: '[name].[contenthash].js', //all files built will use this as a name template - caching issues
        publicPath: '/marketing/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies,
        })
    ]
}


module.exports = merge(commonConfig, prodConfig);