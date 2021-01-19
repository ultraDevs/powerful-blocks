import { __ } from '@wordpress/i18n';

import advancedAttributes from '../../helper/advancedAttributes';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	accordions: {
		type: 'array',
		default: [
			{
				isDefault: true,
				icon: '',
				enableIcon: true,
				'title': __( 'PB Accordion #1', 'powerful-blocks' ),
				contentType: 'content',
				'content': __(
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
					'powerful-blocks'
				),
			},
			{
				isDefault: false,
				icon: '',
				enableIcon: false,
				'title': __( 'PB Accordion #2', 'powerful-blocks' ),
				contentType: 'content',
				'content': __(
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
					'powerful-blocks'
				),
			},
			{
				isDefault: false,
				icon: '',
				enableIcon: false,
				'title': __( 'PB Accordion #3', 'powerful-blocks' ),
				contentType: 'content',
				'content': __(
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
					'powerful-blocks'
				),
			}
		],
	},
	


	// contentMargin: {
	// 	type: 'object',
	// 	default: {
	// 		top: '0px',
	// 		left: '00px',
	// 		right: '0px',
	// 		bottom: '10px',
	// 	},
	// },

	// imageData: {
	// 	type: 'object',
	// 	default: {
	// 		id: undefined,
	// 		alt: '',
	// 		size: undefined,
	// 		url: '',
	// 	},
	// },

	preset: {
		type: 'string',
		default: 'design-1',
	},
};

const finalAttributes = { ...attributes, ...advancedAttributes };
export default finalAttributes;
