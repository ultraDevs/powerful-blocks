import { renderStyle } from '../../components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,
		backgroundType,
		hoverBackgroundType,

		backgroundColor,
		hoverBackgroundColor,

		backgroundImg,
        backgroundImgPosition,
        backgroundImgSize,
        backgroundImgRepeat,
        backgroundImgAttachment,
        backgroundImgOverlayColor,
		backgroundOpacity,

		hoverBackgroundImg,
        hoverBackgroundImgPosition,
        hoverBackgroundImgSize,
        hoverBackgroundImgRepeat,
        hoverBackgroundImgAttachment,
        hoverBackgroundImgOverlayColor,
        hoverBackgroundOpacity,

		gradientValue,

        hoverGradientValue,

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
		hoverShadowColor,
        hoverShadowHOffset,
        hoverShadowVOffset,
        hoverShadowBlur,
        hoverShadowSpread,
		hoverShadowType,
		
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
		blockCustomWidthType,
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
	} = attributes;


	const selectorPrefix = `#pb-testimonial-${ blockId }`;


	let rules = {
		desktop: {
			'.pb-testimonial-wrapper': {
				background: 'image' !== backgroundType ? backgroundColor : gradientValue,
				background: 'image' !== backgroundType ? 'color' === backgroundType ? backgroundColor : gradientValue : '',
				display: 'flex',
				'flex-direction': 'column',
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
					'px ' + shadowColor,
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
				'z-index': blockzIndex ? blockzIndex : undefined,
			},
			'.pb-testimonial-wrapper:hover': {
				background: 'image' !== hoverBackgroundType ? 'color' === hoverBackgroundType ? hoverBackgroundColor : hoverGradientValue : '',
				'border-width': hoverBorderSize
					? hoverBorderSize + 'px'
					: undefined,
				'border-style': hoverBorderStyle ? hoverBorderStyle : undefined,
				'border-color': hoverBorderColor ? hoverBorderColor : undefined,
				'box-shadow':
					hoverShadowType + ' ' +
					hoverShadowHOffset +
					'px ' +
					hoverShadowVOffset +
					'px ' +
					hoverShadowBlur +
					'px ' +
					hoverShadowSpread +
					'px ' + hoverShadowColor,
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
					? nameFontWeight
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
					? titleFontWeight
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

	if ( 'image' === backgroundType ) {
		rules.desktop[ '.pb-ab-bg--image' ] = {
			'background': backgroundImg ? `url( ${ backgroundImg } )` : '',
			'background-position': backgroundImgPosition ? backgroundImgPosition : '',
			'background-repeat': backgroundImgRepeat ? backgroundImgRepeat : '',
			'background-attachment': backgroundImgAttachment ? backgroundImgAttachment : '',
			'background-size': backgroundImgSize ? backgroundImgSize : '',

		};
		rules.desktop[ '.pb-ab-bg--image:hover' ] = {
			'background': hoverBackgroundImg ? `url( ${ hoverBackgroundImg } )` : '',
			'background-position': hoverBackgroundImgPosition ? hoverBackgroundImgPosition : '',
			'background-repeat': hoverBackgroundImgRepeat ? hoverBackgroundImgRepeat : '',
			'background-attachment': hoverBackgroundImgAttachment ? hoverBackgroundImgAttachment : '',
			'background-size': hoverBackgroundImgSize ? hoverBackgroundImgSize : '',

		};
		rules.desktop[ '.pb-ab-bg--image:before' ] = {
			background: backgroundImgOverlayColor ? backgroundImgOverlayColor : '',
			opacity: backgroundOpacity ? ( backgroundOpacity / 100 ) : '',
			'border-radius':
					borderRadius.top +
					' ' +
					borderRadius.right +
					' ' +
					borderRadius.bottom +
					' ' +
					borderRadius.left,
		};
		rules.desktop[ '.pb-ab-bg--image:hover:before' ] = {
			background: hoverBackgroundImgOverlayColor ? hoverBackgroundImgOverlayColor : '',
			opacity: hoverBackgroundOpacity ? ( hoverBackgroundOpacity / 100 ) : '',
			'border-radius':
					borderRadius.top +
					' ' +
					borderRadius.right +
					' ' +
					borderRadius.bottom +
					' ' +
					borderRadius.left,
		};
	}

	if ( 'inline' === blockWidth ) {
		rules.desktop[ '.pb-b-e--width' ] = {
			display: 'inline-block',
			margin: 'auto',
		};
	}

	if ( 'custom' === blockWidth ) {
		rules.desktop[ '.pb-b-e--width' ] = {
			width: blockCustomWidth + blockCustomWidthType,
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.tablet[ '.pb-b-e--width' ] = {
			width: blockCustomWidthTablet + blockCustomWidthType,
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.mobile[ '.pb-b-e--width' ] = {
			width: blockCustomWidthMobile + blockCustomWidthType,
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


	const styles = renderStyle( rules, selectorPrefix );

	return styles;
};
export default Styles;
