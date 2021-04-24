import { renderStyle } from '../../helper/utils';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		activeItem,
		primaryLabel,
		primarySwitchBGColor,
		secondaryLabel,
		secondarySwitchBGColor,
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
		switchSize,
		switchSizeTablet,
		switchSizeMobile,
		switchSizeType,
		labelPosition,
	} = attributes;

	const selectorPrefix = `#pb-content-toggle-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-content-toggle-switch-wrapper': {
				'justify-content': switchAlign ? switchAlign : undefined,
				'align-items': labelPosition ? labelPosition : undefined,
			},
			'.pb-toggle-switch-w': {
				background: primarySwitchBGColor ? primarySwitchBGColor : undefined,
			},
			'.pb-toggle-switch-on .pb-toggle-switch-w': {
				background: secondarySwitchBGColor ? secondarySwitchBGColor : undefined,
			},
			'.pb-toggle-switch-label': {
				'font-size': switchSize ? switchSize + switchSizeType : undefined,
			},
			'.pb-toggle-label': {
				color: labelColor ? labelColor : undefined,
				'font-size': labelFontSize ? labelFontSize + labelFontSizeType : undefined,
				'font-family': labelFontFamily
					? labelFontFamily
					: undefined,
				'font-weight': labelFontWeight
					? labelFontWeight + '!important'
					: undefined,
				'font-style': labelFontStyle
					? labelFontStyle
					: undefined,
				'letter-spacing': labelLetterSpacing
					? labelLetterSpacing + 'px'
					: undefined,
				'line-height': labelLineHeight
					? labelLineHeight + 'px'
					: undefined,
				'text-transform': labelTextTransform
					? labelTextTransform
					: undefined,
				'text-decoration': labelTextDecoration
					? labelTextDecoration
					: undefined,
			},
			'.pb-toggle-label:hover': {
				color: hoverLabelColor ? hoverLabelColor + '!important' : undefined,
			},
			'.pb-toggle-label.pb-toggle-active': {
				color: activeLabelColor ? activeLabelColor : undefined,
			},
		},
		tablet: {
			'.pb-toggle-switch-label': {
				'font-size': switchSizeTablet ? switchSizeTablet + switchSizeType : undefined,
			},
			'.pb-toggle-label': {
				'font-size': labelFontSizeTablet ? labelFontSizeTablet + labelFontSizeType : undefined,
			}
		},
		mobile: {
			'.pb-toggle-switch-label': {
				'font-size': switchSizeMobile ? switchSizeMobile + switchSizeType : undefined,
			},
			'.pb-toggle-label': {
				'font-size': labelFontSizeMobile ? labelFontSizeMobile + labelFontSizeType : undefined,
			}
		}
	};

	const styles = renderStyle( rules, selectorPrefix );
	return styles;
};
export default Styles;
