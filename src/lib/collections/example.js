Examples = new Mongo.Collection('example');
Examples.attachSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  }
});
