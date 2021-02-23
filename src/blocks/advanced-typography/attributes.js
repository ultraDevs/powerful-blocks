import { __ } from '@wordpress/i18n';

import advancedAttributes from '../../helper/advancedAttributes';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	headingColor: {
		type: 'string',
		default: '',
	},
	paragraphColor: {
		type: 'string',
		default: '',
	},

	headingFontFamily: {
		type: 'string',
		default: '',
	},

	headingFontSizeType: {
		type: 'string',
		default: 'px',
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
	},

	headingFontSize: {
		type: 'number',
		default: 18,
	},

	headingFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	headingFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	headingFontWeight: {
		type: 'string',
		default: 'normal',
	},
	headingTextTransform: {
		type: 'string',
		default: '',
	},
	headingTextDecoration: {
		type: 'string',
		default: '',
	},
	headingLetterSpacing: {
		type: 'number',
		default: '',
	},
	headingLineHeight: {
		type: 'number',
		default: '',
	},

	paragraphFontFamily: {
		type: 'string',
		default: '',
	},
	
	paragraphFontSizeType: {
		type: 'string',
		default: 'px',
	},
	paragraphFontStyle: {
		type: 'string',
		default: 'normal',
	},
	
	paragraphFontSize: {
		type: 'number',
		default: 18,
	},
	
	paragraphFontSizeTablet: {
		type: 'number',
		default: 17,
	},
	
	paragraphFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	paragraphFontWeight: {
		type: 'string',
		default: 'normal',
	},
	paragraphTextTransform: {
		type: 'string',
		default: '',
	},
	paragraphTextDecoration: {
		type: 'string',
		default: '',
	},
	paragraphLetterSpacing: {
		type: 'number',
		default: '',
	},
	paragraphLineHeight: {
		type: 'number',
		default: '',
	},
};

const finalAttributes = { ...attributes, ...advancedAttributes };
export default finalAttributes;
