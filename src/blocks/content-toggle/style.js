import { renderStyle } from '../../helper/utils';

import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		activeItem,
		primaryLabel,
		primaryLabelBGColor,
		secondaryLabel,
		secondaryLabelBGColor,
		labelColor,
		hoverLabelColor,
		activeLabelColor,
		labelFontSize,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelFontFamily,
		labelFontSizeType,
		labelFontStyle,
		labelFontWeight,
		labelTextTransform,
		labelTextDecoration,
		labelLetterSpacing,
		labelLineHeight,
		switchAlign,
		switchPosition,
	} = attributes;

	const selectorPrefix = `#pb-content-toggle-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-toggle-switch-w': {
				background: primaryLabelBGColor ? primaryLabelBGColor : undefined,
			},
			'.pb-toggle-switch-on .pb-toggle-switch-w': {
				background: secondaryLabelBGColor ? secondaryLabelBGColor : undefined,
			}
		},
		// desktop: {
		// 	'.pb-tabs--tabs': {
		// 		'justify-content': tabsAlign ? tabsAlign : undefined,
		// 	},
		// 	'.pb-tabs--pills': {
		// 		'justify-content': tabsAlign ? tabsAlign : undefined,
		// 	},
		// 	'.pb-tabs--item': {
		// 		'font-size': titleFontSize
		// 			? titleFontSize + titleFontSizeType
		// 			: undefined,
		// 		color: titleColor ? titleColor + '!important' : undefined,
		// 		'font-family': titleFontFamily
		// 			? titleFontFamily
		// 			: undefined,
		// 		'font-weight': titleFontWeight
		// 			? titleFontWeight + '!important'
		// 			: undefined,
		// 		'font-style': titleFontStyle
		// 			? titleFontStyle
		// 			: undefined,
		// 		'letter-spacing': titleLetterSpacing
		// 			? titleLetterSpacing + 'px'
		// 			: undefined,
		// 		'line-height': titleLineHeight
		// 			? titleLineHeight + 'px'
		// 			: undefined,
		// 		'text-transform': titleTextTransform
		// 			? titleTextTransform
		// 			: undefined,
		// 		'text-decoration': titleTextDecoration
		// 			? titleTextDecoration
		// 			: undefined,
		// 		'text-align': titleTextAlign ? titleTextAlign : undefined,
		// 	},
			
		// 	'.pb-tabs--item:hover': {
		// 		color: hoverTitleColor ? hoverTitleColor + '!important' : undefined,
		// 	},
		// 	'.pb-tabs--item.pb-tab-active': {
		// 		color: activeTitleColor ? activeTitleColor + '!important' : undefined,
		// 	},

		// 	'.pb-tabs--pills .pb-tabs--item': {
		// 		'background-color': titleBGColor ? titleBGColor : undefined,
		// 	},
		// 	'.pb-tabs--pills .pb-tabs--item:hover': {
		// 		'background-color': hoverTitleBGColor ? hoverTitleBGColor : undefined,
		// 	},
		// 	'.pb-tabs--pills .pb-tabs--item.pb-tab-active': {
		// 		'background-color': activeTitleBGColor ? activeTitleBGColor : undefined,
		// 	},

		// 	'.pb-tab-wrapper': {
		// 		'background-color': contentBackgroundColor
		// 			? contentBackgroundColor
		// 			: undefined,
		// 		'margin-top': contentMargin.top ? contentMargin.top : undefined,
		// 		'margin-right': contentMargin.right ? contentMargin.right : undefined,
		// 		'margin-bottom': contentMargin.bottom ? contentMargin.bottom : undefined,
		// 		'margin-left': contentMargin.left ? contentMargin.left : undefined,
				
		// 		'padding-top': contentPadding.top ? contentPadding.top : undefined,
		// 		'padding-right': contentPadding.right ? contentPadding.right : undefined,
		// 		'padding-bottom': contentPadding.bottom ? contentPadding.bottom : undefined,
		// 		'padding-left': contentPadding.left ? contentPadding.left : undefined,
				
		// 		'border-radius': contentBorderRadius ? ( contentBorderRadius.top ? contentBorderRadius.top : '0px' ) + ' ' + ( contentBorderRadius.right ? contentBorderRadius.right : '0px') + ' ' + ( contentBorderRadius.bottom ? contentBorderRadius.bottom : '0px' ) + ' ' + ( contentBorderRadius.left ? contentBorderRadius.left : '0px' ) : undefined,
		// 	},
		// 	'.pb-tab-wrapper:hover': {
		// 		'background-color': hoverContentBackgroundColor
		// 			? hoverContentBackgroundColor
		// 			: undefined,
		// 	},
		// },
		// tablet: {
		// 	'.pb-tab-wrapper': {
		// 		'margin-top': contentMarginTablet.top ? contentMarginTablet.top : undefined,
		// 		'margin-right': contentMarginTablet.right ? contentMarginTablet.right : undefined,
		// 		'margin-bottom': contentMarginTablet.bottom ? contentMarginTablet.bottom : undefined,
		// 		'margin-left': contentMarginTablet.left ? contentMarginTablet.left : undefined,
				
		// 		'padding-top': contentPaddingTablet.top ? contentPaddingTablet.top : undefined,
		// 		'padding-right': contentPaddingTablet.right ? contentPaddingTablet.right : undefined,
		// 		'padding-bottom': contentPaddingTablet.bottom ? contentPaddingTablet.bottom : undefined,
		// 		'padding-left': contentPaddingTablet.left ? contentPaddingTablet.left : undefined,
				
		// 		'border-radius': contentBorderRadiusTablet ? ( contentBorderRadiusTablet.top ? contentBorderRadiusTablet.top : '0px' ) + ' ' + ( contentBorderRadiusTablet.right ? contentBorderRadiusTablet.right : '0px') + ' ' + ( contentBorderRadiusTablet.bottom ? contentBorderRadiusTablet.bottom : '0px' ) + ' ' + ( contentBorderRadiusTablet.left ? contentBorderRadiusTablet.left : '0px' ) : undefined,
		// 	},
		// 	'.pb-tabs--item': {
		// 		'font-size': titleFontSizeTablet
		// 			? titleFontSizeTablet + titleFontSizeType
		// 			: undefined,
		// 	},
		// },
		// mobile: {
		// 	'.pb-tab-wrapper': {
		// 		'margin-top': contentMarginMobile.top ? contentMarginMobile.top : undefined,
		// 		'margin-right': contentMarginMobile.right ? contentMarginMobile.right : undefined,
		// 		'margin-bottom': contentMarginMobile.bottom ? contentMarginMobile.bottom : undefined,
		// 		'margin-left': contentMarginMobile.left ? contentMarginMobile.left : undefined,
				
		// 		'padding-top': contentPaddingMobile.top ? contentPaddingMobile.top : undefined,
		// 		'padding-right': contentPaddingMobile.right ? contentPaddingMobile.right : undefined,
		// 		'padding-bottom': contentPaddingMobile.bottom ? contentPaddingMobile.bottom : undefined,
		// 		'padding-left': contentPaddingMobile.left ? contentPaddingMobile.left : undefined,
				
		// 		'border-radius': contentBorderRadiusMobile ? ( contentBorderRadiusMobile.top ? contentBorderRadiusMobile.top : '0px' ) + ' ' + ( contentBorderRadiusMobile.right ? contentBorderRadiusMobile.right : '0px') + ' ' + ( contentBorderRadiusMobile.bottom ? contentBorderRadiusMobile.bottom : '0px' ) + ' ' + ( contentBorderRadiusMobile.left ? contentBorderRadiusMobile.left : '0px' ) : undefined,
		// 	},
		// 	'.pb-tabs--item': {
		// 		'font-size': titleFontSizeMobile
		// 			? titleFontSizeMobile + titleFontSizeType
		// 			: undefined,
		// 	},
		// },
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
