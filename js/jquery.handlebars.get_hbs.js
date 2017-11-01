(function ( $, Hbs ) {

    $.getHbs = function( path ) {
      var d = new $.Deferred();
      var template = false;
      $.ajax(
        { url:    path,
          async:    true, //asynchrone should be cool ^^
          dataType: 'html',
          success: function(source) {
            template = Hbs.compile(source);
            d.resolve(template)//peut-être template pourait etre utilisé dans le callback de .then
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus, ': ', errorThrown);
          }
        });
        return d; //retourne un deferred pour le coté asynchrone
    };

}( jQuery, Handlebars ));
