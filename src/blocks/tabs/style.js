import { renderStyle } from '../../helper/utils';

import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		tabsType,
		tabsAlign,
		tabsVAlign,
		contentBackgroundColor,
		hoverContentBackgroundColor,
		
		contentPadding,
		contentPaddingTablet,
		contentPaddingMobile,
		
		contentMargin,
		contentMarginTablet,
		contentMarginMobile,
		contentBorderRadius,
		contentBorderRadiusTablet,
		contentBorderRadiusMobile,

		titleColor,
		hoverTitleColor,
		activeTitleColor,
		titleBGColor,
		hoverTitleBGColor,
		activeTitleBGColor,

		titleTextAlign,
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
	} = attributes;

	const selectorPrefix = `#pb-tabs-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-tabs-wrapper': {
				
			},
			'.pb-tabs--tabs': {
				'justify-content': tabsAlign ? tabsAlign : undefined,
			},
			'.pb-tabs--pills': {
				'justify-content': tabsAlign ? tabsAlign : undefined,
			},
			'.pb-tabs--item': {
				'font-size': titleFontSize
					? titleFontSize + titleFontSizeType
					: undefined,
				color: titleColor ? titleColor + '!important' : undefined,
				'font-family': titleFontFamily
					? titleFontFamily
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
				'text-align': titleTextAlign ? titleTextAlign : undefined,
			},
			
			'.pb-tabs--item:hover': {
				color: hoverTitleColor ? hoverTitleColor + '!important' : undefined,
			},
			'.pb-tabs--item.pb-tab-active': {
				color: activeTitleColor ? activeTitleColor + '!important' : undefined,
			},

			'.pb-tabs--pills .pb-tabs--item': {
				'background-color': titleBGColor ? titleBGColor : undefined,
			},
			'.pb-tabs--pills .pb-tabs--item:hover': {
				'background-color': hoverTitleBGColor ? hoverTitleBGColor : undefined,
			},
			'.pb-tabs--pills .pb-tabs--item.pb-tab-active': {
				'background-color': activeTitleBGColor ? activeTitleBGColor : undefined,
			},

			'.pb-tab-wrapper': {
				'background-color': contentBackgroundColor
					? contentBackgroundColor
					: undefined,
				padding:
					contentPadding.top +
					' ' +
					contentPadding.right +
					' ' +
					contentPadding.bottom +
					' ' +
					contentPadding.left,
				margin:
					contentMargin.top +
					' ' +
					contentMargin.right +
					' ' +
					contentMargin.bottom +
					' ' +
					contentMargin.left,
				'border-radius':
					contentBorderRadius.top +
					' ' +
					contentBorderRadius.right +
					' ' +
					contentBorderRadius.bottom +
					' ' +
					contentBorderRadius.left,
			},
			'.pb-tab-wrapper:hover': {
				'background-color': hoverContentBackgroundColor
					? hoverContentBackgroundColor
					: undefined,
			},
		},
		tablet: {
			'.pb-tabs-wrapper': {
				
			},
			'.pb-tabs--item': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + titleFontSizeType
					: undefined,
			},
		},
		mobile: {
			'.pb-tabs-wrapper': {
				
			},
			'.pb-tabs--item': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + titleFontSizeType
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
