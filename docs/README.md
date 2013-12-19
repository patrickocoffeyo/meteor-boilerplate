#Documentation
This directory contains all the documentation for this application.

##Folder Structure
**/docs** - Contains all documentation for your application
**/src**
 - **/client**
   - **/less** - Contains all of your less stylesheets
     - **app.less** - Default less file with basic less organization comments, default media queries, and bootstrap imports
     - **variables.less** - A bootstrap 3 variables less file you can use to overwrite the default bootstrap variables. Imported into the app.less file for variable use within your custom less
   - **/views** - Holds a folder for each application module. Each module folder should contain routes, event handles, UI components, and subscriptions
     - **/sample**
       - **sample.coffee** - Example view file that defines a default route
       - **sample.html** - Example default template that the sample.coffee route yields
   - **main.html** - Basic app html file with a default layout defined
   - **routes.coffee** - Iron Router configuration file.
 - **/lib**
   - **collections.coffee** - File that creates collections and defines their schemas
 - **/Server/** - Server specific files
   - **/modules/** - Contains a directory for each module. Each module directory will have publication functions, allow/deny functions, and Meteor methods.
     - **/sample**
       - **sample.coffee** - Sample publication, allow/deny, and method functions.
   - **/startup/** - Files containing scripts that should run on startup. For instance, a user.coffee file that creates a default admin user for your app if one doesn't already exist.
    - **sample.coffee** - Sample startup function
