import { renderStyle } from '../../helper/utils';
import AdvancedCSS from '../../helper/advancedCSS';

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


	const selectorPrefix = `#pb-fun-factor-${ blockId }`;


	let rules = {
		desktop: {
			'.pb-fun-factor-wrapper': {
				'text-align': txtAlign ? txtAlign : undefined,
				'align-items': mValign ? mValign : undefined,
			},
			'.pb-fun-factor--m' : {
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
			'.pb-fun-factor--icon' : {
				color: iconColor ? iconColor : undefined,
				background: iconBGColor ? iconBGColor : undefined,
				'font-size': iconSize ? iconSize + 'px' : undefined,
			},
			'.pb-fun-factor--image img' : {
				width: imgWidth ? imgWidth + imgWidthType : undefined,
				height: imgHeight ? imgHeight + imgHeightType : undefined,
			},
			'.pb-fun-factor--m:hover' : {
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
			'.pb-fun-factor--body' : {
				padding: contentBPadding.top +
				' ' +
				contentBPadding.right +
				' ' +
				contentBPadding.bottom +
				' ' +
				contentBPadding.left,
				'margin-top': mOffsetTop ? mOffsetTop + mOffsetType : undefined,

			},
			'.pb-fun-factor--body__title' : {
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
					? titleFontFamily + '!important'
					: undefined,
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
			},
			'.pb-fun-factor--body__content' : {
				margin: contentMargin.top +
				' ' +
				contentMargin.right +
				' ' +
				contentMargin.bottom +
				' ' +
				contentMargin.left,
				
			},
			'.pb-fun-factor--body__content p' : {
				color: contentColor ? contentColor : undefined,
				'font-size' : contentFontSize ? contentFontSize + contentFontSizeTablet : undefined,
				'font-family': contentFontFamily
					? contentFontFamily + '!important'
					: undefined,
				'font-size': contentFontSize
					? contentFontSize + contentFontSizeType
					: undefined,
				'font-weight': contentFontWeight
					? contentFontWeight + '!important'
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
			'.pb-fun-factor--m' : {
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
			'.pb-fun-factor--image img' : {
				width: imgWidthTablet ? imgWidthTablet + imgWidthType : undefined,
				height: imgHeightTablet ? imgHeightTablet + imgHeightType : undefined,
			},
			'.pb-fun-factor--body' : {
				padding: contentBPaddingTablet.top +
				' ' +
				contentBPaddingTablet.right +
				' ' +
				contentBPaddingTablet.bottom +
				' ' +
				contentBPaddingTablet.left,
				'margin-top': mOffsetTopTablet ? mOffsetTopTablet + mOffsetType : undefined,

			},
			'.pb-fun-factor--body__title' : {
				margin: titleMarginTablet.top +
				' ' +
				titleMarginTablet.right +
				' ' +
				titleMarginTablet.bottom +
				' ' +
				titleMarginTablet.left,
				'font-size' : titleFontSizeTablet ? titleFontSizeTablet + titleFontSizeType : undefined,
			},
			'.pb-fun-factor--body__content' : {
				margin: contentMarginTablet.top +
				' ' +
				contentMarginTablet.right +
				' ' +
				contentMarginTablet.bottom +
				' ' +
				contentMarginTablet.left,
			},
			'.pb-fun-factor--body__content' : {
				'font-size' : contentFontSizeTablet ? contentFontSizeTablet + contentFontSizeTablet : undefined,
			},
		},
		mobile: {
			
			'.pb-fun-factor--m' : {
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
			'.pb-fun-factor--image img' : {
				width: imgWidthMobile ? imgWidthMobile + imgWidthType : undefined,
				height: imgHeightMobile ? imgHeightMobile + imgHeightType : undefined,
			},
			'.pb-fun-factor--body' : {
				padding: contentBPaddingMobile.top +
				' ' +
				contentBPaddingMobile.right +
				' ' +
				contentBPaddingMobile.bottom +
				' ' +
				contentBPaddingMobile.left,
				'margin-top': mOffsetTopMobile ? mOffsetTopMobile + mOffsetType : undefined,

			},
			'.pb-fun-factor--body__title' : {
				margin: titleMarginMobile.top +
				' ' +
				titleMarginMobile.right +
				' ' +
				titleMarginMobile.bottom +
				' ' +
				titleMarginMobile.left,
				'font-size' : titleFontSizeMobile ? titleFontSizeMobile + titleFontSizeType : undefined,
			},
			'.pb-fun-factor--body__content' : {
				margin: contentMarginMobile.top +
				' ' +
				contentMarginMobile.right +
				' ' +
				contentMarginMobile.bottom +
				' ' +
				contentMarginMobile.left,
			},
			'.pb-fun-factor--body__content p' : {
				
				'font-size' : contentFontSizeMobile ? contentFontSizeMobile + contentFontSizeTablet : undefined,
			},
		},
	};

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
