import { renderStyle } from '../../helper/utils';
import AdvancedCSS from '../../helper/advancedCSS';

const Styles = ( props ) => {
	const { attributes } = props;

	const {
		blockId,
		abBorderRadius,
		abBorderRadiusTablet,
		abBorderRadiusMobile,
		abPadding,
		abPaddingTablet,
		abPaddingMobile,
		bottomSpace,
		textAlign,
		titleColor,

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

		contentColor,
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

	} = attributes;

	const selectorPrefix = `#pb-alert-box-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-alert-box-wrapper': {
				
			},
			'.pb-alert-box': {
				
				'text-align': textAlign ? textAlign : undefined,
				'padding-top': abPadding.top ? abPadding.top : undefined,
				'padding-right': abPadding.right ? abPadding.right : undefined,
				'padding-bottom': abPadding.bottom ? abPadding.bottom : undefined,
				'padding-left': abPadding.left ? abPadding.left : undefined,
				'border-radius': abBorderRadius ? ( abBorderRadius.top ? abBorderRadius.top : '0px' ) + ' ' + ( abBorderRadius.right ? abBorderRadius.right : '0px') + ' ' + ( abBorderRadius.bottom ? abBorderRadius.bottom : '0px' ) + ' ' + ( abBorderRadius.left ? abBorderRadius.left : '0px' ) : undefined,
			},
			'.pb-alert-box__title': {
				'font-size': titleFontSize ? titleFontSize + titleFontSizeType : undefined,
				color: titleColor ? titleColor : undefined,
				'font-family': titleFontFamily
					? titleFontFamily
					: undefined,
				'font-weight': titleFontWeight
					? titleFontWeight
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
				'margin-bottom': bottomSpace ? bottomSpace + 'px' : undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSize
					? contentFontSize + contentFontSizeType
					: undefined,
				'font-family': contentFontFamily
					? contentFontFamily
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
				color: contentColor ? contentColor : undefined,
			},
		},
		tablet: {
			'.pb-alert-box-wrapper': {
				'padding-top': abPaddingTablet.top ? abPaddingTablet.top : undefined,
				'padding-right': abPaddingTablet.right ? abPaddingTablet.right : undefined,
				'padding-bottom': abPaddingTablet.bottom ? abPaddingTablet.bottom : undefined,
				'padding-left': abPaddingTablet.left ? abPaddingTablet.left : undefined,
				'border-radius': abBorderRadiusTablet ? ( abBorderRadiusTablet.top ? abBorderRadiusTablet.top : '0px' ) + ' ' + ( abBorderRadiusTablet.right ? abBorderRadiusTablet.right : '0px') + ' ' + ( abBorderRadiusTablet.bottom ? abBorderRadiusTablet.bottom : '0px' ) + ' ' + ( abBorderRadiusTablet.left ? abBorderRadiusTablet.left : '0px' ) : undefined,
			},
			'.pb-alert-box__title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + titleFontSizeType
					: undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + contentFontSizeType
					: undefined,
			},
		},
		mobile: {
			'.pb-alert-box-wrapper': {
				'padding-top': abPaddingMobile.top ? abPaddingMobile.top : undefined,
				'padding-right': abPaddingMobile.right ? abPaddingMobile.right : undefined,
				'padding-bottom': abPaddingMobile.bottom ? abPaddingMobile.bottom : undefined,
				'padding-left': abPaddingMobile.left ? abPaddingMobile.left : undefined,
				'border-radius': abBorderRadiusMobile ? ( abBorderRadiusMobile.top ? abBorderRadiusMobile.top : '0px' ) + ' ' + ( abBorderRadiusMobile.right ? abBorderRadiusMobile.right : '0px') + ' ' + ( abBorderRadiusMobile.bottom ? abBorderRadiusMobile.bottom : '0px' ) + ' ' + ( abBorderRadiusMobile.left ? abBorderRadiusMobile.left : '0px' ) : undefined,
			},
			'.pb-alert-box__title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + titleFontSizeType
					: undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + contentFontSizeType
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
