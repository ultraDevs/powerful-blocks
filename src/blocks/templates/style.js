import { renderStyle } from '../../helper/utils';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
	} = attributes;

	const selectorPrefix = `#pb-templates-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-templates-wrapper': {
				
			},
		},
		tablet: {
			'.pb-templates-wrapper': {
				
			},
			
		},
		mobile: {
			'.pb-templates-wrapper': {
				
			},
			
		},
	};

	const styles = renderStyle( rules, selectorPrefix );
	return styles;
};
export default Styles;
