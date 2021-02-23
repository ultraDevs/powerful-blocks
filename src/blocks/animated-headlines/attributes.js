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

	loadingBarColor: {
		type: 'string',
		default: '#f30d55',
	},

	animationType: {
		type: 'string',
		default: 'clip',
	},

	textTag: {
		type: 'string',
		default: 'h3',
	},

	prefixText: {
		type: 'string',
		default: 'We Love',
	},
	suffixText: {
		type: 'string',
		default: '!',
	},
	animatedText: {
		type: 'array',
		default: [
			'WordPress',
			'PHP',
			'JavaScript'
		],
	},

	animatedTextColor: {
		type: 'string',
		default: '#333',
	},

	animatedTextMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '5px',
			right: '5px',
			bottom: '0px',
		},
	},
	animatedTextMarginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '5px',
			right: '5px',
			bottom: '0px',
		},
	},
	animatedTextMarginMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '5px',
			right: '5px',
			bottom: '0px',
		},
	},
	
	animatedTextFontFamily: {
		type: 'string',
		default: '',
	},

	animatedTextFontSizeType: {
		type: 'string',
		default: 'px',
	},
	animatedTextFontStyle: {
		type: 'string',
		default: 'normal',
	},

	animatedTextFontSize: {
		type: 'number',
		default: 18,
	},

	animatedTextFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	animatedTextFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	animatedTextFontWeight: {
		type: 'string',
		default: 'normal',
	},
	animatedTextTextTransform: {
		type: 'string',
		default: '',
	},
	animatedTextTextDecoration: {
		type: 'string',
		default: '',
	},
	animatedTextLetterSpacing: {
		type: 'number',
		default: '',
	},
	animatedTextLineHeight: {
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
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	suffpreMarginTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	suffpreMarginMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
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
