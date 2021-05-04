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


	rPadding: {
		type: 'object',
		default: {
			xs: {
				top: 5,
				right: 0,
				bottom: 0,
				left: 0,
			},
			sm: {
				top: 10,
				right: 0,
				bottom: 0,
				left: 0,
			},
			md: {
				top: 15,
				right: 0,
				bottom: 0,
				left: 0,
			}
		}
	},
	
	contentMarginType: {
		type: 'string',
		default: 'px',
	},

	contentMargin: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '10',
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
