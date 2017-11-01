var path = 'templates/template.hbs';

var template = $.getHbs(path);
var data     = {
  message: 'Hello hbs file!'
};
var html     = template(data);
$('body').prepend(html);
