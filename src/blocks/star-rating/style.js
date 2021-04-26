import { renderStyle } from '../../helper/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;
	const {
		blockId,
		sizeType,
		size,
		sizeTablet,
		sizeMobile,
		iconAlign,
	} = attributes;

	const selectorPrefix = `#pb-star-rating-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-star-rating--icon': {
				'font-size': size ? size + sizeType : undefined,
				'text-align': iconAlign ? iconAlign : undefined,
			},
		},
		tablet: {
			'.pb-star-rating--icon': {
				'font-size': sizeTablet ? sizeTablet + sizeType : undefined,
			},
		},
		mobile: {
			'.pb-star-rating--icon': {
				'font-size': sizeMobile ? sizeMobile + sizeType : undefined,
			},
		},
	};

	const styles = renderStyle( rules, selectorPrefix );
	return styles;
};

export default Styles;
