/**
 * This is a common configuration file to be used in both DEV and production environment.
 * Imported in-built path module from NODE to declare the output path.
 */
const path = require('path');
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
                /**
                 * Rule for handling image files while building
                 */
                test:/\.(png|jpg)/,
                /**
                 * we just have to mention a type property here rest will be taken care off by webpack
                 * we can used this way in webpack5 for images . fonts . icons which are our assets. 
                 * type : 'asset/resource' : means webpack has to emit this file in the output folder & then 
                 * send the url to that file.this will help webpack to understand the import logo statement
                 * in our header component and return URL for that logo.
                 */
                type:'asset/resource'
            }
        ]
    },
    plugins: [
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