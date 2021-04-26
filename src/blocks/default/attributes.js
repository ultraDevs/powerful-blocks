import { __ } from '@wordpress/i18n';

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
			top: '',
			left: '',
			right: '',
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

export default attributes;
