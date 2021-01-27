import { renderStyle } from '../../helper/utils';

import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		txtAlign,
		loadingBarColor,

		animatedTextColor,
		animatedTextMargin,
		animatedTextMarginTablet,
		animatedTextMarginMobile,
		animatedTextFontFamily,
		animatedTextFontSizeType,
		animatedTextFontStyle,
		animatedTextFontSize,
		animatedTextFontSizeTablet,
		animatedTextFontSizeMobile,
		animatedTextFontWeight,
		animatedTextTextTransform,
		animatedTextTextDecoration,
		animatedTextLetterSpacing,
		animatedTextLineHeight,


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
	} = attributes;

	const selectorPrefix = `#pb-animated-text-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-animated-text-wrapper': {
				'text-align': txtAlign ? txtAlign : undefined,
			},
			
			'.pb-animated-text' : {
				color: animatedTextColor ? animatedTextColor : undefined,
				'font-family': animatedTextFontFamily
					? animatedTextFontFamily + '!important'
					: undefined,
				'font-size': animatedTextFontSize
					? animatedTextFontSize + animatedTextFontSizeType
					: undefined,
				'font-weight': animatedTextFontWeight
					? animatedTextFontWeight + '!important'
					: undefined,
				'font-style': animatedTextFontStyle
					? animatedTextFontStyle
					: undefined,
				'letter-spacing': animatedTextLetterSpacing
					? animatedTextLetterSpacing + 'px'
					: undefined,
				'line-height': animatedTextLineHeight
					? animatedTextLineHeight + 'px'
					: undefined,
				'text-transform': animatedTextTextTransform
					? animatedTextTextTransform
					: undefined,
				'text-decoration': animatedTextTextDecoration
					? animatedTextTextDecoration
					: undefined,
				margin: animatedTextMargin.top +
				' ' +
				animatedTextMargin.right +
				' ' +
				animatedTextMargin.bottom +
				' ' +
				animatedTextMargin.left,
				
			},
			'.animation-text--content:after' : {
				'background': loadingBarColor ? loadingBarColor : undefined,
			},
			'.pb-animated-text--prefix': {
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
			'.pb-animated-text--suffix': {
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
			
			'.pb-animated-text' : {
				margin: animatedTextMarginTablet.top +
				' ' +
				animatedTextMarginTablet.right +
				' ' +
				animatedTextMarginTablet.bottom +
				' ' +
				animatedTextMarginTablet.left,
				'font-size' : animatedTextFontSizeTablet ? animatedTextFontSizeTablet + animatedTextFontSizeTablet : undefined,
			},
			'.pb-animated-text--prefix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				margin: suffpreMarginTablet.top +
				' ' +
				suffpreMarginTablet.right +
				' ' +
				suffpreMarginTablet.bottom +
				' ' +
				suffpreMarginTablet.left,
			},
			'.pb-animated-text--suffix': {
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
			'.pb-animated-text' : {
				'font-size' : animatedTextFontSizeMobile ? animatedTextFontSizeMobile + animatedTextFontSizeTablet : undefined,

				margin: animatedTextMarginMobile.top +
				' ' +
				animatedTextMarginMobile.right +
				' ' +
				animatedTextMarginMobile.bottom +
				' ' +
				animatedTextMarginMobile.left,
			},
			'.pb-animated-text--prefix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				margin: suffpreMarginMobile.top +
				' ' +
				suffpreMarginMobile.right +
				' ' +
				suffpreMarginMobile.bottom +
				' ' +
				suffpreMarginMobile.left,
			},
			'.pb-animated-text--suffix': {
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
