import { renderStyle } from '../../helper/utils';

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

	const lrBubbleSize = ( Number( bubbleSize) + 7 );

	let rules = {
		desktop: {
			'.pb-testimonial-wrapper': {
				display: 'flex',
				'flex-direction': 'column',
			},
			'.pb-testimonial-image img': {
				height: imageSize ? imageSize + imageSizeType : undefined,
				width: imageSize ? imageSize + imageSizeType : undefined,
				'border-radius': imageBorderRadius ? ( imageBorderRadius.top ? imageBorderRadius.top : '0px' ) + ' ' + ( imageBorderRadius.right ? imageBorderRadius.right : '0px') + ' ' + ( imageBorderRadius.bottom ? imageBorderRadius.bottom : '0px' ) + ' ' + ( imageBorderRadius.left ? imageBorderRadius.left : '0px' ) : undefined,
				'border-width': imageBorderSize
					? imageBorderSize + 'px'
					: undefined,
				'border-style': imageBorderStyle ? imageBorderStyle : undefined,
				'border-color': imageBorderColor ? imageBorderColor : undefined,
				'margin-top': imageMargin.top ? imageMargin.top : undefined,
				'margin-right': imageMargin.right ? imageMargin.right : undefined,
				'margin-bottom': imageMargin.bottom ? imageMargin.bottom : undefined,
				'margin-left': imageMargin.left ? imageMargin.left : undefined,
				'box-shadow': imageShadowColor ? 
					imageShadowHOffset +
					'px ' +
					imageShadowVOffset +
					'px ' +
					imageShadowBlur +
					'px ' +
					imageShadowSpread +
					'px ' +
					imageShadowColor : undefined,
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
				'margin-top': nameMargin.top ? nameMargin.top : undefined,
				'margin-right': nameMargin.right ? nameMargin.right : undefined,
				'margin-bottom': nameMargin.bottom ? nameMargin.bottom : undefined,
				'margin-left': nameMargin.left ? nameMargin.left : undefined,
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
				'margin-top': contentMargin.top ? contentMargin.top : undefined,
				'margin-right': contentMargin.right ? contentMargin.right : undefined,
				'margin-bottom': contentMargin.bottom ? contentMargin.bottom : undefined,
				'margin-left': contentMargin.left ? contentMargin.left : undefined,
				
				'padding-top': contentPadding.top ? contentPadding.top : undefined,
				'padding-right': contentPadding.right ? contentPadding.right : undefined,
				'padding-bottom': contentPadding.bottom ? contentPadding.bottom : undefined,
				'padding-left': contentPadding.left ? contentPadding.left : undefined,
				'border-radius': contentBorderRadius ? ( contentBorderRadius.top ? contentBorderRadius.top : '0px' ) + ' ' + ( contentBorderRadius.right ? contentBorderRadius.right : '0px') + ' ' + ( contentBorderRadius.bottom ? contentBorderRadius.bottom : '0px' ) + ' ' + ( contentBorderRadius.left ? contentBorderRadius.left : '0px' ) : undefined,
				'--bubble-size': bubbleSize ? bubbleSize + 'px' : '15px'
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
				'margin-top': titleMargin.top ? titleMargin.top : undefined,
				'margin-right': titleMargin.right ? titleMargin.right : undefined,
				'margin-bottom': titleMargin.bottom ? titleMargin.bottom : undefined,
				'margin-left': titleMargin.left ? titleMargin.left : undefined,
			},
			'.pb-testimonial--rating': {
				'text-align': ratingsAlign ? ratingsAlign : undefined,
			},
		},
		tablet: {
			'.pb-testimonial-image img': {
				height: imageSizeTablet ? imageSizeTablet + 'px' : undefined,
				width: imageSizeTablet ? imageSizeTablet + 'px' : undefined,
				'border-radius': imageBorderRadiusTablet ? ( imageBorderRadiusTablet.top ? imageBorderRadiusTablet.top : '0px' ) + ' ' + ( imageBorderRadiusTablet.right ? imageBorderRadiusTablet.right : '0px') + ' ' + ( imageBorderRadiusTablet.bottom ? imageBorderRadiusTablet.bottom : '0px' ) + ' ' + ( imageBorderRadiusTablet.left ? imageBorderRadiusTablet.left : '0px' ) : undefined,
				'margin-top': imageMarginTablet.top ? imageMarginTablet.top : undefined,
				'margin-right': imageMarginTablet.right ? imageMarginTablet.right : undefined,
				'margin-bottom': imageMarginTablet.bottom ? imageMarginTablet.bottom : undefined,
				'margin-left': imageMarginTablet.left ? imageMarginTablet.left : undefined,
			},
			'.pb-testimonial-info--name': {
				'font-size': nameFontSizeTablet
					? nameFontSizeTablet + nameFontSizeType
					: undefined,
				'margin-top': nameMarginTablet.top ? nameMarginTablet.top : undefined,
				'margin-right': nameMarginTablet.right ? nameMarginTablet.right : undefined,
				'margin-bottom': nameMarginTablet.bottom ? nameMarginTablet.bottom : undefined,
				'margin-left': nameMarginTablet.left ? nameMarginTablet.left : undefined,
			},
			'.pb-testimonial--content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + contentFontSizeType
					: undefined,
			},
			'.pb-testimonial--conr': {
				'margin-top': contentMarginTablet.top ? contentMarginTablet.top : undefined,
				'margin-right': contentMarginTablet.right ? contentMarginTablet.right : undefined,
				'margin-bottom': contentMarginTablet.bottom ? contentMarginTablet.bottom : undefined,
				'margin-left': contentMarginTablet.left ? contentMarginTablet.left : undefined,

				'padding-top': contentPaddingTablet.top ? contentPaddingTablet.top : undefined,
				'padding-right': contentPaddingTablet.right ? contentPaddingTablet.right : undefined,
				'padding-bottom': contentPaddingTablet.bottom ? contentPaddingTablet.bottom : undefined,
				'padding-left': contentPaddingTablet.left ? contentPaddingTablet.left : undefined,
				'border-radius': contentBorderRadiusTablet ? ( contentBorderRadiusTablet.top ? contentBorderRadiusTablet.top : '0px' ) + ' ' + ( contentBorderRadiusTablet.right ? contentBorderRadiusTablet.right : '0px') + ' ' + ( contentBorderRadiusTablet.bottom ? contentBorderRadiusTablet.bottom : '0px' ) + ' ' + ( contentBorderRadiusTablet.left ? contentBorderRadiusTablet.left : '0px' ) : undefined,
			},
			'.pb-testimonial-info--title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + titleFontSizeType
					: undefined,
				'margin-top': titleMarginTablet.top ? titleMarginTablet.top : undefined,
				'margin-right': titleMarginTablet.right ? titleMarginTablet.right : undefined,
				'margin-bottom': titleMarginTablet.bottom ? titleMarginTablet.bottom : undefined,
				'margin-left': titleMarginTablet.left ? titleMarginTablet.left : undefined,
			},
		},
		mobile: {
			
			'.pb-testimonial-image img': {
				height: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
				width: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
				'border-radius': imageBorderRadiusMobile ? ( imageBorderRadiusMobile.top ? imageBorderRadiusMobile.top : '0px' ) + ' ' + ( imageBorderRadiusMobile.right ? imageBorderRadiusMobile.right : '0px') + ' ' + ( imageBorderRadiusMobile.bottom ? imageBorderRadiusMobile.bottom : '0px' ) + ' ' + ( imageBorderRadiusMobile.left ? imageBorderRadiusMobile.left : '0px' ) : undefined,
				'margin-top': imageMarginMobile.top ? imageMarginMobile.top : undefined,
				'margin-right': imageMarginMobile.right ? imageMarginMobile.right : undefined,
				'margin-bottom': imageMarginMobile.bottom ? imageMarginMobile.bottom : undefined,
				'margin-left': imageMarginMobile.left ? imageMarginMobile.left : undefined,
				
			},
			'.pb-testimonial-info--name': {
				'font-size': nameFontSizeMobile
					? nameFontSizeMobile + nameFontSizeType
					: undefined,
				'margin-top': nameMarginMobile.top ? nameMarginMobile.top : undefined,
				'margin-right': nameMarginMobile.right ? nameMarginMobile.right : undefined,
				'margin-bottom': nameMarginMobile.bottom ? nameMarginMobile.bottom : undefined,
				'margin-left': nameMarginMobile.left ? nameMarginMobile.left : undefined,
				
			},
			'.pb-testimonial--content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + contentFontSizeType
					: undefined,
			},
			'.pb-testimonial--conr': {
				'margin-top': contentMarginMobile.top ? contentMarginMobile.top : undefined,
				'margin-right': contentMarginMobile.right ? contentMarginMobile.right : undefined,
				'margin-bottom': contentMarginMobile.bottom ? contentMarginMobile.bottom : undefined,
				'margin-left': contentMarginMobile.left ? contentMarginMobile.left : undefined,
				
				'padding-top': contentPaddingMobile.top ? contentPaddingMobile.top : undefined,
				'padding-right': contentPaddingMobile.right ? contentPaddingMobile.right : undefined,
				'padding-bottom': contentPaddingMobile.bottom ? contentPaddingMobile.bottom : undefined,
				'padding-left': contentPaddingMobile.left ? contentPaddingMobile.left : undefined,
				'border-radius': contentBorderRadiusMobile ? ( contentBorderRadiusMobile.top ? contentBorderRadiusMobile.top : '0px' ) + ' ' + ( contentBorderRadiusMobile.right ? contentBorderRadiusMobile.right : '0px') + ' ' + ( contentBorderRadiusMobile.bottom ? contentBorderRadiusMobile.bottom : '0px' ) + ' ' + ( contentBorderRadiusMobile.left ? contentBorderRadiusMobile.left : '0px' ) : undefined,
			},
			'.pb-testimonial-info--title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + titleFontSizeType
					: undefined,
				'margin-top': titleMarginMobile.top ? titleMarginMobile.top : undefined,
				'margin-right': titleMarginMobile.right ? titleMarginMobile.right : undefined,
				'margin-bottom': titleMarginMobile.bottom ? titleMarginMobile.bottom : undefined,
				'margin-left': titleMarginMobile.left ? titleMarginMobile.left : undefined,
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
			'border-radius': contentBorderRadius ? ( contentBorderRadius.top ? contentBorderRadius.top : '0px' ) + ' ' + ( contentBorderRadius.right ? contentBorderRadius.right : '0px') + ' ' + ( contentBorderRadius.bottom ? contentBorderRadius.bottom : '0px' ) + ' ' + ( contentBorderRadius.left ? contentBorderRadius.left : '0px' ) : undefined,
			'padding-top': contentPadding.top ? contentPadding.top : undefined,
			'padding-right': contentPadding.right ? contentPadding.right : undefined,
			'padding-bottom': contentPadding.bottom ? contentPadding.bottom : undefined,
			'padding-left': contentPadding.left ? contentPadding.left : undefined,
			
		};
		rules.desktop[ '.design-3 .pb-testimonial--content' ] = {
			color: contentColor ? contentColor : '#fff',
		};
		rules.tablet[ '.design-3 .pb-testimonial--conr' ] = {
			'border-radius': contentBorderRadiusTablet ? ( contentBorderRadiusTablet.top ? contentBorderRadiusTablet.top : '0px' ) + ' ' + ( contentBorderRadiusTablet.right ? contentBorderRadiusTablet.right : '0px') + ' ' + ( contentBorderRadiusTablet.bottom ? contentBorderRadiusTablet.bottom : '0px' ) + ' ' + ( contentBorderRadiusTablet.left ? contentBorderRadiusTablet.left : '0px' ) : '100px',
		};
		rules.mobile[ '.design-3 .pb-testimonial--conr' ] = {
			'border-radius': contentBorderRadiusMobile ? ( contentBorderRadiusMobile.top ? contentBorderRadiusMobile.top : '0px' ) + ' ' + ( contentBorderRadiusMobile.right ? contentBorderRadiusMobile.right : '0px') + ' ' + ( contentBorderRadiusMobile.bottom ? contentBorderRadiusMobile.bottom : '0px' ) + ' ' + ( contentBorderRadiusMobile.left ? contentBorderRadiusMobile.left : '0px' ) : '100px',
		};
		rules.desktop[ '.design-2 .pb-testimonial-info--name' ] = {
			color: nameColor ? nameColor : '#111',
		};
		rules.desktop[ '.design-2 .pb-testimonial-info--title' ] = {
			color: titleColor ? titleColor : '#111',
		};
	}


	const styles = renderStyle( rules, selectorPrefix );
	return styles;
};
export default Styles;
