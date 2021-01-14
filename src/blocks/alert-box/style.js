import { renderStyle } from '../../components/utils';

const Styles = ( props ) => {
	const { attributes } = props;

	const {
		blockId,
		abBorderRadius,
		abBorderRadiusTablet,
		abBorderRadiusMobile,
		abPadding,
		abPaddingTablet,
		abPaddingMobile,
		bottomSpace,
		textAlign,
		titleColor,

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

		contentColor,
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
		
		blockHeightType,
        blockHeight,
        blockHeightMobile,
		blockHeightTablet,
		
		blockWidth,
		blockCustomWidthType,
        blockCustomWidth,
        blockCustomWidthTablet,
        blockCustomWidthMobile,
        blockzIndex,
	} = attributes;

	const selectorPrefix = `#pb-alert-box-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-alert-box-wrapper': {
				background: 'image' !== backgroundType ? backgroundColor : gradientValue,
				background: 'image' !== backgroundType ? 'color' === backgroundType ? backgroundColor : gradientValue : '',
				
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
				'z-index': blockzIndex ? blockzIndex : undefined,
				height: blockHeight ? blockHeight + blockHeightType : undefined,
			},
			'.pb-alert-box-wrapper:hover': {
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
			'.pb-alert-box': {
				
				'text-align': textAlign ? textAlign : undefined,
				padding:
					abPadding.top +
					' ' +
					abPadding.right +
					' ' +
					abPadding.bottom +
					' ' +
					abPadding.left,
				'border-radius':
					abBorderRadius.top +
					' ' +
					abBorderRadius.right +
					' ' +
					abBorderRadius.bottom +
					' ' +
					abBorderRadius.left,
			},
			'.pb-alert-box__title': {
				'font-size': titleFontSize ? titleFontSize + titleFontSizeType : undefined,
				color: titleColor ? titleColor : undefined,
				'font-family': titleFontFamily
					? titleFontFamily
					: undefined,
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
				'margin-bottom': bottomSpace ? bottomSpace + 'px' : undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSize
					? contentFontSize + contentFontSizeType
					: undefined,
				'font-family': contentFontFamily
					? contentFontFamily
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
				color: contentColor ? contentColor : undefined,
			},
		},
		tablet: {
			'.pb-alert-box-wrapper': {
				padding:
					abPaddingTablet.top +
					' ' +
					abPaddingTablet.right +
					' ' +
					abPaddingTablet.bottom +
					' ' +
					abPaddingTablet.left,
				'border-radius':
					abBorderRadiusTablet.top +
					' ' +
					abBorderRadiusTablet.right +
					' ' +
					abBorderRadiusTablet.bottom +
					' ' +
					abBorderRadiusTablet.left,
				height: blockHeightTablet ? blockHeightTablet + blockHeightType : undefined,
				
			},
			'.pb-alert-box__title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + titleFontSizeType
					: undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + contentFontSizeType
					: undefined,
			},
		},
		mobile: {
			'.pb-alert-box-wrapper': {
				padding:
					abPaddingMobile.top +
					' ' +
					abPaddingMobile.right +
					' ' +
					abPaddingMobile.bottom +
					' ' +
					abPaddingMobile.left,
				'border-radius':
					abBorderRadiusMobile.top +
					' ' +
					abBorderRadiusMobile.right +
					' ' +
					abBorderRadiusMobile.bottom +
					' ' +
					abBorderRadiusMobile.left,
				height: blockHeightMobile ? blockHeightMobile + blockHeightType : undefined,
				
			},
			'.pb-alert-box__title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + titleFontSizeType
					: undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + contentFontSizeType
					: undefined,
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

	return renderStyle( rules, selectorPrefix );
};

export default Styles;
