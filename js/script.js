var path = 'templates/template.hbs';

var data     = {
  message: 'Hello hbs file!'
};

var deferred = $.getHbs(path);
deferred.then(function(template){
  var html = template(data);
  $('body').prepend(html);
});
console.log("It's alive !!");
