Router.map ->
  this.route 'home',
    path: '/'
    template: 'sample'

Template.sample.samples = -> Sample.find()
