Router.route('/', function () {
  this.render('example', {
    data: function () {
      return Examples.find();
    }
  });
});

