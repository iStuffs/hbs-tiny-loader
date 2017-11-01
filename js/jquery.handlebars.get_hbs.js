(function ( $, Hbs ) {

    $.getHbs = function( path ) {

      var template = false;
      $.ajax(
        { url:    path,
          async:    false,
          dataType: 'html',
          success: function(source) {
            console.log('coucou');
            template = Hbs.compile(source);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus, ': ', errorThrown);
          }
        });
        return template;
    };

}( jQuery, Handlebars ));
