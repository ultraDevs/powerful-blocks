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
		

		txtAlign,
		mType,
		iconSize,
		iconColor,
		iconBGColor,
		mPosition,
		mValign,
		imgHeightType,
		imgHeight,
		imgHeightTablet,
		imgHeightMobile,
		imgWidthType,
		imgWidth,
		imgWidthTablet,
		imgWidthMobile,
		mPadding,
		mPaddingTablet,
		mPaddingMobile,
		mMargin,
		mMarginTablet,
		mMarginMobile,
		mBorderStyle,
		mBorderSize,
		mBorderColor,
		hoverMBorderStyle,
		hoverMBorderSize,
		hoverMBorderColor,
		mBorderRadius,
		mBorderRadiusTablet,
		mBorderRadiusMobile,
		mOffsetType,
		mOffsetTop,
		mOffsetTopTablet,
		mOffsetTopMobile,
		mOffsetLeft,
		mOffsetLeftTablet,
		mOffsetLeftMobile,
		mShadowColor,
		mShadowHOffset,
		mShadowVOffset,
		mShadowBlur,
		mShadowSpread,
		mShadowType,
		hoverMShadowColor,
		hoverMShadowHOffset,
		hoverMShadowVOffset,
		hoverMShadowBlur,
		hoverMShadowSpread,
		hoverMShadowType,
		contentBPadding,
		contentBPaddingTablet,
		contentBPaddingMobile,
		titleColor,
		titleMargin,
		titleMarginTablet,
		titleMarginMobile,
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
		contentMargin,
		contentMarginTablet,
		contentMarginMobile,
		contentFontFamily,
		contentFontSizeType,
		contentFontStyle,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLineHeight,
		preset

	} = attributes;


	const selectorPrefix = `#pb-info-box-${ blockId }`;


	let rules = {
		desktop: {
			'.pb-info-box-wrapper': {
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
				'text-align': txtAlign ? txtAlign : undefined,
				'align-items': mValign ? mValign : undefined,
				height: blockHeight ? blockHeight + blockHeightType : undefined,
			},
			'.pb-info-box-wrapper:hover': {
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
			'.pb-info-box--m' : {
				padding:
				mPadding.top +
				' ' +
				mPadding.right +
				' ' +
				mPadding.bottom +
				' ' +
				mPadding.left,
			margin:
				mMargin.top +
				' ' +
				mMargin.right +
				' ' +
				mMargin.bottom +
				' ' +
				mMargin.left,
			'box-shadow':
				mShadowType + ' ' +
				mShadowHOffset +
				'px ' +
				mShadowVOffset +
				'px ' +
				mShadowBlur +
				'px ' +
				mShadowSpread +
				'px ' + mShadowColor,
			'border-width': mBorderSize
				? mBorderSize + 'px'
				: undefined,
			'border-style': mBorderStyle ? mBorderStyle : undefined,
			'border-color': mBorderColor ? mBorderColor : undefined,
			'border-radius':
				mBorderRadius.top +
				' ' +
				mBorderRadius.right +
				' ' +
				mBorderRadius.bottom +
				' ' +
				mBorderRadius.left,
				transform: `translate( ${ mOffsetLeft + mOffsetType },${ mOffsetTop+ mOffsetType })`
			},
			'.pb-info-box--icon' : {
				color: iconColor ? iconColor : undefined,
				background: iconBGColor ? iconBGColor : undefined,
				'font-size': iconSize ? iconSize + 'px' : undefined,
			},
			'.pb-info-box--image img' : {
				width: imgWidth ? imgWidth + imgWidthType : undefined,
				height: imgHeight ? imgHeight + imgHeightType : undefined,
			},
			'.pb-info-box--m:hover' : {
				'box-shadow': hoverMShadowType + ' ' +
				hoverMShadowHOffset +
					'px ' +
					hoverMShadowVOffset +
					'px ' +
					hoverMShadowBlur +
					'px ' +
					hoverMShadowSpread +
					'px ' + hoverMShadowColor,
				'border-width': hoverMBorderSize
					? hoverMBorderSize + 'px'
					: undefined,
				'border-style': hoverMBorderStyle ? hoverMBorderStyle : undefined,
				'border-color': hoverMBorderColor ? hoverMBorderColor : undefined,
			},
			'.pb-info-box--body' : {
				padding: contentBPadding.top +
				' ' +
				contentBPadding.right +
				' ' +
				contentBPadding.bottom +
				' ' +
				contentBPadding.left,
			},
			'.pb-info-box--body__title' : {
				margin: titleMargin.top +
				' ' +
				titleMargin.right +
				' ' +
				titleMargin.bottom +
				' ' +
				titleMargin.left,
				color: titleColor ? titleColor + '!important' : undefined,
				'font-size' : titleFontSize ? titleFontSize + titleFontSizeType : undefined,
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
			},
			'.pb-info-box--body__content' : {
				margin: contentMargin.top +
				' ' +
				contentMargin.right +
				' ' +
				contentMargin.bottom +
				' ' +
				contentMargin.left,
				
			},
			'.pb-info-box--body__content p' : {
				color: contentColor ? contentColor : undefined,
				'font-size' : contentFontSize ? contentFontSize + contentFontSizeTablet : undefined,
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
		},
		tablet: {
			'.pb-info-box-wrapper': {
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
			'.pb-info-box--m' : {
				padding:
				mPaddingTablet.top +
				' ' +
				mPaddingTablet.right +
				' ' +
				mPaddingTablet.bottom +
				' ' +
				mPaddingTablet.left,
			margin:
				mMarginTablet.top +
				' ' +
				mMarginTablet.right +
				' ' +
				mMarginTablet.bottom +
				' ' +
				mMarginTablet.left,
			'border-radius':
				mBorderRadiusTablet.top +
				' ' +
				mBorderRadiusTablet.right +
				' ' +
				mBorderRadiusTablet.bottom +
				' ' +
				mBorderRadiusTablet.left,
			transform: `translate( ${ mOffsetLeftTablet + mOffsetType },${ mOffsetTopTablet + mOffsetType })`
			
			},
			'.pb-info-box--image img' : {
				width: imgWidthTablet ? imgWidthTablet + imgWidthType : undefined,
				height: imgHeightTablet ? imgHeightTablet + imgHeightType : undefined,
			},
			'.pb-info-box--body' : {
				padding: contentBPaddingTablet.top +
				' ' +
				contentBPaddingTablet.right +
				' ' +
				contentBPaddingTablet.bottom +
				' ' +
				contentBPaddingTablet.left,
			},
			'.pb-info-box--body__title' : {
				margin: titleMarginTablet.top +
				' ' +
				titleMarginTablet.right +
				' ' +
				titleMarginTablet.bottom +
				' ' +
				titleMarginTablet.left,
				'font-size' : titleFontSizeTablet ? titleFontSizeTablet + titleFontSizeType : undefined,
			},
			'.pb-info-box--body__content' : {
				margin: contentMarginTablet.top +
				' ' +
				contentMarginTablet.right +
				' ' +
				contentMarginTablet.bottom +
				' ' +
				contentMarginTablet.left,
			},
			'.pb-info-box--body__content' : {
				'font-size' : contentFontSizeTablet ? contentFontSizeTablet + contentFontSizeTablet : undefined,
			},
		},
		mobile: {
			'.pb-info-box-wrapper': {
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
			'.pb-info-box--m' : {
				padding:
				mPaddingMobile.top +
				' ' +
				mPaddingMobile.right +
				' ' +
				mPaddingMobile.bottom +
				' ' +
				mPaddingMobile.left,
			margin:
				mMarginMobile.top +
				' ' +
				mMarginMobile.right +
				' ' +
				mMarginMobile.bottom +
				' ' +
				mMarginMobile.left,
			'border-radius':
				mBorderRadiusMobile.top +
				' ' +
				mBorderRadiusMobile.right +
				' ' +
				mBorderRadiusMobile.bottom +
				' ' +
				mBorderRadiusMobile.left,
			transform: `translate( ${ mOffsetLeftMobile + mOffsetType },${ mOffsetTopMobile + mOffsetType })`
			
			},
			'.pb-info-box--image img' : {
				width: imgWidthMobile ? imgWidthMobile + imgWidthType : undefined,
				height: imgHeightMobile ? imgHeightMobile + imgHeightType : undefined,
			},
			'.pb-info-box--body' : {
				padding: contentBPaddingMobile.top +
				' ' +
				contentBPaddingMobile.right +
				' ' +
				contentBPaddingMobile.bottom +
				' ' +
				contentBPaddingMobile.left,
			},
			'.pb-info-box--body__title' : {
				margin: titleMarginMobile.top +
				' ' +
				titleMarginMobile.right +
				' ' +
				titleMarginMobile.bottom +
				' ' +
				titleMarginMobile.left,
				'font-size' : titleFontSizeMobile ? titleFontSizeMobile + titleFontSizeType : undefined,
			},
			'.pb-info-box--body__content' : {
				margin: contentMarginMobile.top +
				' ' +
				contentMarginMobile.right +
				' ' +
				contentMarginMobile.bottom +
				' ' +
				contentMarginMobile.left,
			},
			'.pb-info-box--body__content p' : {
				
				'font-size' : contentFontSizeMobile ? contentFontSizeMobile + contentFontSizeTablet : undefined,
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

	const styles = renderStyle( rules, selectorPrefix );

	return styles;
};
export default Styles;