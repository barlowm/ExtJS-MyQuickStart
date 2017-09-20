# ExtJS-MyQuickStart
This is a rough skeleton for a new version of the COMS (Chemotherapy Ordering Management System) which is used as a starting template for 
future ExtJS applications without the use of the SENCHA CMD tool (which in my opinion is far more bulky than warranted for simple applications).

I have a basic package.json which should be modified for the name, version, description and repo info.

A basic set of dev dependencies with packages that I use for my standard GULP build tasks.

So after updating the package and doing an:

* ` npm install`

Running `gulp` from the command line will give a list of the gulp tasks that are available.
As new modules are added to the package, they should also be added to the gulp/config.js file so they can be used as required during a 
build.

For a Sencha base application in testing I use the CDNJS.com provider and their sencha libraries:

- https://cdnjs.com/libraries/extjs/6.2.0
- https://cdnjs.com/libraries/extjs/6.0.1
- https://cdnjs.com/libraries/extjs/6.0.0

However, this repo does have the `ext-all-debug.js` library as well as the `classic/theme-classic` theme.

The gulp build process includes synchronous building of several components (via gulp-sync) as well as a local webserver 
(via gulp-connect) to run the application and watch for any changes in stylesheet or JavaScript files.

To build, launch and watch for changes use the following command:

* `gulp watchReload`

Then open up a web browser to: localhost:8001
