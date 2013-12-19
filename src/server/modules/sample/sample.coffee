Meteor.methods
  'sampleFunction': ->
    console.log 'A sample meteor method'

Meteor.startup ->
  Sample.allow
    insert: (userId, order)-> true
    update: (userId, order)-> true
    remove: (userId, order)-> true

Meteor.publish 'sample', -> Sample.find()
