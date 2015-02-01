/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, Examples */

Meteor.startup(function() {
  Examples.allow({
    insert: function(userId, example) {
      return true;
    },
    update: function(userId, example) {
      return true;
    },
    remove: function(userId, example) {
      return true;
    }
  });
});

Meteor.publish('examples', function() {
  return Examples.find();
});
