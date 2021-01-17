import { renderStyle } from '../../helper/utils';

import AdvancedCSS from '../../helper/advancedCSS';

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

	const advancedRules = AdvancedCSS( attributes );

	let keys = [...new Set([...Object.keys(rules),...Object.keys(advancedRules)])]
	let  finalRules = {}
	let merged = keys.forEach(key=>{
		finalRules[key] = {
			...rules[key],
			...advancedRules[key]
		}
	});

	const styles = renderStyle( finalRules, selectorPrefix );
	return styles;
};
export default Styles;
