import { renderStyle } from '../../components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;
	const { blockId, size, sizeTablet, sizeMobile, iconAlign } = attributes;

	const selectorPrefix = `#pb-star-rating-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-star-rating-wrapper': {
				'text-align': iconAlign ? iconAlign : undefined,
			},
			'.pb-star-rating--icon': {
				'font-size': size ? size + 'px' : undefined,
			},
		},
		tablet: {
			'.pb-star-rating--icon': {
				'font-size': sizeTablet ? sizeTablet + 'px' : undefined,
			},
		},
		mobile: {
			'.pb-star-rating--icon': {
				'font-size': sizeMobile ? sizeMobile + 'px' : undefined,
			},
		},
	};

	return renderStyle( rules, selectorPrefix );
};

export default Styles;
