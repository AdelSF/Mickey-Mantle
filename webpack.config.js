const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const DIST_DIR = path.resolve(__dirname, "../dist");

module.exports = (env) => {
    return {
        entry: "./src/index.js",
        output: {
            path: DIST_DIR,
            filename: 'bundle.js',
            publicPath: '/'
        },
    
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_mudules/,
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', { targets: { browsers: ['last 4 versions']}}],
                            {
                                "plugins": [[
                                    "babel-plugin-styled-components",
                                    {
                                        "displayName": true,
                                        "ssr": false
                                    }
                                ]]
                            }
                        ]
                    }
                }
            ]
        },
    
        plugins: [
            new HtmlWebpackPlugin({
                filename: DIST_DIR + '/index.html',
                cache: true,
                template: './index.html'
            })
        ],
        devServer: {
            hot: true,
            historyApiFallback: true,
        },
        mode: env.production ? 'production' : 'development'
    }
}