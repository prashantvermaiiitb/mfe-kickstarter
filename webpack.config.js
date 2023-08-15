/**
 * Imported in-built path module from NODE to declare the output path.
 */
const path = require('path');
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
    }
};