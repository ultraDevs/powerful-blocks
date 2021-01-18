import { renderStyle } from '../../helper/utils';
import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {
	const attributes = props.attributes;
	const {
		blockId,
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
				'border-color': btnBorderColor ? btnBorderColor : undefined,
			},
		},
		tablet: {
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
