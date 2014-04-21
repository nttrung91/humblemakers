var overlayOn = function()
      {
        $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
      },
      overlayOff = function()
      {
        $( '#imagelightbox-overlay' ).remove();
      };


$( '.galleryLink' ).imageLightbox(
    {
      onStart:   function() { overlayOn(); },
      onEnd:     function() { overlayOff();}
    });



        // $( '.galleryLink' ).imageLightbox();