meteor-boilerplate
==================

This is a starting point for Meteor-based applications. It includes some useful packages, organization techniques to ensure that your codebase is stays mantainable and easy to understand. It also contains a gulp-based coding standards sniffer to ensure code quality.

A very simple example of a meteor app built from this boilerplate is [OnTask](https://github.com/patrickocoffeyo/ontask).

##Packages
Here's a list of packages installed by default.

###[Iron Router](https://github.com/EventedMind/iron-router)
A router that works on the server and the browser.

###[Collection 2](https://github.com/aldeed/meteor-collection2)
Extends Mongo.Collection to provide support for specifying a schema and then validating against that schema when inserting and updating.

###[Collection Helpers](https://github.com/dburles/meteor-collection-helpers)
Sets up a transformation on your collections allowing for simple models, with an interface similar to template helpers.

###[Autoform](https://github.com/aldeed/meteor-autoform)
Adds UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.

###[Roles](https://github.com/alanning/meteor-roles)
Roles-based authorization package for Meteor - compatible with built-in accounts package.

###[Sass](https://github.com/particle4dev/meteor-sass/)
Brings sass to your meteor application using node-sass.


##Core Packages
meteor-boilerplate adds these meteor core packages by default:

 - insecure
 - jquery
 - accounts-base
 - underscore

##Deployment with Docker
This package includes a basic dockerfile for deploying built versions of your application. More instructions and development on this feature to come.

## Coding Standards
This project contains multiple tools for enforcing coding standards and checking for errors within the codebase. The standards are defined in the `.jscsrc` and `.jshintrc` files in the project root.

### Installation

* Change directory to the root directory of the boilerplate (Not Meteor's root), like: `cd /path/to/project`
* Run `npm install` to retrieve dependencies.

### Checking

To check your local codebase, run `gulp cs` from a console in the project root. An error report, if any, will be generated in the console.

##Folder Structure
The <code>/client</code>, <code>/server</code>, and <code>/lib</code> folders provide some basic app structure that I've found to be useful:

**/docs** - Contains all documentation for your application
**/src**
 - **/client**
   - **/styles** - Contains all of your stylesheets.
     - **app.scss** - Empty sass file that should hold your application's styles.
   - **/modules** - Holds a folder for each application module. Each module folder should contain routes, event handles, UI components, and subscriptions.
     - **/example**
       - **example.js** - Example view file that defines a default route.
       - **example.html** - Example default template that the sample.js route yields.
   - **/templates** - Contains all of your less stylesheets.
   	 - **app.html** - Basic app html file with a default layout defined.
   	 - **layoutMain.html** - Default layout template.
   	 - **header.html** - Header template.
   - **routes.js** - Iron Router configuration file.
 - **/lib**
   - **/collections** - Folder that contains collection definitions.
     - **example.js** - Defines an example collection, with a schema and a helper.
 - **/public** - Contains all files served by applications.
   - **/images** - Contains all images served by applications.
 - **/server/** - Server specific files.
   - **/modules/** - Contains a directory for each module. Each module directory will have publication functions, allow/deny functions, and Meteor methods.
     - **/example**
       - **example.js** - Sample publication, allow/deny, and method functions.
   - **/startup/** - Files containing scripts that should run on startup. For instance, a user.js file that creates a default admin user for your app if one doesn't already exist.
    - **example.js** - Sample startup function.
