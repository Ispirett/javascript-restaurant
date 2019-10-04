const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']

            }
        ]
    }

};

