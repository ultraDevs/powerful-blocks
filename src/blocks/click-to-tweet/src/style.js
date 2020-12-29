import { renderStyle } from '../../../components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;
	const {
		blockId,
		textAlign,
		textColor,
		textSize,
		textSizeTablet,
		textSizeMobile,
		btnBackgroundColor,
		btnTxtColor,
		btnFontSize,
		btnFontSizeTablet,
		btnFontSizeMobile,
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
				'font-size': textSize ? textSize + 'px' : undefined,
			},
			'.pb-click-to-tweet--button': {
				'background-color': btnBackgroundColor
					? btnBackgroundColor
					: undefined,
				color: btnTxtColor ? btnTxtColor : undefined,
				'font-size': btnFontSize ? btnFontSize + 'px' : undefined,
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
				'border-color': btnTxtColor ? btnTxtColor : undefined,
			},
		},
		tablet: {
			'.pb-click-to-tweet--text': {
				'font-size': textSizeTablet ? textSizeTablet + 'px' : undefined,
			},
			'.pb-click-to-tweet--button': {
				'font-size': btnFontSizeTablet
					? btnFontSizeTablet + 'px'
					: undefined,
			},
		},
		mobile: {
			'.pb-click-to-tweet--text': {
				'font-size': textSizeMobile ? textSizeMobile + 'px' : undefined,
			},
			'.pb-click-to-tweet--button': {
				'font-size': btnFontSizeMobile
					? btnFontSizeMobile + 'px'
					: undefined,
			},
		},
	};

	return renderStyle( rules, selectorPrefix );
};

export default Styles;
