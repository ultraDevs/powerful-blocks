export const renderStyle = ( css, selectorPrefix, blockName = null ) => {

	const blockId = selectorPrefix.replace( '#', '' ).replace( '.', '' );
	const breakpoints = {
		tablet: 976,
		mobile: 767,
	};

	if ( 'undefined' === typeof css.desktop ) {
		throw new Error( 'Parser: Invalid CSS.' );
	}

	let sTag = 'p';

	if ( 'core/paragraph' === blockName ) {
		sTag = ' p';
	} else if ( 'core/heading' === blockName ) {
		sTag = ' .pb-c-heading';
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

			if ( 'typoSelector' === selector ) {
				parsedStyle += sTag;
			}
			else {
				if ( 'selector' !== selector ) {
					parsedStyle += ' ' + selector;
				}
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
