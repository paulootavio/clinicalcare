var path = require('path');

module.exports = {
    entry: '.home.jsx',
    output: {
        path : path.resolve(),
        filename: 'transpiled.js'
    },
    module: {
        loaders: [ 
            {
            test: /\.jsx?$/,
            loaders: 'babel-loader',
            exclude:  /node-modules/,
            query: {
                presets: ['es2015','react']
            }
        }]
    }
}