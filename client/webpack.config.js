const path = require('path');
const TsConfigPathsPlugins = require('tsconfig-paths-webpack-plugin');

module.exports = {
    target: 'web',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist') },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        plugins: [
            new TsConfigPathsPlugins()
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    }
                ]
            }
        ]
    }
};
