import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	sHeightType : {
		type: 'string',
		default: 'px',
	},
	sHeight: {
		type: 'number',
		default: 40,
	},
	sHeightTablet: {
		type: 'number',
		default: 40,
	},
	sHeightMobile: {
		type: 'number',
		default: 40,
	},


};

export default attributes;
