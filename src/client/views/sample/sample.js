Router.map(function() {
  return this.route('home', {
    path: '/',
    template: 'sample'
  });
});

Template.sample.samples = function() {
  return Sample.find();
};
