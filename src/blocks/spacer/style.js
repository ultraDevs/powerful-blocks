import { renderStyle } from '../../helper/utils';

import AdvancedCSS from '../../helper/advancedCSS';

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
