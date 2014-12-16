Meteor.startup(function() {
  Examples.allow({
    insert: function(userId, example) {
      console.log(userId);
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
