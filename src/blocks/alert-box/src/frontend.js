jQuery( function ( $ ) {
	// Click to hide

	$( '.pb-alert-box-hide' ).on( 'click', function ( e ) {
		e.preventDefault();
		$( this ).closest( '.pb-alert-box' ).slideUp( 500 );
	} );

	// Hide After X Time.
	$( '.pb-alert-box' ).each( function ( i, item ) {
		var settings = $( this ).data( 'settings' );
		var id = settings.id;
		var time = settings.time;

		if ( 0 !== time && $( '#' + id ).is( ':visible' ) ) {
			var t = time * 1000;
			setTimeout( function () {
				$( '#' + id ).slideUp( 500 );
			}, t );
		}
	} );
} );
