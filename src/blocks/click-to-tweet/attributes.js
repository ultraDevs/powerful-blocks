import { __ } from '@wordpress/i18n';
const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},
	textAlign: {
		type: 'string',
		default: 'center',
	},

	tweet: {
		type: 'string',
		default: __( 'I am using Powerful Blocks!', 'powerful-blocks' ),
	},
	url: {
		type: 'string',
		default: '',
	},
	via: {
		type: 'string',
		default: 'ultraDevsBD',
	},

	textColor: {
		type: 'string',
		default: '#111',
	},
	textSize: {
		type: 'number',
		default: 18,
	},
	textSizeTablet: {
		type: 'number',
		default: 17,
	},
	textSizeMobile: {
		type: 'number',
		default: 16,
	},

	btnText: {
		type: 'string',
		default: __( 'Tweet Now', 'powerful-blocks' ),
	},
	btnBackgroundColor: {
		type: 'string',
		default: '#1EA1F1',
	},
	btnTxtColor: {
		type: 'string',
		default: '#fff',
	},
	btnFontSize: {
		type: 'number',
		default: 18,
	},
	btnFontSizeTablet: {
		type: 'number',
		default: 17,
	},
	btnFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	btnPadding: {
		type: 'object',
		default: {
			top: '5px',
			left: '10px',
			right: '10px',
			bottom: '5px',
		},
	},
	btnBorderRadius: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	btnBorderStyle: {
		type: 'string',
		default: 'solid',
	},
	btnBorderWidth: {
		type: 'number',
		default: 1,
	},
	btnBorderColor: {
		type: 'string',
		default: '#1EA1F1',
	},
};
export default attributes;
