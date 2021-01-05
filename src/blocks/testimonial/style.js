import { renderStyle } from '../../components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,

		backgroundColor,
        hoverBackgroundColor,
        padding,
        paddingTablet,
        paddingMobile,
        margin,
        marginTablet,
        marginMobile,
        shadowColor,
        shadowHOffset,
        shadowVOffset,
        shadowBlur,
        shadowSpread,
        shadowType,
        borderStyle,
        borderSize,
        borderColor,
        hoverBorderStyle,
        hoverBorderSize,
        hoverBorderColor,
        borderRadius,
        borderRadiusTablet,
        borderRadiusMobile,
        inAnimation,
        outAnimation,
        inAnimationDuration,
        inAnimationDelay,
        outAnimationDuration,
        outAnimationDelay,
        blockWidth,
        blockCustomWidth,
        blockCustomWidthTablet,
        blockCustomWidthMobile,
        blockzIndex,
        hideOnDesktop,
        hideOnTablet,
        hideOnMobile,

		contentBackgroundColor,
		hoverContentBackgroundColor,
		contentColor,
		contentWidth,
		contentTextAlign,
		contentPadding,
		contentPaddingTablet,
		contentPaddingMobile,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentMargin,
		contentMarginTablet,
		contentMarginMobile,
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
		imageMarginTablet,
		imageMarginMobile,
		nameColor,
		nameTextAlign,
		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameMargin,
		nameMarginTablet,
		nameMarginMobile,
		titleColor,
		titleTextAlign,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleMargin,
		titleMarginTablet,
		titleMarginMobile,
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
				'border-radius':
					borderRadius.top +
					' ' +
					borderRadius.right +
					' ' +
					borderRadius.bottom +
					' ' +
					borderRadius.left,
			},
			'.pb-testimonial-wrapper:hover': {
				'background-color': hoverBackgroundColor
					? hoverBackgroundColor
					: undefined,
				'border-width': hoverBorderSize
					? hoverBorderSize + 'px'
					: undefined,
				'border-style': hoverBorderStyle ? hoverBorderStyle : undefined,
				'border-color': hoverBorderColor ? hoverBorderColor : undefined,
			},
			'.pb-testimonial-image img': {
				height: imageSize ? imageSize + 'px' : undefined,
				width: imageSize ? imageSize + 'px' : undefined,
				'border-radius':
					imageBorderRadius.top || 0 +
					' ' +
					imageBorderRadius.right || 0 +
					' ' +
					imageBorderRadius.bottom || 0 +
					' ' +
					imageBorderRadius.left || 0,
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
				'border-radius':
					contentBorderRadius.top +
					' ' +
					contentBorderRadius.right +
					' ' +
					contentBorderRadius.bottom +
					' ' +
					contentBorderRadius.left,
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
			'.pb-testimonial-wrapper': {
				padding:
					paddingTablet.top +
					' ' +
					paddingTablet.right +
					' ' +
					paddingTablet.bottom +
					' ' +
					paddingTablet.left,
				margin:
					marginTablet.top +
					' ' +
					marginTablet.right +
					' ' +
					marginTablet.bottom +
					' ' +
					marginTablet.left,
				'border-radius':
					borderRadiusTablet.top +
					' ' +
					borderRadiusTablet.right +
					' ' +
					borderRadiusTablet.bottom +
					' ' +
					borderRadiusTablet.left,
			},
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
				margin:
					nameMarginTablet.top +
					' ' +
					nameMarginTablet.right +
					' ' +
					nameMarginTablet.bottom +
					' ' +
					nameMarginTablet.left,
			},
			'.pb-testimonial--content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + 'px'
					: undefined,
			},
			'.pb-testimonial--conr': {
				padding:
					contentPaddingTablet.top +
					' ' +
					contentPaddingTablet.right +
					' ' +
					contentPaddingTablet.bottom +
					' ' +
					contentPaddingTablet.left,
				margin:
					contentMarginTablet.top +
					' ' +
					contentMarginTablet.right +
					' ' +
					contentMarginTablet.bottom +
					' ' +
					contentMarginTablet.left,
				'border-radius':
					contentBorderRadiusTablet.top +
					' ' +
					contentBorderRadiusTablet.right +
					' ' +
					contentBorderRadiusTablet.bottom +
					' ' +
					contentBorderRadiusTablet.left,
			},
			'.pb-testimonial-info--title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + 'px'
					: undefined,
				margin:
					titleMarginTablet.top +
					' ' +
					titleMarginTablet.right +
					' ' +
					titleMarginTablet.bottom +
					' ' +
					titleMarginTablet.left,
			},
		},
		mobile: {
			'.pb-testimonial-wrapper': {
				padding:
					paddingMobile.top +
					' ' +
					paddingMobile.right +
					' ' +
					paddingMobile.bottom +
					' ' +
					paddingMobile.left,
				margin:
					marginMobile.top +
					' ' +
					marginMobile.right +
					' ' +
					marginMobile.bottom +
					' ' +
					marginMobile.left,
				'border-radius':
					borderRadiusMobile.top +
					' ' +
					borderRadiusMobile.right +
					' ' +
					borderRadiusMobile.bottom +
					' ' +
					borderRadiusMobile.left,
			},
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
				margin:
					nameMarginMobile.top +
					' ' +
					nameMarginMobile.right +
					' ' +
					nameMarginMobile.bottom +
					' ' +
					nameMarginMobile.left,
			},
			'.pb-testimonial--content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + 'px'
					: undefined,
			},
			'.pb-testimonial--conr': {
				padding:
					contentPaddingMobile.top +
					' ' +
					contentPaddingMobile.right +
					' ' +
					contentPaddingMobile.bottom +
					' ' +
					contentPaddingMobile.left,
				margin:
					contentMarginMobile.top +
					' ' +
					contentMarginMobile.right +
					' ' +
					contentMarginMobile.bottom +
					' ' +
					contentMarginMobile.left,
				'border-radius':
					contentBorderRadiusMobile.top +
					' ' +
					contentBorderRadiusMobile.right +
					' ' +
					contentBorderRadiusMobile.bottom +
					' ' +
					contentBorderRadiusMobile.left,
			},
			'.pb-testimonial-info--title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + 'px'
					: undefined,
				margin:
					titleMarginMobile.top +
					' ' +
					titleMarginMobile.right +
					' ' +
					titleMarginMobile.bottom +
					' ' +
					titleMarginMobile.left,
			},
		},
	};

	// Responsive.
	// if ( true === hideOnDesktop ) {
	// 	rules.desktop[ '.wp-block .pb-testimonial-wrapper' ] = {
	// 		opacity: '0.6',
	// 		display: 'block !important',
	// 	};
	// 	rules.desktop[ '.pb-testimonial-wrapper' ] = {
	// 		display: 'none',
	// 	};
	// }
	// if ( true === hideOnTablet ) {
	// 	rules.tablet[ '.wp-block .pb-testimonial-wrapper' ] = {
	// 		opacity: '0.6',
	// 		display: 'block !important',
	// 	};
	// 	rules.tablet[ '.pb-testimonial-wrapper' ] = {
	// 		display: 'none',
	// 	};
	// }
	// if ( true === hideOnMobile ) {
	// 	rules.mobile[ '.wp-block .pb-testimonial-wrapper' ] = {
	// 		opacity: '0.6',
	// 		display: 'block !important',
	// 	};
	// 	rules.mobile[ '.pb-testimonial-wrapper' ] = {
	// 		display: 'none',
	// 	};
	// }

	if ( 'inline' === blockWidth ) {
		rules.desktop[ '.pb-testimonial-wrapper' ] = {
			display: 'inline-block',
			margin: 'auto',
		};
	}

	if ( 'custom' === blockWidth ) {
		rules.desktop[ '.pb-testimonial-wrapper' ] = {
			width: blockCustomWidth + 'px',
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.tablet[ '.pb-testimonial-wrapper' ] = {
			width: blockCustomWidthTablet + 'px',
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.mobile[ '.pb-testimonial-wrapper' ] = {
			width: blockCustomWidthMobile + 'px',
		};
	}

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
				'40px' + ' ' + contentPadding.right ||
				'40px' + ' ' + contentPadding.bottom ||
				'40px' + ' ' + contentPadding.left ||
				'40px',
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
