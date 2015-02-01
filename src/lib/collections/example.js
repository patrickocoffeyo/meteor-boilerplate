/**
 * @file
 * Defines 'Examples' collections and helpers.
 */
/* globals Examples:true, Mongo */

// Declare 'Examples' collection.
Examples = new Mongo.Collection('example');

// Define schema for Examples collection.
Examples.attachSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  }
});

// Add helpers to Examples collection object.
Examples.helpers({
  titleShort: function() {
    return this.title.substring(0, 50);
  }
});
