/**
 * Imported in-built path module from NODE to declare the output path.
 */
const path = require('path');

// to combine multiple configuration into a single configuration file
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config') // reference to common configration

// merging the dev and common webopack configuration
module.exports = merge(common, {
    mode: 'development', // this is a development environment
    devServer: {
        port: 9000, // at which port this server will serve the application
        static: {  //directory path that will be served on the PORT mentioned above
            directory: path.resolve(__dirname, './dist') // specify the path for the bundle output i.e. dist folder
        },
        /**
         * By default webpack dev server serves the files from the memory but if we want dev server to write
         * to disk and serve from there that could also be done using below property 'devMiddleware'
         */
        devMiddleware: {
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                /**
                 * for putting the css inline in DOM 
                 * this should be used for critical css. this is good for DEV environment
                 */
                use: ['style-loader', 'css-loader']
            },
            {
                /**
                 * for handling scss file in the code, you need sass-loader in front
                 * then remaining loader chain will work fine. good for dev environment
                 */
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
});