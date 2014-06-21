Meteor.methods({
  'sampleFunction': function() {
    return console.log('A sample meteor method');
  }
});

Meteor.startup(function() {
  return Sample.allow({
    insert: function(userId, order) {
      return true;
    },
    update: function(userId, order) {
      return true;
    },
    remove: function(userId, order) {
      return true;
    }
  });
});

Meteor.publish('sample', function() {
  return Sample.find();
});
