import { __ } from '@wordpress/i18n';
const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},
	title: {
		type: 'string',
		default: __( 'Alert Title', 'powerful-blocks' ),
	},
	content: {
		type: 'string',
		default: __(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			'powerful-blocks'
		),
	},

	textAlign: {
		type: 'string',
		default: 'left',
	},

	displayType: {
		type: 'string',
		default: 'alwaysOn',
	},

	hideAfterTime: {
		type: 'number',
		default: 3,
	},

	backgroundColor: {
		type: 'string',
		default: '',
	},

	borderRadius: {
		type: 'object',
		default: {
			top: '5px',
			left: '5px',
			right: '5px',
			bottom: '5px',
		},
	},

	padding: {
		type: 'object',
		default: {
			top: '30px',
			left: '30px',
			right: '30px',
			bottom: '30px',
		},
	},

	bottomSpace: {
		type: 'number',
		default: 10,
	},

	titleColor: {
		type: 'string',
		default: '',
	},
	titleFontSize: {
		type: 'number',
		default: 20,
	},
	titleFontSizeTablet: {
		type: 'number',
		default: 19,
	},
	titleFontSizeMobile: {
		type: 'number',
		default: 18,
	},

	contentColor: {
		type: 'string',
		default: '',
	},
	contentFontSize: {
		type: 'number',
		default: 20,
	},
	contentFontSizeTablet: {
		type: 'number',
		default: 19,
	},
	contentFontSizeMobile: {
		type: 'number',
		default: 18,
	},
};
export default attributes;
