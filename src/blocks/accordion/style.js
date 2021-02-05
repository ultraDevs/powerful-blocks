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
				'padding-top': contentPadding.top ? contentPadding.top : undefined,
				'padding-right': contentPadding.right ? contentPadding.right : undefined,
				'padding-bottom': contentPadding.bottom ? contentPadding.bottom : undefined,
				'padding-left': contentPadding.left ? contentPadding.left : undefined,
				'margin-top': contentMargin.top ? contentMargin.top : undefined,
				'margin-right': contentMargin.right ? contentMargin.right : undefined,
				'margin-bottom': contentMargin.bottom ? contentMargin.bottom : undefined,
				'margin-left': contentMargin.left ? contentMargin.left : undefined,

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
				'padding-top': titlePadding.top ? titlePadding.top : undefined,
				'padding-right': titlePadding.right ? titlePadding.right : undefined,
				'padding-bottom': titlePadding.bottom ? titlePadding.bottom : undefined,
				'padding-left': titlePadding.left ? titlePadding.left : undefined,
	
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
				'margin-top': titleMargin.top ? titleMargin.top : undefined,
				'margin-right': titleMargin.right ? titleMargin.right : undefined,
				'margin-bottom': titleMargin.bottom ? titleMargin.bottom : undefined,
				'margin-left': titleMargin.left ? titleMargin.left : undefined,
	
			},
			'.pb-accordion-toggle-icon' : {
				'background-color': toggleIconBackgroundColor ? toggleIconBackgroundColor : undefined,
				color: toggleIconColor ? toggleIconColor : undefined,
				'font-size': toggleIconSize ? toggleIconSize + toggleIconSizeUnitType : undefined,
				'padding-top': toggleIconPadding.top ? toggleIconPadding.top : undefined,
				'padding-right': toggleIconPadding.right ? toggleIconPadding.right : undefined,
				'padding-bottom': toggleIconPadding.bottom ? toggleIconPadding.bottom : undefined,
				'padding-left': toggleIconPadding.left ? toggleIconPadding.left : undefined,
	
				'border-radius': toggleIconBorderRadius ? ( toggleIconBorderRadius.top ? toggleIconBorderRadius.top : '0px' ) + ' ' + ( toggleIconBorderRadius.right ? toggleIconBorderRadius.right : '0px') + ' ' + ( toggleIconBorderRadius.bottom ? toggleIconBorderRadius.bottom : '0px' ) + ' ' + ( toggleIconBorderRadius.left ? toggleIconBorderRadius.left : '0px' ) : undefined,
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
			'.pb-accordion-item' : {
				'margin-bottom': itemsGapTablet ? itemsGapTablet + itemsGapUnitType : undefined,
			},
			'.pb-accordion-content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + contentFontSizeType
					: undefined,
				'padding-top': contentPaddingTablet.top ? contentPaddingTablet.top : undefined,
				'padding-right': contentPaddingTablet.right ? contentPaddingTablet.right : undefined,
				'padding-bottom': contentPaddingTablet.bottom ? contentPaddingTablet.bottom : undefined,
				'padding-left': contentPaddingTablet.left ? contentPaddingTablet.left : undefined,

				'margin-top': contentMarginTablet.top ? contentMarginTablet.top : undefined,
				'margin-right': contentMarginTablet.right ? contentMarginTablet.right : undefined,
				'margin-bottom': contentMarginTablet.bottom ? contentMarginTablet.bottom : undefined,
				'margin-left': contentMarginTablet.left ? contentMarginTablet.left : undefined,
	
			},
			'.pb-accordion-icon' : {
				'font-size': iconSizeTablet ? iconSizeTablet + iconSizeUnitType : undefined,
			},
			'.pb-accordion-header' : {
				'padding-top': titlePaddingTablet.top ? titlePaddingTablet.top : undefined,
				'padding-right': titlePaddingTablet.right ? titlePaddingTablet.right : undefined,
				'padding-bottom': titlePaddingTablet.bottom ? titlePaddingTablet.bottom : undefined,
				'padding-left': titlePaddingTablet.left ? titlePaddingTablet.left : undefined,	
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
				'margin-top': titleMarginTablet.top ? titleMarginTablet.top : undefined,
				'margin-right': titleMarginTablet.right ? titleMarginTablet.right : undefined,
				'margin-bottom': titleMarginTablet.bottom ? titleMarginTablet.bottom : undefined,
				'margin-left': titleMarginTablet.left ? titleMarginTablet.left : undefined,
	
			},
			'.pb-accordion-toggle-icon' : {
				'font-size': toggleIconSizeTablet ? toggleIconSizeTablet + toggleIconSizeUnitType : undefined,
				'padding-top': toggleIconPaddingTablet.top ? toggleIconPaddingTablet.top : undefined,
				'padding-right': toggleIconPaddingTablet.right ? toggleIconPaddingTablet.right : undefined,
				'padding-bottom': toggleIconPaddingTablet.bottom ? toggleIconPaddingTablet.bottom : undefined,
				'padding-left': toggleIconPaddingTablet.left ? toggleIconPaddingTablet.left : undefined,

				'border-radius': toggleIconBorderRadiusTablet ? ( toggleIconBorderRadiusTablet.top ? toggleIconBorderRadiusTablet.top : '0px' ) + ' ' + ( toggleIconBorderRadiusTablet.right ? toggleIconBorderRadiusTablet.right : '0px') + ' ' + ( toggleIconBorderRadiusTablet.bottom ? toggleIconBorderRadiusTablet.bottom : '0px' ) + ' ' + ( toggleIconBorderRadiusTablet.left ? toggleIconBorderRadiusTablet.left : '0px' ) : undefined,
			},
			
		},
		mobile: {
			'.pb-accordion-item' : {
				'margin-bottom': itemsGapMobile ? itemsGapMobile + itemsGapUnitType : undefined,
			},
			'.pb-accordion-content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + contentFontSizeType
					: undefined,
				'padding-top': contentPaddingMobile.top ? contentPaddingMobile.top : undefined,
				'padding-right': contentPaddingMobile.right ? contentPaddingMobile.right : undefined,
				'padding-bottom': contentPaddingMobile.bottom ? contentPaddingMobile.bottom : undefined,
				'padding-left': contentPaddingMobile.left ? contentPaddingMobile.left : undefined,
				'margin-top': contentMarginMobile.top ? contentMarginMobile.top : undefined,
				'margin-right': contentMarginMobile.right ? contentMarginMobile.right : undefined,
				'margin-bottom': contentMarginMobile.bottom ? contentMarginMobile.bottom : undefined,
				'margin-left': contentMarginMobile.left ? contentMarginMobile.left : undefined,
	
			},
			'.pb-accordion-icon' : {
				'font-size': iconSizeMobile ? iconSizeMobile + iconSizeUnitType : undefined,
			},
			'.pb-accordion-header' : {
					'padding-top': titlePaddingMobile.top ? titlePaddingMobile.top : undefined,
					'padding-right': titlePaddingMobile.right ? titlePaddingMobile.right : undefined,
					'padding-bottom': titlePaddingMobile.bottom ? titlePaddingMobile.bottom : undefined,
					'padding-left': titlePaddingMobile.left ? titlePaddingMobile.left : undefined,	
			},
			'.pb-accordion-title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + titleFontSizeType
					: undefined,
				'margin-top': titleMarginMobile.top ? titleMarginMobile.top : undefined,
				'margin-right': titleMarginMobile.right ? titleMarginMobile.right : undefined,
				'margin-bottom': titleMarginMobile.bottom ? titleMarginMobile.bottom : undefined,
				'margin-left': titleMarginMobile.left ? titleMarginMobile.left : undefined,
	
				
			},
			'.pb-accordion-toggle-icon' : {
				'font-size': toggleIconSizeMobile ? toggleIconSizeMobile + toggleIconSizeUnitType : undefined,
				'padding-top': toggleIconPaddingMobile.top ? toggleIconPaddingMobile.top : undefined,
				'padding-right': toggleIconPaddingMobile.right ? toggleIconPaddingMobile.right : undefined,
				'padding-bottom': toggleIconPaddingMobile.bottom ? toggleIconPaddingMobile.bottom : undefined,
				'padding-left': toggleIconPaddingMobile.left ? toggleIconPaddingMobile.left : undefined,
				'border-radius': toggleIconBorderRadiusMobile ? ( toggleIconBorderRadiusMobile.top ? toggleIconBorderRadiusMobile.top : '0px' ) + ' ' + ( toggleIconBorderRadiusMobile.right ? toggleIconBorderRadiusMobile.right : '0px') + ' ' + ( toggleIconBorderRadiusMobile.bottom ? toggleIconBorderRadiusMobile.bottom : '0px' ) + ' ' + ( toggleIconBorderRadiusMobile.left ? toggleIconBorderRadiusMobile.left : '0px' ) : undefined,
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
