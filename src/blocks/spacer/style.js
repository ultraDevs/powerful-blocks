import { renderStyle } from '../../helper/utils';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
		sHeightType,
		sHeight,
		sHeightTablet,
		sHeightMobile,
	} = attributes;

	const selectorPrefix = `#pb-pb-spacer-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-pb-spacer-wrapper': {
				height: sHeight ? sHeight + sHeightType : undefined,
			},
		},
		tablet: {
			'.pb-pb-spacer-wrapper': {
				height: sHeightTablet ? sHeightTablet + sHeightType : undefined,
			},
			
		},
		mobile: {
			'.pb-pb-spacer-wrapper': {
				height: sHeightMobile ? sHeightMobile + sHeightType : undefined,
			},
			
		},
	};

	const styles = renderStyle( rules, selectorPrefix );
	return styles;
};
export default Styles;
