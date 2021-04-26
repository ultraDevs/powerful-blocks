import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	currentTab: {
		type: 'string',
		default: 'tab-1',
	},

	tabs: {
		type: 'array',
		default: [
			{
				'slug' : 'tab-1',
				'title': 'Tab 1',
			},
			{
				'slug' : 'tab-2',
				'title': 'Tab 2',
			},
		]
	},

	tabsType: {
		type: 'string',
		default: 'tabs',
	},

	tabsAlign: {
		type: 'string',
		default: 'flex-start',
	},
	tabsVAlign: {
		type: 'string',
		default: 'horizontal',
	},

	titleColor: {
		type: 'string',
		default: '#6D7680',
	},
	hoverTitleColor: {
		type: 'string',
		default: '#6D7680',
	},
	activeTitleColor: {
		type: 'string',
		default: '#6D7680',
	},

	titleBGColor: {
		type: 'string',
		default: '#fff',
	},
	hoverTitleBGColor: {
		type: 'string',
		default: '#eee',
	},
	activeTitleBGColor: {
		type: 'string',
		default: '#eee',
	},

	titleTextAlign: {
		type: 'string',
		default: 'left',
	},

	titleFontSize: {
		type: 'number',
		default: 18,
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
	
	contentBackgroundColor: {
		type: 'string',
		default: '',
	},
	hoverContentBackgroundColor: {
		type: 'string',
		default: '',
	},

	contentColor: {
		type: 'string',
		default: '#6D7680',
	},
	hoverContentColor: {
		type: 'string',
		default: '#222',
	},


	contentMargin: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	contentMarginTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	contentMarginMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
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

	contentBorderRadius: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},

	contentBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	contentBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
};

export default attributes;
