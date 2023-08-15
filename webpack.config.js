/**
 * Imported in-built path module from NODE to declare the output path.
 */
const path = require('path');
// for extracting out css in separate Css file during build process
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// for generating html template with style & JS links during build
const HTMLWebpackPlugin = require('html-webpack-plugin');
// for cleaning up dist folder every time web runs the build 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    //from which file webpack should start the bundling process.
    entry: './index.js',
    output: {
        //What should be the name of output JS file after bundling process.
        filename: 'mybundle.js',
        /**
         * location to which this generated bundle should be copied or present
         * In the entry we have specified a relative path but for the output 
         * we have to specify an ABSOLUTE path so for that we have to import the path module.
         * we will using resolve function, this will join 2 segment of path and creates an 
         * absolute path.
         * 1st param : directory name 
         * 2nd param : output folder where to place the bundle
         * ! If we will not be importing any code from header or paragraph then mybundle will be having 
         * ! only code from the index JS file so we have to export header & paragraph & import them in the 
         * ! index.js file then do rebundle.  After this code of header and paragraph are included in this bundle. 
         */
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    /**
                     * babel is a transpiler that will convert modern JS code into standard JS code that 
                     * browser can understand.
                     * preset-react -> transpile react code to ES5
                     * preset-env -> transpile ES6/7+ all modernJS  to ES5
                     */
                    loader: 'babel-loader',
                    /**
                     * ! we chould have created .babelrc file instead for this configuration as well
                     * ! and place these presets[] in that.
                     */
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                /**
                 * css-loader -> Transpile CSS code from JS to CSS 
                 * MiniCssExtractPlugin.loader --> Get the css code and create a new file out of it
                 */
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        /**
         * setting for allowing mystyles.css file to be created.
         */
        new MiniCssExtractPlugin({
            filename: 'mystyles.css'
        }),
        new HTMLWebpackPlugin({
            /**
             * New template needs to be created from index.html file
             * !we can delete the links for styles / js from the original one 
             */
            template: './index.html'
        }),
        // cleaning webpack plugin to clear the dist folder during each build
        new CleanWebpackPlugin()
    ]
};