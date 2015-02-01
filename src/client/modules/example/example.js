/**
 * @file
 * Defines '/' route.
 */
/* globals Router, Meteor, Examples */

Router.route('/', {
  // Wait until subscription has been created and the client has data.
  waitOn: function () {
    return Meteor.subscribe('examples');
  },

  // Render the 'example' template.
  action: function () {
    this.render('example', {
      // Pass example documents into the template.
      data: function () {
        return {
          examples: function() {
            return Examples.find();
          }
        };
      }
    });
  }
});

