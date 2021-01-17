import { renderStyle } from '../../components/utils';
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
				padding:
					abPadding.top +
					' ' +
					abPadding.right +
					' ' +
					abPadding.bottom +
					' ' +
					abPadding.left,
				'border-radius':
					abBorderRadius.top +
					' ' +
					abBorderRadius.right +
					' ' +
					abBorderRadius.bottom +
					' ' +
					abBorderRadius.left,
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
				padding:
					abPaddingTablet.top +
					' ' +
					abPaddingTablet.right +
					' ' +
					abPaddingTablet.bottom +
					' ' +
					abPaddingTablet.left,
				'border-radius':
					abBorderRadiusTablet.top +
					' ' +
					abBorderRadiusTablet.right +
					' ' +
					abBorderRadiusTablet.bottom +
					' ' +
					abBorderRadiusTablet.left,
				
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
				padding:
					abPaddingMobile.top +
					' ' +
					abPaddingMobile.right +
					' ' +
					abPaddingMobile.bottom +
					' ' +
					abPaddingMobile.left,
				'border-radius':
					abBorderRadiusMobile.top +
					' ' +
					abBorderRadiusMobile.right +
					' ' +
					abBorderRadiusMobile.bottom +
					' ' +
					abBorderRadiusMobile.left,
				
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
