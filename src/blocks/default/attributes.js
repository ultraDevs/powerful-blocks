import { __ } from '@wordpress/i18n';

import advancedAttributes from '../../helper/advancedAttributes';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	
	contentColor: {
		type: 'string',
		default: '#333',
	},
	


	contentMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '00px',
			right: '0px',
			bottom: '10px',
		},
	},

	imageData: {
		type: 'object',
		default: {
			id: undefined,
			alt: '',
			size: undefined,
			url: UDPB.assets + 'images/pb-placeholder.png',
		},
	},

	preset: {
		type: 'string',
		default: 'design-1',
	},
};

const finalAttributes = { ...attributes, ...advancedAttributes };
export default finalAttributes;
