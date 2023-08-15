> container folder

Folder corresponds to the container APP that we have created.
This will have all the files and node_modules alongwith dist folder with generated bundle.

> npx webpack

This command is for executing webpack module. NPX is node package execute.

>npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-lo
ader

After including react we have to tell webpack how to handle JSX and convert that into a JS bundle 
that browsers can understand for that we need to have appropriate loaders in the webpack configuration.

>npm install --save-dev mini-css-extract-plugin style-loader css-loader

To Handle Css import in the JS file we need above loaders.
css-loader -> to allow import CSS in the react JS file 
style-loader -> to understand the imported CSS in JS and insert that in DOM tree. This will help in putting styles inline.
mini-css-extract-plugin -> to extract the css and place it in a css file 

> npm install --save-dev html-webpack-plugin 

This is needed to create HTML template  on the fly during the build process and place the links 
for generated styles and Javascript bundles.

> ['style-loader','css-loader']
> 
For Adding CSS styles inline to the HTML to improve performance gain for critical css.

> npm install --save-dev webpack-clean

Clean-up dist folder everytime webpack builds 

> npm install --save-dev sass sass-loader

These are included to have SCSS file working in our project

To support different build files for different build environment we can be 2 webpack files 
1. webpack.dev.config.js
2. webpack.prod.config.js

Next we have to upgrade the configuraion file for the package json for the build commands
>"build": "webpack --config webpack.prod.config.js"

We are asking NPM to run webpack command using production configuration file. Copy this entire script
and jsut add :dev to the script and update the configuration file name to webpack.de.config.js

> npm install --save-dev webpack-dev-server 
In the development environment we will be needing a development server through which we will be hosting 
our application in development environment for this install webpack-dev-server. And also we should update 
Dev build command to accomodate this change.

>"build:dev": "webpack serve --config webpack.dev.config.js --hot" 

1. We will be adding serve in the command so that application will be served at specific port 
& --hot to enable hot module replacement to see any change in the file in realtime

2. Webpack dev server serves file from memory but if we want webpack dev server to write file to dist 
and serve from there we can do that as well.

3. As writing the files to the disk is a heavy process we can remove the usage of certain plugins in the dev build like extract css  plugin and use style-loader instead for having styles inline.

4. There is lot many configuration that's common in webpack, so let's rename the webpack.configuration to webpack.common.config.js to have the common configurations. we can clean up the webpack.dev config file for common files and plugins as there is no need for the plugin in the Dev mode.

5. This cleanup is also done for the production file as well.

>npm install --save-dev webpack-merge

This npm module is used for merging 2 webpack configurations i.e. dev and production.

Both APplication1 and application2 are created inside the same container application.
This is an example of monolithic application. if we make any change then we have to 
deploy the entire container application.Let's now create a microfront architecture here
to import application-1 inside the container on runtime.

1. Now we have created a separate folder outside container app 
2. we have created a sample home component 
3. we have copied all the webpack configuration and package json file as well in Application1 folder
4. Our webpack configuration are set for the entry point
5. We have to update the port in the development mode
6. We have to install all the packages from the package josn in the applciation1 folder
7. next we run `npm install` command here for loading all the packages in Application1 directory.