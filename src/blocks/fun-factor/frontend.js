jQuery( function ( $ ) {
	// Fun Factor Counter
	window[ 'pbCounter' ] = function () {
		$( '.pb-fun-factor-wrapper' ).each( function () {
			if ( $( 'body' ).hasClass( 'wp-admin' ) && $( this ).parents( '.wp-block-powerful-blocks-fun-factor.pb-is-selected' ).length === 0 ) {
				return;
			}
			if ( $( window ).scrollTop() > $( this ).offset().top - window.innerHeight ) {
				var $el = $( this ).find( '.pb-fun-factor-number' ),
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

    if ( $( '.pb-fun-factor-wrapper' ).length > 0 ) {
        $( window ).on( 'scroll', function () {
            pbCounter();
        } );
    }
} );
