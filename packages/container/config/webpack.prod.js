const { merge } = require('webpack-merge'); //allows to merge diff webpack files
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); 
const commonConfig = require('./webpack.common'); //import common config 
const packageJson = require('../package.json');  //have webpack take care of shared modules

const domain = process.env.PRODUCTION_DOMAIN; 

const prodConfig = {
    mode: 'production', //minify js files and optimizations and take longer to build 
    output: {
        filename: '[name].[contenthash].js', //all files built will use this as a name template - caching issues
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js` 
            },
            shared: packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
