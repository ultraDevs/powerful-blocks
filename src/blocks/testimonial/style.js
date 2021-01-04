import { renderStyle } from '../../components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,
		backgroundColor,
		hoverBackgroundColor,
		padding,
		margin,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,
		shadowType,
		borderStyle,
		borderSize,
		borderColor,
		contentBackgroundColor,
		hoverContentBackgroundColor,
		contentColor,
		contentWidth,
		contentTextAlign,
		contentPadding,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentMargin,
		contentBorderRadius,
		contentBorderRadiusTablet,
		contentBorderRadiusMobile,
		imageSize,
		imageSizeTablet,
		imageSizeMobile,
		imageBorderStyle,
		imageBorderSize,
		imageBorderColor,
		imageBorderRadius,
		imageBorderRadiusTablet,
		imageBorderRadiusMobile,
		imageShadowColor,
		imageShadowHOffset,
		imageShadowVOffset,
		imageShadowBlur,
		imageShadowSpread,
		imageShowContent,
		imagePosition,
		imageMargin,
		nameColor,
		nameTextAlign,
		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameMargin,
		titleColor,
		titleTextAlign,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleMargin,
		clientInfoPosition,
		ratingsAlign,
		preset,
	} = attributes;

	const selectorPrefix = `#pb-testimonial-${ blockId }`;




	let rules = {
		desktop: {
			'.pb-testimonial-wrapper': {
				display: 'flex',
				'flex-direction': 'column',
				'background-color': backgroundColor
					? backgroundColor
					: undefined,
				padding:
					padding.top +
					' ' +
					padding.right +
					' ' +
					padding.bottom +
					' ' +
					padding.left,
				margin:
					margin.top +
					' ' +
					margin.right +
					' ' +
					margin.bottom +
					' ' +
					margin.left,
				'box-shadow':
					shadowType + ' ' +
					shadowHOffset +
					'px ' +
					shadowVOffset +
					'px ' +
					shadowBlur +
					'px ' +
					shadowSpread +
					'px ' +
					shadowColor,
				'border-width': borderSize
					? borderSize + 'px'
					: undefined,
				'border-style': borderStyle ? borderStyle : undefined,
				'border-color': borderColor ? borderColor : undefined,
			},
			'.pb-testimonial-wrapper:hover': {
				'background-color': hoverBackgroundColor
					? hoverBackgroundColor
					: undefined,
			},
			'.pb-testimonial-image img': {
				height: imageSize ? imageSize + 'px' : undefined,
				width: imageSize ? imageSize + 'px' : undefined,
				'border-radius': imageBorderRadius
					? imageBorderRadius + 'px'
					: undefined,
				'border-width': imageBorderSize
					? imageBorderSize + 'px'
					: undefined,
				'border-style': imageBorderStyle ? imageBorderStyle : undefined,
				'border-color': imageBorderColor ? imageBorderColor : undefined,
				margin:
					imageMargin.top +
					' ' +
					imageMargin.right +
					' ' +
					imageMargin.bottom +
					' ' +
					imageMargin.left,
				'box-shadow':
					imageShadowHOffset +
					'px ' +
					imageShadowVOffset +
					'px ' +
					imageShadowBlur +
					'px ' +
					imageShadowSpread +
					'px ' +
					imageShadowColor,
			},
			'.pb-testimonial-info--name': {
				color: nameColor ? nameColor + '!important' : undefined,
				'font-size': nameFontSize ? nameFontSize + 'px' : undefined,
				'text-align': nameTextAlign ? nameTextAlign : undefined,
				margin:
					nameMargin.top +
					' ' +
					nameMargin.right +
					' ' +
					nameMargin.bottom +
					' ' +
					nameMargin.left,
			},

			'.pb-testimonial--content': {
				color: contentColor ? contentColor : undefined,
				'font-size': contentFontSize
					? contentFontSize + 'px'
					: undefined,
				'text-align': contentTextAlign ? contentTextAlign : undefined,
			},
			'.pb-testimonial--conr': {
				'background-color': contentBackgroundColor
					? contentBackgroundColor
					: undefined,
				padding:
					contentPadding.top +
					' ' +
					contentPadding.right +
					' ' +
					contentPadding.bottom +
					' ' +
					contentPadding.left,
				margin:
					contentMargin.top +
					' ' +
					contentMargin.right +
					' ' +
					contentMargin.bottom +
					' ' +
					contentMargin.left,
				'border-radius': contentBorderRadius
					? contentBorderRadius + 'px'
					: undefined,
			},
			'.pb-testimonial--conr:hover': {
				'background-color': hoverContentBackgroundColor
					? hoverContentBackgroundColor + '!important'
					: undefined,
			},
			'.pb-testimonial-info--title': {
				color: titleColor ? titleColor + '!important' : undefined,
				'font-size': titleFontSize ? titleFontSize + 'px' : undefined,
				'text-align': titleTextAlign ? titleTextAlign : undefined,
				margin:
					titleMargin.top +
					' ' +
					titleMargin.right +
					' ' +
					titleMargin.bottom +
					' ' +
					titleMargin.left,
			},
			'.pb-testimonial--rating': {
				'text-align': ratingsAlign ? ratingsAlign : undefined,
			},
		},
		tablet: {
			'.pb-testimonial-image img': {
				height: imageSizeTablet ? imageSizeTablet + 'px' : undefined,
				width: imageSizeTablet ? imageSizeTablet + 'px' : undefined,
				'border-radius': imageBorderRadiusTablet
					? imageBorderRadiusTablet + 'px'
					: undefined,
			},
			'.pb-testimonial-info--name': {
				'font-size': nameFontSizeTablet
					? nameFontSizeTablet + 'px'
					: undefined,
			},
			'.pb-testimonial--content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + 'px'
					: undefined,
			},
			'.pb-testimonial--conr': {
				'border-radius': contentBorderRadiusTablet
					? contentBorderRadiusTablet + 'px'
					: undefined,
			},
			'.pb-testimonial-info--title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + 'px'
					: undefined,
			},
		},
		mobile: {
			'.pb-testimonial-image img': {
				height: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
				width: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
				'border-radius': imageBorderRadiusMobile
					? imageBorderRadiusMobile + 'px'
					: undefined,
			},
			'.pb-testimonial-info--name': {
				'font-size': nameFontSizeMobile
					? nameFontSizeMobile + 'px'
					: undefined,
			},
			'.pb-testimonial--content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + 'px'
					: undefined,
			},
			'.pb-testimonial--conr': {
				'border-radius': contentBorderRadiusMobile
					? contentBorderRadiusMobile + 'px'
					: undefined,
			},
			'.pb-testimonial-info--title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + 'px'
					: undefined,
			},
		},
	};

	if ( 'above-content' === clientInfoPosition ) {
		rules.desktop[ '.pb-testimonial-client-info-position' ] = {
			'flex-direction': 'column-reverse',
		};
	}
	if ( 'after-content' === clientInfoPosition ) {
		rules.desktop[ '.pb-testimonial-client-info-position' ] = {
			'flex-direction': 'column',
		};
	}
	if ( 'left-content' === clientInfoPosition ) {
		rules.desktop[ '.pb-testimonial-client-info-position' ] = {
			'flex-direction': 'row-reverse',
			'align-items': 'center',
			'justify-content': 'space-between',
		};
	}

	if ( 'right-content' === clientInfoPosition ) {
		rules.desktop[ '.pb-testimonial-client-info-position' ] = {
			'flex-direction': 'row',
			'align-items': 'center',
			'justify-content': 'space-between',
		};
	}

	if (
		'left-content' === clientInfoPosition ||
		'right-content' === clientInfoPosition
	) {
		rules.desktop[ '.pb-testimonial--conr' ] = {
			width: contentWidth ? contentWidth + '%' : undefined,
		};
	}

	// Designs
	if ( 'design-2' === preset ) {
		rules.desktop[ '.design-2' ] = {
			'background-color': backgroundColor
				? backgroundColor
				: 'transparent',
			padding: '0px ',
		};
		rules.desktop[ '.design-2 .pb-testimonial--content' ] = {
			color: contentColor ? contentColor : '#fff',
		};
		rules.desktop[ '.design-2 .pb-testimonial--conr' ] = {
			'background-color': contentBackgroundColor
				? contentBackgroundColor
				: '#6a4adc',
		};
		rules.desktop[ '.design-2 .pb-testimonial--details' ] = {
			'justify-content': 'flex-start',
		};
		rules.desktop[ '.design-2 .pb-testimonial-info--name' ] = {
			color: nameColor ? nameColor : '#111',
		};
		rules.desktop[ '.design-2 .pb-testimonial-info--title' ] = {
			color: titleColor ? titleColor : '#111',
		};
	}

	if ( 'design-3' === preset ) {
		rules.desktop[ '.design-3' ] = {
			'background-color': backgroundColor
				? backgroundColor
				: 'transparent',
			padding: '0px ',
		};
		rules.desktop[ '.design-3 .pb-testimonial--conr' ] = {
			'background-color': contentBackgroundColor
				? contentBackgroundColor
				: '#6a4adc',
			'border-radius': contentBorderRadius
				? contentBorderRadius + 'px'
				: '100px',
			padding:
				contentPadding.top ||
				'20px' + ' ' + contentPadding.right ||
				'20px' + ' ' + contentPadding.bottom ||
				'20px' + ' ' + contentPadding.left ||
				'20px',
		};
		rules.desktop[ '.design-3 .pb-testimonial--content' ] = {
			color: contentColor ? contentColor : '#fff',
		};
		rules.tablet[ '.design-3 .pb-testimonial--conr' ] = {
			'border-radius': contentBorderRadiusTablet
				? contentBorderRadiusTablet + 'px'
				: '100px',
		};
		rules.mobile[ '.design-3 .pb-testimonial--conr' ] = {
			'border-radius': contentBorderRadiusMobile
				? contentBorderRadiusMobile + 'px'
				: '100px',
		};
		rules.desktop[ '.design-2 .pb-testimonial-info--name' ] = {
			color: nameColor ? nameColor : '#111',
		};
		rules.desktop[ '.design-2 .pb-testimonial-info--title' ] = {
			color: titleColor ? titleColor : '#111',
		};
	}
	const styles = renderStyle( rules, selectorPrefix );

	// let css = styles.props.children;


	return styles;
};
export default Styles;
