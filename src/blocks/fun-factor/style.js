import { renderStyle } from '../../helper/utils';
import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,
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
		numberBPadding,
		numberBPaddingTablet,
		numberBPaddingMobile,
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
		numberColor,
		numberMargin,
		numberMarginTablet,
		numberMarginMobile,
		numberFontFamily,
		numberFontSizeType,
		numberFontStyle,
		numberFontSize,
		numberFontSizeTablet,
		numberFontSizeMobile,
		numberFontWeight,
		numberTextTransform,
		numberTextDecoration,
		numberLetterSpacing,
		numberLineHeight,


		suffpreColor,
		suffpreMargin,
		suffpreMarginTablet,
		suffpreMarginMobile,
		suffpreFontFamily,
		suffpreFontSizeType,
		suffpreFontStyle,
		suffpreFontSize,
		suffpreFontSizeTablet,
		suffpreFontSizeMobile,
		suffpreFontWeight,
		suffpreTextTransform,
		suffpreTextDecoration,
		suffpreLetterSpacing,
		suffpreLineHeight,

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
			
				transform: `translate( ${ mOffsetLeft + mOffsetType },${ mOffsetTop+ mOffsetType })`
			},
			'.pb-fun-factor--icon' : {
				color: iconColor ? iconColor : undefined,
				background: iconBGColor ? iconBGColor : undefined,
				'font-size': iconSize ? iconSize + 'px' : undefined,
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
			},
			'.pb-fun-factor--image img' : {
				width: imgWidth ? imgWidth + imgWidthType : undefined,
				height: imgHeight ? imgHeight + imgHeightType : undefined,
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
			},
			'.pb-fun-factor--m:hover .pb-fun-factor--icon' : {
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
			'.pb-fun-factor--m:hover .pb-fun-factor--image img' : {
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
				padding: numberBPadding.top +
				' ' +
				numberBPadding.right +
				' ' +
				numberBPadding.bottom +
				' ' +
				numberBPadding.left,
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
			'.pb-fun-factor-number' : {
				color: numberColor ? numberColor : undefined,
				'font-family': numberFontFamily
					? numberFontFamily + '!important'
					: undefined,
				'font-size': numberFontSize
					? numberFontSize + numberFontSizeType
					: undefined,
				'font-weight': numberFontWeight
					? numberFontWeight + '!important'
					: undefined,
				'font-style': numberFontStyle
					? numberFontStyle
					: undefined,
				'letter-spacing': numberLetterSpacing
					? numberLetterSpacing + 'px'
					: undefined,
				'line-height': numberLineHeight
					? numberLineHeight + 'px'
					: undefined,
				'text-transform': numberTextTransform
					? numberTextTransform
					: undefined,
				'text-decoration': numberTextDecoration
					? numberTextDecoration
					: undefined,
				margin: numberMargin.top +
				' ' +
				numberMargin.right +
				' ' +
				numberMargin.bottom +
				' ' +
				numberMargin.left,
				
			},
			'.pb-fun-factor-number--prefix': {
				color: suffpreColor ? suffpreColor : undefined,
				'font-size' : suffpreFontSize ? suffpreFontSize + suffpreFontSizeType : undefined,
				'font-family': suffpreFontFamily
					? suffpreFontFamily + '!important'
					: undefined,
				'font-weight': suffpreFontWeight
					? suffpreFontWeight + '!important'
					: undefined,
				'font-style': suffpreFontStyle
					? suffpreFontStyle
					: undefined,
				'letter-spacing': suffpreLetterSpacing
					? suffpreLetterSpacing + 'px'
					: undefined,
				'line-height': suffpreLineHeight
					? suffpreLineHeight + 'px'
					: undefined,
				'text-transform': suffpreTextTransform
					? suffpreTextTransform
					: undefined,
				'text-decoration': suffpreTextDecoration
					? suffpreTextDecoration
					: undefined,
				margin: suffpreMargin.top +
				' ' +
				suffpreMargin.right +
				' ' +
				suffpreMargin.bottom +
				' ' +
				suffpreMargin.left,
			},
			'.pb-fun-factor-number--suffix': {
				color: suffpreColor ? suffpreColor : undefined,
				'font-size' : suffpreFontSize ? suffpreFontSize + suffpreFontSizeType : undefined,
				'font-family': suffpreFontFamily
					? suffpreFontFamily + '!important'
					: undefined,
				'font-weight': suffpreFontWeight
					? suffpreFontWeight + '!important'
					: undefined,
				'font-style': suffpreFontStyle
					? suffpreFontStyle
					: undefined,
				'letter-spacing': suffpreLetterSpacing
					? suffpreLetterSpacing + 'px'
					: undefined,
				'line-height': suffpreLineHeight
					? suffpreLineHeight + 'px'
					: undefined,
				'text-transform': suffpreTextTransform
					? suffpreTextTransform
					: undefined,
				'text-decoration': suffpreTextDecoration
					? suffpreTextDecoration
					: undefined,
				margin: suffpreMargin.top +
				' ' +
				suffpreMargin.right +
				' ' +
				suffpreMargin.bottom +
				' ' +
				suffpreMargin.left,
			}
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
				padding: numberBPaddingTablet.top +
				' ' +
				numberBPaddingTablet.right +
				' ' +
				numberBPaddingTablet.bottom +
				' ' +
				numberBPaddingTablet.left,
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
			'.pb-fun-factor-number' : {
				margin: numberMarginTablet.top +
				' ' +
				numberMarginTablet.right +
				' ' +
				numberMarginTablet.bottom +
				' ' +
				numberMarginTablet.left,
			},
			'.pb-fun-factor-number' : {
				'font-size' : numberFontSizeTablet ? numberFontSizeTablet + numberFontSizeTablet : undefined,
			},
			'.pb-fun-factor-number--prefix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				margin: suffpreMarginTablet.top +
				' ' +
				suffpreMarginTablet.right +
				' ' +
				suffpreMarginTablet.bottom +
				' ' +
				suffpreMarginTablet.left,
			},
			'.pb-fun-factor-number--suffix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				margin: suffpreMarginTablet.top +
				' ' +
				suffpreMarginTablet.right +
				' ' +
				suffpreMarginTablet.bottom +
				' ' +
				suffpreMarginTablet.left,
			}
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
				padding: numberBPaddingMobile.top +
				' ' +
				numberBPaddingMobile.right +
				' ' +
				numberBPaddingMobile.bottom +
				' ' +
				numberBPaddingMobile.left,
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
			'.pb-fun-factor-number' : {
				'font-size' : numberFontSizeMobile ? numberFontSizeMobile + numberFontSizeTablet : undefined,

				margin: numberMarginMobile.top +
				' ' +
				numberMarginMobile.right +
				' ' +
				numberMarginMobile.bottom +
				' ' +
				numberMarginMobile.left,
			},
			'.pb-fun-factor-number--prefix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				margin: suffpreMarginMobile.top +
				' ' +
				suffpreMarginMobile.right +
				' ' +
				suffpreMarginMobile.bottom +
				' ' +
				suffpreMarginMobile.left,
			},
			'.pb-fun-factor-number--suffix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				margin: suffpreMarginMobile.top +
				' ' +
				suffpreMarginMobile.right +
				' ' +
				suffpreMarginMobile.bottom +
				' ' +
				suffpreMarginMobile.left,
			}
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
