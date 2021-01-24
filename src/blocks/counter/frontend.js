jQuery( function ( $ ) {
	// Counter
	window[ 'pbCounter' ] = function () {
		$( '.pb-counter-wrapper' ).each( function () {
			if ( $( 'body' ).hasClass( 'wp-admin' ) && $( this ).parents( '.wp-block-powerful-blocks-counter.pb-is-selected' ).length === 0 ) {
				return;
			}
			if ( $( window ).scrollTop() > $( this ).offset().top - window.innerHeight ) {
				var $el = $( this ).find( '.pb-counter' ),
					data = {
						fromValue: $el.attr( 'data-from' ),
						toValue: $el.attr( 'data-to' ),
						delimiter: $el.attr( 'data-delimiter' ),
						duration: $el.attr( 'data-duration' ),
						easing: $el.attr( 'data-easing' ),
						onComplete: function () {
							$el.addClass( 'pb-num-counter-complete' );
						},
					},
					decimalDigits = data.toValue.toString().match( /\.(.*)/ );

				if ( decimalDigits ) {
					data.rounding = decimalDigits[ 1 ].length;
				}

				if ( $( 'body' ).hasClass( 'wp-admin' ) ) {
					data.onComplete = function () {};
					$el.empty();
				}

				if ( ! $el.hasClass( 'pb-num-counter-complete' ) ) {
					$el.numerator( data );
				}
			}
		} );
	};

    if ( $( '.pb-counter-wrapper' ).length > 0 ) {
        $( window ).on( 'scroll', function () {
            pbCounter();
        } );
    }
} );
