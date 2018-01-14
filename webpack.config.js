const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "./src/styles/"),
                    "/node_modules/"
                ],
                use: ['style-loader', 'css-loader']
            }

        ]
    }
};