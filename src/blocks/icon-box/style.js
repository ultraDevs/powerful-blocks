import { renderStyle } from '../../helper/utils';
import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,
		txtAlign,
		icon,
		iconColor,
		iconSize,
		iconBGColor,
		
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
		
		preset,

	} = attributes;


	const selectorPrefix = `#pb-icon-box-${ blockId }`;


	let rules = {
		desktop: {
			'.pb-icon-box-wrapper': {
				'text-align': txtAlign ? txtAlign : undefined,
			},
			'.pb-icon-box--m' : {
				'margin-top': mMargin.top ? mMargin.top : undefined,
				'margin-right': mMargin.right ? mMargin.right : undefined,
				'margin-bottom': mMargin.bottom ? mMargin.bottom : undefined,
				'margin-left': mMargin.left ? mMargin.left : undefined,

				'padding-top': mPadding.top ? mPadding.top : undefined,
				'padding-right': mPadding.right ? mPadding.right : undefined,
				'padding-bottom': mPadding.bottom ? mPadding.bottom : undefined,
				'padding-left': mPadding.left ? mPadding.left : undefined,
				transform: `translate( ${ mOffsetLeft + mOffsetType },${ mOffsetTop+ mOffsetType })`
			},
			'.pb-icon-box--icon' : {
				color: iconColor ? iconColor : undefined,
				background: iconBGColor ? iconBGColor : undefined,
				'font-size': iconSize ? iconSize + 'px' : undefined,
				'box-shadow': mShadowColor ? mShadowType + ' ' +
				mShadowHOffset +
				'px ' +
				mShadowVOffset +
				'px ' +
				mShadowBlur +
				'px ' +
				mShadowSpread +
				'px ' + mShadowColor : undefined,
			'border-width': mBorderSize
				? mBorderSize + 'px'
				: undefined,
			'border-style': mBorderStyle ? mBorderStyle : undefined,
			'border-color': mBorderColor ? mBorderColor : undefined,
			'border-radius': mBorderRadius ? ( mBorderRadius.top ? mBorderRadius.top : '0px' ) + ' ' + ( mBorderRadius.right ? mBorderRadius.right : '0px') + ' ' + ( mBorderRadius.bottom ? mBorderRadius.bottom : '0px' ) + ' ' + ( mBorderRadius.left ? mBorderRadius.left : '0px' ) : undefined,
			},
			
			'.pb-icon-box--m:hover .pb-icon-box--icon': {
				'box-shadow': hoverMShadowColor ? hoverMShadowType + ' ' +
				hoverMShadowHOffset +
					'px ' +
					hoverMShadowVOffset +
					'px ' +
					hoverMShadowBlur +
					'px ' +
					hoverMShadowSpread +
					'px ' + hoverMShadowColor : undefined,
				'border-width': hoverMBorderSize
					? hoverMBorderSize + 'px'
					: undefined,
				'border-style': hoverMBorderStyle ? hoverMBorderStyle : undefined,
				'border-color': hoverMBorderColor ? hoverMBorderColor : undefined,
			},
			'.pb-icon-box--body' : {
				'padding-top': contentBPadding.top ? contentBPadding.top : undefined,
				'padding-right': contentBPadding.right ? contentBPadding.right : undefined,
				'padding-bottom': contentBPadding.bottom ? contentBPadding.bottom : undefined,
				'padding-left': contentBPadding.left ? contentBPadding.left : undefined,
				
				'margin-top': mOffsetTop ? mOffsetTop + mOffsetType : undefined,
			},
			'.pb-icon-box--body__title' : {
				
				color: titleColor ? titleColor + '!important' : undefined,
				'font-size' : titleFontSize ? titleFontSize + titleFontSizeType : undefined,
				'font-family': titleFontFamily
					? titleFontFamily + '!important'
					: undefined,
				'font-weight': titleFontWeight
					? titleFontWeight  + '!important'
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
				'margin-top': titleMargin.top ? titleMargin.top : undefined,
				'margin-right': titleMargin.right ? titleMargin.right : undefined,
				'margin-bottom': titleMargin.bottom ? titleMargin.bottom : undefined,
				'margin-left': titleMargin.left ? titleMargin.left : undefined,
			},
			
		},
		tablet: {
			'.pb-icon-box--m' : {
				'margin-top': mMarginTablet.top ? mMarginTablet.top : undefined,
				'margin-right': mMarginTablet.right ? mMarginTablet.right : undefined,
				'margin-bottom': mMarginTablet.bottom ? mMarginTablet.bottom : undefined,
				'margin-left': mMarginTablet.left ? mMarginTablet.left : undefined,
				
				'padding-top': mPaddingTablet.top ? mPaddingTablet.top : undefined,
				'padding-right': mPaddingTablet.right ? mPaddingTablet.right : undefined,
				'padding-bottom': mPaddingTablet.bottom ? mPaddingTablet.bottom : undefined,
				'padding-left': mPaddingTablet.left ? mPaddingTablet.left : undefined,
				transform: `translate( ${ mOffsetLeftTablet + mOffsetType },${ mOffsetTopTablet + mOffsetType })`
			},
			'.pb-icon-box--icon' : {
				'border-radius': mBorderRadiusTablet ? ( mBorderRadiusTablet.top ? mBorderRadiusTablet.top : '0px' ) + ' ' + ( mBorderRadiusTablet.right ? mBorderRadiusTablet.right : '0px') + ' ' + ( mBorderRadiusTablet.bottom ? mBorderRadiusTablet.bottom : '0px' ) + ' ' + ( mBorderRadiusTablet.left ? mBorderRadiusTablet.left : '0px' ) : undefined,
			},
			
			'.pb-icon-box--body' : {
				'padding-top': contentBPaddingTablet.top ? contentBPaddingTablet.top : undefined,
				'padding-right': contentBPaddingTablet.right ? contentBPaddingTablet.right : undefined,
				'padding-bottom': contentBPaddingTablet.bottom ? contentBPaddingTablet.bottom : undefined,
				'padding-left': contentBPaddingTablet.left ? contentBPaddingTablet.left : undefined,
				
				'margin-top': mOffsetTopTablet ? mOffsetTopTablet + mOffsetType : undefined,

			},
			'.pb-icon-box--body__title' : {
				'margin-top': titleMarginTablet.top ? titleMarginTablet.top : undefined,
				'margin-right': titleMarginTablet.right ? titleMarginTablet.right : undefined,
				'margin-bottom': titleMarginTablet.bottom ? titleMarginTablet.bottom : undefined,
				'margin-left': titleMarginTablet.left ? titleMarginTablet.left : undefined,
				'font-size' : titleFontSizeTablet ? titleFontSizeTablet + titleFontSizeType : undefined,
			},
			
		},
		mobile: {
			
			'.pb-icon-box--m' : {
				'margin-top': mMarginMobile.top ? mMarginMobile.top : undefined,
				'margin-right': mMarginMobile.right ? mMarginMobile.right : undefined,
				'margin-bottom': mMarginMobile.bottom ? mMarginMobile.bottom : undefined,
				'margin-left': mMarginMobile.left ? mMarginMobile.left : undefined,

				'padding-top': mPaddingMobile.top ? mPaddingMobile.top : undefined,
				'padding-right': mPaddingMobile.right ? mPaddingMobile.right : undefined,
				'padding-bottom': mPaddingMobile.bottom ? mPaddingMobile.bottom : undefined,
				'padding-left': mPaddingMobile.left ? mPaddingMobile.left : undefined,
				transform: `translate( ${ mOffsetLeftMobile + mOffsetType },${ mOffsetTopMobile + mOffsetType })`
			
			},

			'.pb-icon-box--icon' : {
				'border-radius': mBorderRadiusMobile ? ( mBorderRadiusMobile.top ? mBorderRadiusMobile.top : '0px' ) + ' ' + ( mBorderRadiusMobile.right ? mBorderRadiusMobile.right : '0px') + ' ' + ( mBorderRadiusMobile.bottom ? mBorderRadiusMobile.bottom : '0px' ) + ' ' + ( mBorderRadiusMobile.left ? mBorderRadiusMobile.left : '0px' ) : undefined,
			},
			'.pb-icon-box--body' : {
				'padding-top': contentBPaddingMobile.top ? contentBPaddingMobile.top : undefined,
				'padding-right': contentBPaddingMobile.right ? contentBPaddingMobile.right : undefined,
				'padding-bottom': contentBPaddingMobile.bottom ? contentBPaddingMobile.bottom : undefined,
				'padding-left': contentBPaddingMobile.left ? contentBPaddingMobile.left : undefined,
				'margin-top': mOffsetTopMobile ? mOffsetTopMobile + mOffsetType : undefined,

			},
			'.pb-icon-box--body__title' : {
				'margin-top': titleMarginMobile.top ? titleMarginMobile.top : undefined,
				'margin-right': titleMarginMobile.right ? titleMarginMobile.right : undefined,
				'margin-bottom': titleMarginMobile.bottom ? titleMarginMobile.bottom : undefined,
				'margin-left': titleMarginMobile.left ? titleMarginMobile.left : undefined,
				'font-size' : titleFontSizeMobile ? titleFontSizeMobile + titleFontSizeType : undefined,
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
