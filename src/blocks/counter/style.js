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
				'margin-top': numberMargin.top ? numberMargin.top : undefined,
				'margin-right': numberMargin.right ? numberMargin.right : undefined,
				'margin-bottom': numberMargin.bottom ? numberMargin.bottom : undefined,
				'margin-left': numberMargin.left ? numberMargin.left : undefined,
				
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
				'margin-top': suffpreMargin.top ? suffpreMargin.top : undefined,
				'margin-right': suffpreMargin.right ? suffpreMargin.right : undefined,
				'margin-bottom': suffpreMargin.bottom ? suffpreMargin.bottom : undefined,
				'margin-left': suffpreMargin.left ? suffpreMargin.left : undefined,
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

				'margin-top': suffpreMargin.top ? suffpreMargin.top : undefined,
				'margin-right': suffpreMargin.right ? suffpreMargin.right : undefined,
				'margin-bottom': suffpreMargin.bottom ? suffpreMargin.bottom : undefined,
				'margin-left': suffpreMargin.left ? suffpreMargin.left : undefined,
			}
		},
		tablet: {
			
			'.pb-counter' : {
				
				'margin-top': numberMarginTablet.top ? numberMarginTablet.top : undefined,
				'margin-right': numberMarginTablet.right ? numberMarginTablet.right : undefined,
				'margin-bottom': numberMarginTablet.bottom ? numberMarginTablet.bottom : undefined,
				'margin-left': numberMarginTablet.left ? numberMarginTablet.left : undefined,
				'font-size' : numberFontSizeTablet ? numberFontSizeTablet + numberFontSizeTablet : undefined,
			},
			'.pb-counter--prefix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginTablet.top ? suffpreMarginTablet.top : undefined,
				'margin-right': suffpreMarginTablet.right ? suffpreMarginTablet.right : undefined,
				'margin-bottom': suffpreMarginTablet.bottom ? suffpreMarginTablet.bottom : undefined,
				'margin-left': suffpreMarginTablet.left ? suffpreMarginTablet.left : undefined,
			},
			'.pb-counter--suffix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginTablet.top ? suffpreMarginTablet.top : undefined,
				'margin-right': suffpreMarginTablet.right ? suffpreMarginTablet.right : undefined,
				'margin-bottom': suffpreMarginTablet.bottom ? suffpreMarginTablet.bottom : undefined,
				'margin-left': suffpreMarginTablet.left ? suffpreMarginTablet.left : undefined,
			}
		},
		mobile: {
			'.pb-counter' : {
				'font-size' : numberFontSizeMobile ? numberFontSizeMobile + numberFontSizeTablet : undefined,
				'margin-top': numberMarginMobile.top ? numberMarginMobile.top : undefined,
				'margin-right': numberMarginMobile.right ? numberMarginMobile.right : undefined,
				'margin-bottom': numberMarginMobile.bottom ? numberMarginMobile.bottom : undefined,
				'margin-left': numberMarginMobile.left ? numberMarginMobile.left : undefined,
			},
			'.pb-counter--prefix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginMobile.top ? suffpreMarginMobile.top : undefined,
				'margin-right': suffpreMarginMobile.right ? suffpreMarginMobile.right : undefined,
				'margin-bottom': suffpreMarginMobile.bottom ? suffpreMarginMobile.bottom : undefined,
				'margin-left': suffpreMarginMobile.left ? suffpreMarginMobile.left : undefined,
			},
			'.pb-counter--suffix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginMobile.top ? suffpreMarginMobile.top : undefined,
				'margin-right': suffpreMarginMobile.right ? suffpreMarginMobile.right : undefined,
				'margin-bottom': suffpreMarginMobile.bottom ? suffpreMarginMobile.bottom : undefined,
				'margin-left': suffpreMarginMobile.left ? suffpreMarginMobile.left : undefined,
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
