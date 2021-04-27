import { renderStyle } from '../../helper/utils';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		txtAlign,
		loadingBarColor,

		animatedTextColor,
		animatedTextMargin,
		animatedTextMarginTablet,
		animatedTextMarginMobile,
		animatedTextFontFamily,
		animatedTextFontSizeType,
		animatedTextFontStyle,
		animatedTextFontSize,
		animatedTextFontSizeTablet,
		animatedTextFontSizeMobile,
		animatedTextFontWeight,
		animatedTextTextTransform,
		animatedTextTextDecoration,
		animatedTextLetterSpacing,
		animatedTextLineHeight,


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
	} = attributes;

	const selectorPrefix = `#pb-animated-text-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-animated-text-wrapper': {
				'text-align': txtAlign ? txtAlign : undefined,
			},
			
			'.pb-animated-text' : {
				color: animatedTextColor ? animatedTextColor : undefined,
				'font-family': animatedTextFontFamily
					? animatedTextFontFamily + '!important'
					: undefined,
				'font-size': animatedTextFontSize
					? animatedTextFontSize + animatedTextFontSizeType
					: undefined,
				'font-weight': animatedTextFontWeight
					? animatedTextFontWeight + '!important'
					: undefined,
				'font-style': animatedTextFontStyle
					? animatedTextFontStyle
					: undefined,
				'letter-spacing': animatedTextLetterSpacing
					? animatedTextLetterSpacing + 'px'
					: undefined,
				'line-height': animatedTextLineHeight
					? animatedTextLineHeight + 'px'
					: undefined,
				'text-transform': animatedTextTextTransform
					? animatedTextTextTransform
					: undefined,
				'text-decoration': animatedTextTextDecoration
					? animatedTextTextDecoration
					: undefined,
				'margin-top': animatedTextMargin.top ? animatedTextMargin.top : undefined,
				'margin-right': animatedTextMargin.right ? animatedTextMargin.right : undefined,
				'margin-bottom': animatedTextMargin.bottom ? animatedTextMargin.bottom : undefined,
				'margin-left': animatedTextMargin.left ? animatedTextMargin.left : undefined,
				
			},
			'.animation-text--content:after' : {
				'background': loadingBarColor ? loadingBarColor : undefined,
			},
			'.pb-animated-text--prefix': {
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
			'.pb-animated-text--suffix': {
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
			
			'.pb-animated-text' : {
				'margin-top': animatedTextMarginTablet.top ? animatedTextMarginTablet.top : undefined,
				'margin-right': animatedTextMarginTablet.right ? animatedTextMarginTablet.right : undefined,
				'margin-bottom': animatedTextMarginTablet.bottom ? animatedTextMarginTablet.bottom : undefined,
				'margin-left': animatedTextMarginTablet.left ? animatedTextMarginTablet.left : undefined,
				'font-size' : animatedTextFontSizeTablet ? animatedTextFontSizeTablet + animatedTextFontSizeTablet : undefined,
			},
			'.pb-animated-text--prefix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginTablet.top ? suffpreMarginTablet.top : undefined,
				'margin-right': suffpreMarginTablet.right ? suffpreMarginTablet.right : undefined,
				'margin-bottom': suffpreMarginTablet.bottom ? suffpreMarginTablet.bottom : undefined,
				'margin-left': suffpreMarginTablet.left ? suffpreMarginTablet.left : undefined,
			},
			'.pb-animated-text--suffix': {
				'font-size' : suffpreFontSizeTablet ? suffpreFontSizeTablet + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginTablet.top ? suffpreMarginTablet.top : undefined,
				'margin-right': suffpreMarginTablet.right ? suffpreMarginTablet.right : undefined,
				'margin-bottom': suffpreMarginTablet.bottom ? suffpreMarginTablet.bottom : undefined,
				'margin-left': suffpreMarginTablet.left ? suffpreMarginTablet.left : undefined,
			}
		},
		mobile: {
			'.pb-animated-text' : {
				'font-size' : animatedTextFontSizeMobile ? animatedTextFontSizeMobile + animatedTextFontSizeTablet : undefined,
				'margin-top': animatedTextMarginMobile.top ? animatedTextMarginMobile.top : undefined,
				'margin-right': animatedTextMarginMobile.right ? animatedTextMarginMobile.right : undefined,
				'margin-bottom': animatedTextMarginMobile.bottom ? animatedTextMarginMobile.bottom : undefined,
				'margin-left': animatedTextMarginMobile.left ? animatedTextMarginMobile.left : undefined,
			},
			'.pb-animated-text--prefix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginMobile.top ? suffpreMarginMobile.top : undefined,
				'margin-right': suffpreMarginMobile.right ? suffpreMarginMobile.right : undefined,
				'margin-bottom': suffpreMarginMobile.bottom ? suffpreMarginMobile.bottom : undefined,
				'margin-left': suffpreMarginMobile.left ? suffpreMarginMobile.left : undefined,
			},
			'.pb-animated-text--suffix': {
				'font-size' : suffpreFontSizeMobile ? suffpreFontSizeMobile + suffpreFontSizeType : undefined,
				'margin-top': suffpreMarginMobile.top ? suffpreMarginMobile.top : undefined,
				'margin-right': suffpreMarginMobile.right ? suffpreMarginMobile.right : undefined,
				'margin-bottom': suffpreMarginMobile.bottom ? suffpreMarginMobile.bottom : undefined,
				'margin-left': suffpreMarginMobile.left ? suffpreMarginMobile.left : undefined,
			}
		},
	};

	const styles = renderStyle( rules, selectorPrefix );
	return styles;
};
export default Styles;
