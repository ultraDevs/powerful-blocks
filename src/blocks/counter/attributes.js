import { __ } from '@wordpress/i18n';

import advancedAttributes from '../../helper/advancedAttributes';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	txtAlign: {
		type: 'string',
		default: 'center',
	},
	startingNumber: {
		type: 'number',
		default: 0,
	},
	endingNumber: {
		type: 'number',
		default: 1000,
	},

	numberPrefix: {
		type: 'string',
		default: '',
	},
	numberSuffix: {
		type: 'string',
		default: '',
	},

	easing: {
		type: 'string',
		default: 'linear',
	},
	duration: {
		type: 'number',
		default: 1000,
	},
	delimiter: {
		type: 'string',
		default: ',',
	},
	rounding: {
		type: 'number',
		default: 0,
	},

	numberColor: {
		type: 'string',
		default: '#333',
	},

	numberMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '10px',
		},
	},
	numberMarginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	numberMarginMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	
	numberFontFamily: {
		type: 'string',
		default: '',
	},

	numberFontSizeType: {
		type: 'string',
		default: 'px',
	},
	numberFontStyle: {
		type: 'string',
		default: 'normal',
	},

	numberFontSize: {
		type: 'number',
		default: 18,
	},

	numberFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	numberFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	numberFontWeight: {
		type: 'string',
		default: 'normal',
	},
	numberTextTransform: {
		type: 'string',
		default: '',
	},
	numberTextDecoration: {
		type: 'string',
		default: '',
	},
	numberLetterSpacing: {
		type: 'number',
		default: '',
	},
	numberLineHeight: {
		type: 'number',
		default: '',
	},



	suffpreColor: {
		type: 'string',
		default: '#333',
	},
	suffpreMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '10px',
		},
	},
	suffpreMarginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	suffpreMarginMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	
	suffpreFontFamily: {
		type: 'string',
		default: '',
	},

	suffpreFontSizeType: {
		type: 'string',
		default: 'px',
	},
	suffpreFontStyle: {
		type: 'string',
		default: 'normal',
	},

	suffpreFontSize: {
		type: 'number',
		default: 18,
	},

	suffpreFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	suffpreFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	suffpreFontWeight: {
		type: 'string',
		default: 'normal',
	},
	suffpreTextTransform: {
		type: 'string',
		default: '',
	},
	suffpreTextDecoration: {
		type: 'string',
		default: '',
	},
	suffpreLetterSpacing: {
		type: 'number',
		default: '',
	},
	suffpreLineHeight: {
		type: 'number',
		default: '',
	},

	preset: {
		type: 'string',
		default: 'design-1',
	},
};

const finalAttributes = { ...attributes, ...advancedAttributes };
export default finalAttributes;