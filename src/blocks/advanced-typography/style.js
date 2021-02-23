import { renderStyle } from '../../helper/utils';

import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		headingFontFamily,
		headingFontSizeType,
		headingFontStyle,
		headingFontSize,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingFontWeight,
		headingTextTransform,
		headingTextDecoration,
		headingLetterSpacing,
		headingLineHeight,
		paragraphFontFamily,
		paragraphFontSizeType,
		paragraphFontStyle,
		paragraphFontSize,
		paragraphFontSizeTablet,
		paragraphFontSizeMobile,
		paragraphFontWeight,
		paragraphTextTransform,
		paragraphTextDecoration,
		paragraphLetterSpacing,
		paragraphLineHeight,

		headingColor,
		paragraphColor,
	} = attributes;

	const selectorPrefix = `#pb-advanced-typography-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-advanced-typography h1' : {
				color: headingColor ? headingColor : undefined,
				'font-family': headingFontFamily
					? headingFontFamily + '!important'
					: undefined,
				'font-size': headingFontSize
					? headingFontSize + headingFontSizeType
					: undefined,
				'font-weight': headingFontWeight
					? headingFontWeight + '!important'
					: undefined,
				'font-style': headingFontStyle
					? headingFontStyle
					: undefined,
				'letter-spacing': headingLetterSpacing
					? headingLetterSpacing + 'px'
					: undefined,
				'line-height': headingLineHeight
					? headingLineHeight + 'px'
					: undefined,
				'text-transform': headingTextTransform
					? headingTextTransform
					: undefined,
				'text-decoration': headingTextDecoration
					? headingTextDecoration
					: undefined,
			},
			'.pb-advanced-typography h2' : {
				color: headingColor ? headingColor : undefined,
				'font-family': headingFontFamily
					? headingFontFamily + '!important'
					: undefined,
				'font-size': headingFontSize
					? headingFontSize + headingFontSizeType
					: undefined,
				'font-weight': headingFontWeight
					? headingFontWeight + '!important'
					: undefined,
				'font-style': headingFontStyle
					? headingFontStyle
					: undefined,
				'letter-spacing': headingLetterSpacing
					? headingLetterSpacing + 'px'
					: undefined,
				'line-height': headingLineHeight
					? headingLineHeight + 'px'
					: undefined,
				'text-transform': headingTextTransform
					? headingTextTransform
					: undefined,
				'text-decoration': headingTextDecoration
					? headingTextDecoration
					: undefined,
			},
			'.pb-advanced-typography h3' : {
				color: headingColor ? headingColor : undefined,
				'font-family': headingFontFamily
					? headingFontFamily + '!important'
					: undefined,
				'font-size': headingFontSize
					? headingFontSize + headingFontSizeType
					: undefined,
				'font-weight': headingFontWeight
					? headingFontWeight + '!important'
					: undefined,
				'font-style': headingFontStyle
					? headingFontStyle
					: undefined,
				'letter-spacing': headingLetterSpacing
					? headingLetterSpacing + 'px'
					: undefined,
				'line-height': headingLineHeight
					? headingLineHeight + 'px'
					: undefined,
				'text-transform': headingTextTransform
					? headingTextTransform
					: undefined,
				'text-decoration': headingTextDecoration
					? headingTextDecoration
					: undefined,
			},
			'.pb-advanced-typography h4' : {
				color: headingColor ? headingColor : undefined,
				'font-family': headingFontFamily
					? headingFontFamily + '!important'
					: undefined,
				'font-size': headingFontSize
					? headingFontSize + headingFontSizeType
					: undefined,
				'font-weight': headingFontWeight
					? headingFontWeight + '!important'
					: undefined,
				'font-style': headingFontStyle
					? headingFontStyle
					: undefined,
				'letter-spacing': headingLetterSpacing
					? headingLetterSpacing + 'px'
					: undefined,
				'line-height': headingLineHeight
					? headingLineHeight + 'px'
					: undefined,
				'text-transform': headingTextTransform
					? headingTextTransform
					: undefined,
				'text-decoration': headingTextDecoration
					? headingTextDecoration
					: undefined,
			},
			'.pb-advanced-typography h5' : {
				color: headingColor ? headingColor : undefined,
				'font-family': headingFontFamily
					? headingFontFamily + '!important'
					: undefined,
				'font-size': headingFontSize
					? headingFontSize + headingFontSizeType
					: undefined,
				'font-weight': headingFontWeight
					? headingFontWeight + '!important'
					: undefined,
				'font-style': headingFontStyle
					? headingFontStyle
					: undefined,
				'letter-spacing': headingLetterSpacing
					? headingLetterSpacing + 'px'
					: undefined,
				'line-height': headingLineHeight
					? headingLineHeight + 'px'
					: undefined,
				'text-transform': headingTextTransform
					? headingTextTransform
					: undefined,
				'text-decoration': headingTextDecoration
					? headingTextDecoration
					: undefined,
			},
			'.pb-advanced-typography h6' : {
				color: headingColor ? headingColor : undefined,
				'font-family': headingFontFamily
					? headingFontFamily + '!important'
					: undefined,
				'font-size': headingFontSize
					? headingFontSize + headingFontSizeType
					: undefined,
				'font-weight': headingFontWeight
					? headingFontWeight + '!important'
					: undefined,
				'font-style': headingFontStyle
					? headingFontStyle
					: undefined,
				'letter-spacing': headingLetterSpacing
					? headingLetterSpacing + 'px'
					: undefined,
				'line-height': headingLineHeight
					? headingLineHeight + 'px'
					: undefined,
				'text-transform': headingTextTransform
					? headingTextTransform
					: undefined,
				'text-decoration': headingTextDecoration
					? headingTextDecoration
					: undefined,
			},
			'.pb-advanced-typography p' : {
				color: paragraphColor ? paragraphColor : undefined,
				'font-family': paragraphFontFamily
					? paragraphFontFamily + '!important'
					: undefined,
				'font-size': paragraphFontSize
					? paragraphFontSize + paragraphFontSizeType
					: undefined,
				'font-weight': paragraphFontWeight
					? paragraphFontWeight + '!important'
					: undefined,
				'font-style': paragraphFontStyle
					? paragraphFontStyle
					: undefined,
				'letter-spacing': paragraphLetterSpacing
					? paragraphLetterSpacing + 'px'
					: undefined,
				'line-height': paragraphLineHeight
					? paragraphLineHeight + 'px'
					: undefined,
				'text-transform': paragraphTextTransform
					? paragraphTextTransform
					: undefined,
				'text-decoration': paragraphTextDecoration
					? paragraphTextDecoration
					: undefined,
			},
		},
		tablet: {
			'.pb-advanced-typography h1' : {
				'font-size': headingFontSizeTablet
					? headingFontSizeTablet + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h2' : {
				'font-size': headingFontSizeTablet
					? headingFontSizeTablet + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h3' : {
				'font-size': headingFontSizeTablet
					? headingFontSizeTablet + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h4' : {
				'font-size': headingFontSizeTablet
					? headingFontSizeTablet + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h5' : {
				'font-size': headingFontSizeTablet
					? headingFontSizeTablet + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h6' : {
				'font-size': headingFontSizeTablet
					? headingFontSizeTablet + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography p' : {
				'font-size': paragraphFontSizeTablet
					? paragraphFontSizeTablet + paragraphFontSizeType
					: undefined,
			},
		},
		mobile: {
			'.pb-advanced-typography h1' : {
				'font-size': headingFontSizeMobile
					? headingFontSizeMobile + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h2' : {
				'font-size': headingFontSizeMobile
					? headingFontSizeMobile + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h3' : {
				'font-size': headingFontSizeMobile
					? headingFontSizeMobile + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h4' : {
				'font-size': headingFontSizeMobile
					? headingFontSizeMobile + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h5' : {
				'font-size': headingFontSizeMobile
					? headingFontSizeMobile + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography h6' : {
				'font-size': headingFontSizeMobile
					? headingFontSizeMobile + headingFontSizeType
					: undefined,
			},
			'.pb-advanced-typography p' : {
				'font-size': paragraphFontSizeMobile
					? paragraphFontSizeMobile + paragraphFontSizeType
					: undefined,
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
