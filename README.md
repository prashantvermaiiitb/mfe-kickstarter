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


Adding CSS styles inline to the HTML to improve performance gain for critical css.

> npm install --save-dev webpack-clean

Clean-up dist folder everytime webpack builds 