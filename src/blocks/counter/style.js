import { renderStyle } from '../../helper/utils';
import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,
		txtAlign,
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


	const selectorPrefix = `#pb-counter-${ blockId }`;


	let rules = {
		desktop: {
			'.pb-counter-wrapper': {
				'text-align': txtAlign ? txtAlign : undefined,
			},
			
			'.pb-counter' : {
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
			'.pb-counter--prefix': {
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
			'.pb-counter--suffix': {
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
			
			'.pb-counter' : {
				margin: numberMarginTablet.top +
				' ' +
				numberMarginTablet.right +
				' ' +
				numberMarginTablet.bottom +
				' ' +
				numberMarginTablet.left,
				'font-size' : numberFontSizeTablet ? numberFontSizeTablet + numberFontSizeTablet : undefined,
			},
			'.pb-counter--prefix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				margin: suffpreMarginTablet.top +
				' ' +
				suffpreMarginTablet.right +
				' ' +
				suffpreMarginTablet.bottom +
				' ' +
				suffpreMarginTablet.left,
			},
			'.pb-counter--suffix': {
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
			'.pb-counter' : {
				'font-size' : numberFontSizeMobile ? numberFontSizeMobile + numberFontSizeTablet : undefined,

				margin: numberMarginMobile.top +
				' ' +
				numberMarginMobile.right +
				' ' +
				numberMarginMobile.bottom +
				' ' +
				numberMarginMobile.left,
			},
			'.pb-counter--prefix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				margin: suffpreMarginMobile.top +
				' ' +
				suffpreMarginMobile.right +
				' ' +
				suffpreMarginMobile.bottom +
				' ' +
				suffpreMarginMobile.left,
			},
			'.pb-counter--suffix': {
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
