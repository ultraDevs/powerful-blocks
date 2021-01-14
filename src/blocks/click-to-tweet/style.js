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

		textAlign,
		textColor,
		textSize,
		textSizeTablet,
		textSizeMobile,

		tFontFamily,
		tFontSizeType,
		tFontStyle,
		tFontWeight,
		tTextTransform,
		tTextDecoration,
		tLetterSpacing,
		tLineHeight,

		btnBackgroundColor,
		btnTxtColor,
		btnFontSize,
		btnFontSizeTablet,
		btnFontSizeMobile,

		btnFontFamily,
		btnFontSizeType,
		btnFontStyle,
		btnFontWeight,
		btnTextTransform,
		btnTextDecoration,
		btnLetterSpacing,
		btnLineHeight,

		btnPadding,
		btnBorderRadius,
		btnBorderStyle,
		btnBorderWidth,
		btnBorderColor,
	} = attributes;

	const selectorPrefix = `#pb-click-to-tweet-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-click-to-tweet-wrapper': {
				'text-align': textAlign ? textAlign : undefined,
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
			'.pb-click-to-tweet-wrapper:hover': {
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
			'.pb-click-to-tweet--text': {
				color: textColor ? textColor : undefined,
				'font-size': textSize ? textSize + tFontSizeType : undefined,
				'font-family': tFontFamily
					? tFontFamily
					: undefined,
				'font-weight': tFontWeight
					? tFontWeight
					: undefined,
				'font-style': tFontStyle
					? tFontStyle
					: undefined,
				'letter-spacing': tLetterSpacing
					? tLetterSpacing + 'px'
					: undefined,
				'line-height': tLineHeight
					? tLineHeight + 'px'
					: undefined,
				'text-transform': tTextTransform
					? tTextTransform
					: undefined,
				'text-decoration': tTextDecoration
					? tTextDecoration
					: undefined,
			},
			'.pb-click-to-tweet--button': {
				'background-color': btnBackgroundColor
					? btnBackgroundColor
					: undefined,
				color: btnTxtColor ? btnTxtColor : undefined,
				'font-size': btnFontSize ? btnFontSize + btnFontSizeType : undefined,
				'font-family': btnFontFamily
					? btnFontFamily
					: undefined,
				'font-weight': btnFontWeight
					? btnFontWeight
					: undefined,
				'font-style': btnFontStyle
					? btnFontStyle
					: undefined,
				'letter-spacing': btnLetterSpacing
					? btnLetterSpacing + 'px'
					: undefined,
				'line-height': btnLineHeight
					? btnLineHeight + 'px'
					: undefined,
				'text-transform': btnTextTransform
					? btnTextTransform
					: undefined,
				'text-decoration': btnTextDecoration
					? btnTextDecoration
					: undefined,
				padding:
					btnPadding.top +
					' ' +
					btnPadding.right +
					' ' +
					btnPadding.bottom +
					' ' +
					btnPadding.left,
				'border-radius':
					btnBorderRadius.top +
					' ' +
					btnBorderRadius.right +
					' ' +
					btnBorderRadius.bottom +
					' ' +
					btnBorderRadius.left,
				'border-style': btnBorderStyle ? btnBorderStyle : undefined,
				'border-width': btnBorderWidth
					? btnBorderWidth + 'px'
					: undefined,
				'border-color': btnTxtColor ? btnTxtColor : undefined,
			},
		},
		tablet: {
			'.pb-click-to-tweet-wrapper': {
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
				height: blockHeightTablet ? blockHeightTablet + blockHeightType : undefined,
			},
			'.pb-click-to-tweet--text': {
				'font-size': textSizeTablet ? textSizeTablet + tFontSizeType : undefined,
			},
			'.pb-click-to-tweet--button': {
				'font-size': btnFontSizeTablet
					? btnFontSizeTablet + btnFontSizeType
					: undefined,
			},
		},
		mobile: {
			'.pb-click-to-tweet-wrapper': {
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
				height: blockHeightMobile ? blockHeightMobile + blockHeightType : undefined,
			},
			'.pb-click-to-tweet--text': {
				'font-size': textSizeMobile ? textSizeMobile + tFontSizeType : undefined,
			},
			'.pb-click-to-tweet--button': {
				'font-size': btnFontSizeMobile
					? btnFontSizeMobile + btnFontSizeType
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
