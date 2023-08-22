module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, //when we import an files that ends with . or js be process by babel
                exclude: /node_modules/, //exclude node_modules
                use: {
                    loader: 'babel-loader', //use babel-loader
                    options: {
                        presets: ['@babel/preset-react' ,'@babel/preset-env'],//use preset-env
                        plugins: ['@babel/plugin-transform-runtime'] //adds code to enable features like async/await syntax 
                    }
                }
            }
        ]
    }

}