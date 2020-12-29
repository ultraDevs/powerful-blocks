import { renderStyle } from '../../../components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;
	const {
		blockId,

	} = attributes;

	const selectorPrefix = `#pb-default-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-default': {
				'color': '#fff',
			},

		},
		tablet: {

		},
		mobile: {

		},
	};

	return renderStyle( rules, selectorPrefix );
};

export default Styles;
