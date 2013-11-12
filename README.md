meteor-boilerplate
==================

This is a starting point for Meteor-based applications. It includes some useful packages, organization, and less setup.

##Atmosphere Packages
Here's a list of packages installed by default from [Atmosphere](http://atmosphere.meteor.com):

###[Iron Router](https://github.com/EventedMind/iron-router)
A client and server side router designed specifically for Meteor.

###[Collection 2](https://github.com/aldeed/meteor-collection2)
A smart package for Meteor that extends Meteor.Collection to provide support for specifying a schema and then validating against that schema when inserting and updating. Also adds support for virtual fields.

###[Autoform](https://github.com/aldeed/meteor-autoform)
A smart package for Meteor that adds handlebars helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.

###[Roles](https://github.com/alanning/meteor-roles)
Roles-based authorization package for Meteor - compatible with built-in accounts package.

###[Bootstrap (with less)](https://github.com/eprochasson/bootstrap3-less)
Bootstrap 3 for Meteor, with Less.

###[Font Awesome 4](https://github.com/michaelbishop/meteor-font-awesome-4)
Meteorite smart package for Font Awesome 4

###[Flash Messages](https://github.com/camilosw/flash-messages)
Package for displaying flash messages to the user. This is based on the chapter 'Creating a Meteorite Package' from the Discover Meteor Book and foundation-flash-messages package. This package integrate well with Bootstrap Alerts styles, but Bootstrap is not a dependency.


##Core Packages
meteor-boilerplate adds these meteor core packages by default:

 - autopublish
 - insecure
 - preserve-inputs
 - less
 - jquery
 - coffeescript
 - accounts-base
 - underscore

##Folder Structure
The <code>/client</code>, <code>/server</code>, and <code>/lib</code> folders provide some basic app structure that I've found to be useful:

/client
 - /less - Contains all of your less styles
   - app.less - Default less file with basic less organization comments, default media queries, and bootstrap imports
   - variables.less - A bootstrap 3 variables less file you can use to overwrite the default bootstrap variables. Imported into the app.less file for variable use within your custom less
 - /views - Holds folders of your applications views
   - sample
     - sample.coffee - Example view file that defines a default route
     - sample.html - Example default template that the sample.coffee route yields
 - main.html - Basic app html file with a default layout defined
 - routes.coffee - Default route configuration

/lib
 - collections.coffee - File that creates collections and defines their schemas

/server
 - /sample
   - sample.coffee - Demonstrates possible organization for server side view/collection specific code
