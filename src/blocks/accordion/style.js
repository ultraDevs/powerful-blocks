import { renderStyle } from '../../helper/utils';

import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		contentBackgroundColor,
		hoverContentBackgroundColor,
		activeContentBackgroundColor,
		contentColor,
		activeContentColor,
		hoverContentColor,
		contentPadding,
		contentPaddingTablet,
		contentPaddingMobile,
		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLineHeight,
		contentFontSizeType,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentFontStyle,
		contentMargin,
		contentMarginTablet,
		contentMarginMobile,
		contentTextAlign,

		titleBackgroundColor,
		activeTitleBackgroundColor,
		hoverTitleBackgroundColor,
		activeTitleColor,
		hoverTitleColor,

		titleColor,
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

		titleMargin,
		titleMarginTablet,
		titleMarginMobile,
		titlePadding,
		titlePaddingTablet,
		titlePaddingMobile,


		iconSizeUnitType,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,


		itemsGapUnitType,
		itemsGap,
		itemsGapTablet,
		itemsGapMobile,

		toggleIconBackgroundColor,
		activeToggleIconBackgroundColor,
		hoverToggleIconBackgroundColor,
		toggleIconColor,
		activeToggleIconColor,
		hoverToggleIconColor,
		toggleIconSizeUnitType,
		toggleIconSize,
		toggleIconSizeTablet,
		toggleIconSizeMobile,

		toggleIconPadding,
		toggleIconPaddingTablet,
		toggleIconPaddingMobile,
		toggleIconBorderRadius,
		toggleIconBorderRadiusTablet,
		toggleIconBorderRadiusMobile,

	} = attributes;

	const selectorPrefix = `#pb-accordion-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-accordion-wrapper': {
				
			},
			'.pb-accordion-item' : {
				'margin-bottom': itemsGap ? itemsGap + itemsGapUnitType : undefined,
			},
			'.pb-accordion-content': {
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
				color: contentColor ? contentColor : undefined,
				'text-align': contentTextAlign ? contentTextAlign : undefined,
				'font-family': contentFontFamily
					? contentFontFamily
					: undefined,
				'font-size': contentFontSize
					? contentFontSize + contentFontSizeType
					: undefined,
				'font-weight': contentFontWeight
					? contentFontWeight
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
			'.pb-accordion-content:hover': {
				'background-color': hoverContentBackgroundColor
					? hoverContentBackgroundColor + '!important'
					: undefined,
				color: hoverContentColor
					? hoverContentColor + '!important'
					: undefined,
			},
			'.pb-accordion-header': {
				'background-color': titleBackgroundColor
					? titleBackgroundColor
					: undefined,
				padding:
					titlePadding.top +
					' ' +
					titlePadding.right +
					' ' +
					titlePadding.bottom +
					' ' +
					titlePadding.left,
			},
			'.pb-accordion-header:hover': {
				'background-color': hoverTitleBackgroundColor
					? hoverTitleBackgroundColor
					: undefined,
			},
			'.pb-accordion-header:hover .pb-accordion-title': {
				color: hoverTitleColor ? hoverTitleColor + '!important' : undefined,
			},
			'.pb-accordion-header:hover .pb-accordion-icon': {
				color: hoverTitleColor ? hoverTitleColor + '!important' : undefined,
			},
			'.pb-active.pb-accordion-header': {
				'background-color': activeTitleBackgroundColor
					? activeTitleBackgroundColor
					: undefined,
			},
			'.pb-active .pb-accordion-title': {
				color: activeTitleColor ? activeTitleColor + '!important' : undefined,
			},
			'.pb-active .pb-accordion-icon': {
				color: activeTitleColor ? activeTitleColor + '!important' : undefined,
			},
			'.pb-active .pb-accordion-content': {
				'background-color': activeContentBackgroundColor
					? activeContentBackgroundColor
					: undefined,
				color: activeContentColor ? activeContentColor + '!important' : undefined,
			},

			'.pb-accordion-content:hover': {
				'background-color': hoverContentBackgroundColor
					? hoverContentBackgroundColor
					: undefined,
				color: hoverContentColor ? hoverContentColor :undefined,
			},

			'.pb-accordion-icon' : {
				'font-size': iconSize ? iconSize + iconSizeUnitType : undefined,
				color: titleColor ? titleColor + '!important' : undefined,
			},

			'.pb-accordion-title': {
				color: titleColor ? titleColor + '!important' : undefined,
				'font-family': titleFontFamily
					? titleFontFamily
					: undefined,
				'font-size': titleFontSize ? titleFontSize + titleFontSizeType : undefined,
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
				margin:
					titleMargin.top +
					' ' +
					titleMargin.right +
					' ' +
					titleMargin.bottom +
					' ' +
					titleMargin.left,
			},
			'.pb-accordion-toggle-icon' : {
				'background-color': toggleIconBackgroundColor ? toggleIconBackgroundColor : undefined,
				color: toggleIconColor ? toggleIconColor : undefined,
				'font-size': toggleIconSize ? toggleIconSize + toggleIconSizeUnitType : undefined,
				padding:
					toggleIconPadding.top +
					' ' +
					toggleIconPadding.right +
					' ' +
					toggleIconPadding.bottom +
					' ' +
					toggleIconPadding.left,
				'border-radius':
					toggleIconBorderRadius.top +
					' ' +
					toggleIconBorderRadius.right +
					' ' +
					toggleIconBorderRadius.bottom +
					' ' +
					toggleIconBorderRadius.left,
			},
			'.pb-accordion-header:hover .pb-accordion-toggle-icon' : {
				'background-color': hoverToggleIconBackgroundColor ? hoverToggleIconBackgroundColor : undefined,
				color: hoverToggleIconColor ? hoverToggleIconColor : undefined,
			},
			'.pb-active .pb-accordion-toggle-icon' : {
				'background-color': activeToggleIconBackgroundColor ? activeToggleIconBackgroundColor : undefined,
				color: activeToggleIconColor ? activeToggleIconColor : undefined,
			},
		},
		tablet: {
			'.pb-accordion-wrapper': {
				
			},
			'.pb-accordion-item' : {
				'margin-bottom': itemsGapTablet ? itemsGapTablet + itemsGapUnitType : undefined,
			},
			'.pb-accordion-content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + contentFontSizeType
					: undefined,
				padding:
					contentPaddingTablet.top +
					' ' +
					contentPaddingTablet.right +
					' ' +
					contentPaddingTablet.bottom +
					' ' +
					contentPaddingTablet.left,
				margin:
					contentMarginTablet.top +
					' ' +
					contentMarginTablet.right +
					' ' +
					contentMarginTablet.bottom +
					' ' +
					contentMarginTablet.left,
			},
			'.pb-accordion-icon' : {
				'font-size': iconSizeTablet ? iconSizeTablet + iconSizeUnitType : undefined,
			},
			'.pb-accordion-header' : {
				padding: 
					titlePaddingTablet.top +
					' ' +
					titlePaddingTablet.right +
					' ' +
					titlePaddingTablet.bottom +
					' ' +
					titlePaddingTablet.left,
			},
			'.pb-accordion-title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + titleFontSizeType
					: undefined,
				margin:
					titleMarginTablet.top +
					' ' +
					titleMarginTablet.right +
					' ' +
					titleMarginTablet.bottom +
					' ' +
					titleMarginTablet.left,
			},
			'.pb-accordion-toggle-icon' : {
				'font-size': toggleIconSizeTablet ? toggleIconSizeTablet + toggleIconSizeUnitType : undefined,
				padding:
					toggleIconPaddingTablet.top +
					' ' +
					toggleIconPaddingTablet.right +
					' ' +
					toggleIconPaddingTablet.bottom +
					' ' +
					toggleIconPaddingTablet.left,
				'border-radius':
					toggleIconBorderRadiusTablet.top +
					' ' +
					toggleIconBorderRadiusTablet.right +
					' ' +
					toggleIconBorderRadiusTablet.bottom +
					' ' +
					toggleIconBorderRadiusTablet.left,
			},
			
		},
		mobile: {
			'.pb-accordion-wrapper': {
				
			},
			'.pb-accordion-item' : {
				'margin-bottom': itemsGapMobile ? itemsGapMobile + itemsGapUnitType : undefined,
			},
			'.pb-accordion-content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + contentFontSizeType
					: undefined,
				padding:
					contentPaddingMobile.top +
					' ' +
					contentPaddingMobile.right +
					' ' +
					contentPaddingMobile.bottom +
					' ' +
					contentPaddingMobile.left,
				margin:
					contentMarginMobile.top +
					' ' +
					contentMarginMobile.right +
					' ' +
					contentMarginMobile.bottom +
					' ' +
					contentMarginMobile.left,
			},
			'.pb-accordion-icon' : {
				'font-size': iconSizeMobile ? iconSizeMobile + iconSizeUnitType : undefined,
			},
			'.pb-accordion-header' : {
				padding:
					titlePaddingMobile.top +
					' ' +
					titlePaddingMobile.right +
					' ' +
					titlePaddingMobile.bottom +
					' ' +
					titlePaddingMobile.left,
			},
			'.pb-accordion-title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + titleFontSizeType
					: undefined,
				margin:
					titleMarginMobile.top +
					' ' +
					titleMarginMobile.right +
					' ' +
					titleMarginMobile.bottom +
					' ' +
					titleMarginMobile.left,
				
			},
			'.pb-accordion-toggle-icon' : {
				'font-size': toggleIconSizeMobile ? toggleIconSizeMobile + toggleIconSizeUnitType : undefined,
				padding:
					toggleIconPaddingMobile.top +
					' ' +
					toggleIconPaddingMobile.right +
					' ' +
					toggleIconPaddingMobile.bottom +
					' ' +
					toggleIconPaddingMobile.left,
				'border-radius':
					toggleIconBorderRadiusMobile.top +
					' ' +
					toggleIconBorderRadiusMobile.right +
					' ' +
					toggleIconBorderRadiusMobile.bottom +
					' ' +
					toggleIconBorderRadiusMobile.left,
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
