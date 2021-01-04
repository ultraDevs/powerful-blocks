import { renderStyle } from '../../components/utils';

const Styles = ( props ) => {
	const { attributes } = props;

	const {
		blockId,
		backgroundColor,
		borderRadius,
		padding,
		bottomSpace,
		textAlign,
		titleColor,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		contentColor,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
	} = attributes;

	const selectorPrefix = `#pb-alert-box-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-alert-box': {
				'background-color': backgroundColor
					? backgroundColor
					: undefined,
				'text-align': textAlign ? textAlign : undefined,
				padding:
					padding.top +
					' ' +
					padding.right +
					' ' +
					padding.bottom +
					' ' +
					padding.left,
				'border-radius':
					borderRadius.top +
					' ' +
					borderRadius.right +
					' ' +
					borderRadius.bottom +
					' ' +
					borderRadius.left,
			},
			'.pb-alert-box__title': {
				'font-size': titleFontSize ? titleFontSize + 'px' : undefined,
				color: titleColor ? titleColor : undefined,
				'margin-bottom': bottomSpace ? bottomSpace + 'px' : undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSize
					? contentFontSize + 'px'
					: undefined,
				color: contentColor ? contentColor : undefined,
			},
		},
		tablet: {
			'.pb-alert-box__title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + 'px'
					: undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + 'px'
					: undefined,
			},
		},
		mobile: {
			'.pb-alert-box__title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + 'px'
					: undefined,
			},
			'.pb-alert-box__content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + 'px'
					: undefined,
			},
		},
	};

	return renderStyle( rules, selectorPrefix );
};

export default Styles;
