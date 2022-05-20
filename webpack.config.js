const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
            {test: /\.(jpg|png|svg)$/, exclude: /node_modules/, use: ['file-loader']},
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        port: 3000,
        historyApiFallback: true
    }
};
