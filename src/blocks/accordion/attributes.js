import { __ } from '@wordpress/i18n';

import advancedAttributes from '../../helper/advancedAttributes';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	accordionType: {
		type: 'string',
		default: 'accordion',
	},
	toggleSpeed: {
		type: 'number',
		default: 300,
	},

	accordions: {
		type: 'array',
		default: [
			{
				isDefault: true,
				icon: 'fas fa-plus',
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
				icon: 'fas fa-plus',
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
				icon: 'fas fa-plus',
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

	toggleIcon: {
		type: 'boolean',
		default: true,
	},
	toggleOpenIcon: {
		type: 'string',
		default: 'fas fa-plus  ',
	},
	toggleCloseIcon: {
		type: 'string',
		default: 'fas fa-minus  ',
	},

	titleBackgroundColor: {
		type: 'string',
		default: '#ccc',
	},
	activeTitleBackgroundColor: {
		type: 'string',
		default: '#333',
	},
	hoverTitleBackgroundColor: {
		type: 'string',
		default: '#333',
	},


	titleTag: {
		type: 'string',
		default: 'h3',
	},

	titleColor: {
		type: 'string',
		default: '#6D7680',
	},
	activeTitleColor: {
		type: 'string',
		default: '#fff',
	},
	hoverTitleColor: {
		type: 'string',
		default: '#fff',
	},
	
	
	titleTextAlign: {
		type: 'string',
		default: 'left',
	},

	titleFontSize: {
		type: 'number',
		default: 16,
	},

	titleFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	titleFontSizeMobile: {
		type: 'number',
		default: 16,
	},

	titleFontFamily: {
		type: 'string',
		default: '',
	},

	titleFontSizeType: {
		type: 'string',
		default: 'px',
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
	},

	titleFontWeight: {
		type: 'string',
		default: 'normal',
	},
	titleTextTransform: {
		type: 'string',
		default: '',
	},
	titleTextDecoration: {
		type: 'string',
		default: '',
	},
	titleLetterSpacing: {
		type: 'number',
		default: '',
	},
	titleLineHeight: {
		type: 'number',
		default: '',
	},

	titleMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '10px',
			right: '0px',
			bottom: '0px',
		},
	},
	titleMarginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	titleMarginMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},


	titlePadding: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	titlePaddingTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	titlePaddingMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},


	contentBackgroundColor: {
		type: 'string',
		default: '#f7f7f7',
	},
	activeContentBackgroundColor: {
		type: 'string',
		default: '#f7f7f7',
	},
	hoverContentBackgroundColor: {
		type: 'string',
		default: '',
	},

	contentColor: {
		type: 'string',
		default: '#555',
	},
	activeContentColor: {
		type: 'string',
		default: '#444',
	},
	hoverContentColor: {
		type: 'string',
		default: '#444',
	},

	contentTextAlign: {
		type: 'string',
		default: 'left',
	},

	contentWidth: {
		type: 'number',
		default: 80,
	},

	contentFontFamily: {
		type: 'string',
		default: '',
	},

	contentFontSizeType: {
		type: 'string',
		default: 'px',
	},
	contentFontStyle: {
		type: 'string',
		default: 'normal',
	},

	contentFontSize: {
		type: 'number',
		default: 18,
	},

	contentFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	contentFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	contentFontWeight: {
		type: 'string',
		default: 'normal',
	},
	contentTextTransform: {
		type: 'string',
		default: '',
	},
	contentTextDecoration: {
		type: 'string',
		default: '',
	},
	contentLetterSpacing: {
		type: 'number',
		default: '',
	},
	contentLineHeight: {
		type: 'number',
		default: '',
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
	contentMarginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '00px',
			right: '0px',
			bottom: '10px',
		},
	},
	contentMarginMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '00px',
			right: '0px',
			bottom: '10px',
		},
	},
	contentPadding: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	contentPaddingTablet: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	contentPaddingMobile: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},

	iconSizeUnitType: {
		type: 'string',
		default: 'px',
	},
	iconSize: {
		type: 'number',
		default: 15,
	},

	iconSizeTablet: {
		type: 'number',
		default: 15,
	},

	iconSizeMobile: {
		type: 'number',
		default: 15,
	},

	itemsGapUnitType: {
		type: 'string',
		default: 'px',
	},
	itemsGap: {
		type: 'number',
		default: 15,
	},

	itemsGapTablet: {
		type: 'number',
		default: 15,
	},

	itemsGapMobile: {
		type: 'number',
		default: 15,
	},


	toggleIconBackgroundColor: {
		type: 'string',
		default: '#ccc',
	},
	activeToggleIconBackgroundColor: {
		type: 'string',
		default: '#333',
	},
	hoverToggleIconBackgroundColor: {
		type: 'string',
		default: '#333',
	},

	toggleIconColor: {
		type: 'string',
		default: '#6D7680',
	},
	activeToggleIconColor: {
		type: 'string',
		default: '#fff',
	},
	hoverToggleIconColor: {
		type: 'string',
		default: '#fff',
	},

	toggleIconSizeUnitType: {
		type: 'string',
		default: 'px',
	},
	toggleIconSize: {
		type: 'number',
		default: 15,
	},

	toggleIconSizeTablet: {
		type: 'number',
		default: 15,
	},

	toggleIconSizeMobile: {
		type: 'number',
		default: 15,
	},

	
	toggleIconPadding: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	toggleIconPaddingTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	toggleIconPaddingMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	toggleIconBorderRadius: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	toggleIconBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	toggleIconBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
};

const finalAttributes = { ...attributes, ...advancedAttributes };
export default finalAttributes;
