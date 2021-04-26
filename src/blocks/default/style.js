import { renderStyle } from '../../helper/utils';

const Styles = ( props ) => {

	const attributes = props.attributes;

	const {
		blockId,
	} = attributes;

	const selectorPrefix = `#pb-default-${ blockId }`;

	let rules = {
		desktop: {
			'.pb-default-wrapper': {
				
			},
		},
		tablet: {
			'.pb-default-wrapper': {
				
			},
			
		},
		mobile: {
			'.pb-default-wrapper': {
				
			},
			
		},
	};
	
	const styles = renderStyle( rules, selectorPrefix );
	return styles;
};
export default Styles;
