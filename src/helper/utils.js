export const renderStyle = ( css, selectorPrefix ) => {
	const blockId = selectorPrefix.replace( '#', '' );
	const breakpoints = {
		tablet: 976,
		mobile: 767,
	};

	if ( 'undefined' === typeof css.desktop ) {
		throw new Error( 'Parser: Invalid CSS.' );
	}

	let parsedStyle = '';

	Object.keys( css ).map( ( device ) => {
		if ( 'undefined' === typeof device ) {
			return;
		}
		if ( 'tablet' === device || 'mobile' === device ) {
			parsedStyle += `@media only screen and (max-width: ${ breakpoints[ device ] }px) { `;
		}

		Object.keys( css[ device ] ).map( ( selector ) => {
			if ( 'undefined' === typeof selector ) {
				return;
			}
			parsedStyle += selectorPrefix;
			if ( 'selector' !== selector ) {
				parsedStyle += ' ' + selector;
			}
			parsedStyle += ' { ';
			let properties = css[ device ][ selector ];
			Object.keys( properties ).map( ( property ) => {
				if (
					'undefined' === typeof property ||
					'undefined' === typeof properties[ property ]
				) {
					return;
				}
				if ( '' !== properties[ property ] ) {
					parsedStyle +=
						property + ': ' + properties[ property ] + '; ';
				}
			} );
			parsedStyle += '} ';
		} );
		if ( 'tablet' === device || 'mobile' === device ) {
			parsedStyle += '} ';
		}
	} );
	
	// genCSS( selectorPrefix, parsedStyle );

	return <style id={ blockId }>{ parsedStyle }</style>;
	// return null;

};
