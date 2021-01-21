import { renderStyle } from '../../helper/utils';
import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,

		backgroundColor,

		contentBackgroundColor,
		hoverContentBackgroundColor,
		contentColor,
		hoverContentColor,
		contentWidth,
		contentTextAlign,
		contentPadding,
		contentPaddingTablet,
		contentPaddingMobile,

		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLineHeight,
		contentFontSizeType,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentFontStyle,
		contentMargin,
		contentMarginTablet,
		contentMarginMobile,
		contentBorderRadius,
		contentBorderRadiusTablet,
		contentBorderRadiusMobile,
		imageSizeType,
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

		nameFontFamily,
		nameFontSizeType,
		nameFontStyle,
		nameFontWeight,
		nameTextTransform,
		nameTextDecoration,
		nameLetterSpacing,
		nameLineHeight,

		nameMargin,
		nameMarginTablet,
		nameMarginMobile,


		titleColor,
		titleTextAlign,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,

		titleFontFamily,
		titleFontSizeType,
		titleFontStyle,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLineHeight,

		titleMargin,
		titleMarginTablet,
		titleMarginMobile,
		clientInfoPosition,
		ratingsAlign,
		preset,

		displayBubble,
		bubblePosition,
		bubbleSize,
		bubbleColor,
	} = attributes;


	const selectorPrefix = `#pb-testimonial-${ blockId }`;

	const lrBubbleSize = bubbleSize + 4;

	let rules = {
		desktop: {
			'.pb-testimonial-wrapper': {
				display: 'flex',
				'flex-direction': 'column',
			},
			'.pb-testimonial-image img': {
				height: imageSize ? imageSize + imageSizeType : undefined,
				width: imageSize ? imageSize + imageSizeType : undefined,
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
				'font-family': nameFontFamily
					? nameFontFamily
					: undefined,
				'font-size': nameFontSize ? nameFontSize + nameFontSizeType : undefined,
				'font-weight':nameFontWeight
					? nameFontWeight + '!important'
					: undefined,
				'font-style': nameFontStyle
					? nameFontStyle
					: undefined,
				'letter-spacing': nameLetterSpacing
					? nameLetterSpacing + 'px'
					: undefined,
				'line-height': nameLineHeight
					? nameLineHeight + 'px'
					: undefined,
				'text-transform': nameTextTransform
					? nameTextTransform
					: undefined,
				'text-decoration': nameTextDecoration
					? nameTextDecoration
					: undefined,
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
				'text-align': contentTextAlign ? contentTextAlign : undefined,
				'font-family': contentFontFamily
					? contentFontFamily
					: undefined,
				'font-size': contentFontSize
					? contentFontSize + contentFontSizeType
					: undefined,
				'font-weight': contentFontWeight
					? contentFontWeight
					: undefined,
				'font-style': contentFontStyle
					? contentFontStyle
					: undefined,
				'letter-spacing': contentLetterSpacing
					? contentLetterSpacing + 'px'
					: undefined,
				'line-height': contentLineHeight
					? contentLineHeight + 'px'
					: undefined,
				'text-transform': contentTextTransform
					? contentTextTransform
					: undefined,
				'text-decoration': contentTextDecoration
					? contentTextDecoration
					: undefined,
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
				color: hoverContentColor
					? hoverContentColor + '!important'
					: undefined,
			},
			'.pb-testimonial-wrapper:hover .pb-testimonial--content': {
				color: hoverContentColor
					? hoverContentColor + '!important'
					: undefined,
			},
			'.pb-testimonial-info--title': {
				color: titleColor ? titleColor + '!important' : undefined,
				'font-family': titleFontFamily
					? titleFontFamily
					: undefined,
				'font-size': titleFontSize ? titleFontSize + titleFontSizeType : undefined,
				'font-weight': titleFontWeight
					? titleFontWeight + '!important'
					: undefined,
				'font-style': titleFontStyle
					? titleFontStyle
					: undefined,
				'letter-spacing': titleLetterSpacing
					? titleLetterSpacing + 'px'
					: undefined,
				'line-height': titleLineHeight
					? titleLineHeight + 'px'
					: undefined,
				'text-transform': titleTextTransform
					? titleTextTransform
					: undefined,
				'text-decoration': titleTextDecoration
					? titleTextDecoration
					: undefined,
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
				margin:
					imageMarginTablet.top +
					' ' +
					imageMarginTablet.right +
					' ' +
					imageMarginTablet.bottom +
					' ' +
					imageMarginTablet.left,
			},
			'.pb-testimonial-info--name': {
				'font-size': nameFontSizeTablet
					? nameFontSizeTablet + nameFontSizeType
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
					? contentFontSizeTablet + contentFontSizeType
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
					? titleFontSizeTablet + titleFontSizeType
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
			
			'.pb-testimonial-image img': {
				height: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
				width: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
				'border-radius': imageBorderRadiusMobile
					? imageBorderRadiusMobile + 'px'
					: undefined,
				margin:
					imageMarginMobile.top +
					' ' +
					imageMarginMobile.right +
					' ' +
					imageMarginMobile.bottom +
					' ' +
					imageMarginMobile.left,
			},
			'.pb-testimonial-info--name': {
				'font-size': nameFontSizeMobile
					? nameFontSizeMobile + nameFontSizeType
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
					? contentFontSizeMobile + contentFontSizeType
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
					? titleFontSizeMobile + titleFontSizeType
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

	if ( true === displayBubble ) {
		if ( 'above-content' === clientInfoPosition ) {
			rules.desktop[ '.pb-t-bubble .pb-testimonial--conr:after' ] = {
				top: '-' + bubbleSize + 'px',
				'border-top': bubbleSize + 'px solid ' + bubbleColor,
				transform: 'rotate(180deg)',
			}
		}
		if ( 'after-content' === clientInfoPosition ) {
			rules.desktop[ '.pb-t-bubble .pb-testimonial--conr:after' ] = {
				bottom: '-' + bubbleSize + 'px',
				'border-top': bubbleSize + 'px solid ' + bubbleColor,
			}
		}
		if ( 'left-content' === clientInfoPosition ) {
			rules.desktop[ '.pb-t-bubble .pb-testimonial--conr:after' ] = {
				margin: '0px',
				top: '50%',
				left: '-' + lrBubbleSize + 'px',
				'border-top': bubbleSize + 'px solid ' + bubbleColor,
				transform: 'rotate(90deg)',
			}
		}
		if ( 'right-content' === clientInfoPosition ) {
			rules.desktop[ '.pb-t-bubble .pb-testimonial--conr:after' ] = {
				margin: '0px',
				top: '50%',
				left: 'auto',
				right: '-' + lrBubbleSize + 'px',
				'border-top': bubbleSize + 'px solid ' + bubbleColor,
				transform: 'rotate(-90deg)',
			}
		}
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
		rules.desktop[ '.pb-testimonial-wrapper .pb-testimonial--conr' ] = {
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
		};
		rules.desktop[ '.design-3 .pb-testimonial--conr' ] = {
			'background-color': contentBackgroundColor
				? contentBackgroundColor
				: '#6a4adc',
			'border-radius':
				contentBorderRadius.top +
				' ' +
				contentBorderRadius.right +
				' ' +
				contentBorderRadius.bottom +
				' ' +
				contentBorderRadius.left,
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


	const advancedRules = AdvancedCSS( attributes );

	let keys = [...new Set([...Object.keys(rules),...Object.keys(advancedRules)])]
	let  finalRules = {}
	let merged = keys.forEach(key=>{
		finalRules[key] = {
			...rules[key],
			...advancedRules[key]
		}
	});

	const styles = renderStyle( finalRules, selectorPrefix );
	return styles;
};
export default Styles;
