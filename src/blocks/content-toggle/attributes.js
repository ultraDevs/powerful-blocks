import { __ } from '@wordpress/i18n';

import advancedAttributes from '../../helper/advancedAttributes';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	toggles: {
		type: 'array',
		default: [
			{
				'slug' : 'primary',
				'title': 'Primary',
			},
			{
				'slug' : 'secondary',
				'title': 'Secondary',
			},
		]
	},

	activeItem: {
		type: 'string',
		default: 'primary'
	},

	primaryLabel: {
		type: 'string',
		default: __( 'Primary', 'powerful-blocks' ),
	},
	primarySwitchBGColor: {
		type: 'string',
		default: '#f30d55',
	},

	secondaryLabel: {
		type: 'string',
		default: __( 'Secondary', 'powerful-blocks' ),
	},

	secondarySwitchBGColor: {
		type: 'string',
		default: '#5820e5',
	},

	labelColor: {
		type: 'string',
		default: '#333',
	},
	hoverLabelColor: {
		type: 'string',
		default: '#111',
	},
	activeLabelColor: {
		type: 'string',
		default: '#111',
	},

	labelFontSize: {
		type: 'number',
		default: 18,
	},
	
	labelFontSizeTablet: {
		type: 'number',
		default: 17,
	},
	
	labelFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	
	labelFontFamily: {
		type: 'string',
		default: '',
	},
	
	labelFontSizeType: {
		type: 'string',
		default: 'px',
	},
	labelFontStyle: {
		type: 'string',
		default: 'normal',
	},
	
	labelFontWeight: {
		type: 'string',
		default: 'normal',
	},
	labelTextTransform: {
		type: 'string',
		default: '',
	},
	labelTextDecoration: {
		type: 'string',
		default: '',
	},
	labelLetterSpacing: {
		type: 'number',
		default: '',
	},
	labelLineHeight: {
		type: 'number',
		default: '',
	},

	switchAlign: {
		type: 'string',
		default: 'flex-start',
	},
	switchPosition: {
		type: 'string',
		default: 'before',
	},

	switchStyle: {
		type: 'string',
		default: 'rectangle',
	},

	switchSize: {
		type: 'number',
		default: 18,
	},
	
	switchSizeTablet: {
		type: 'number',
		default: 17,
	},
	
	switchSizeMobile: {
		type: 'number',
		default: 16,
	},
	
	switchSizeType: {
		type: 'string',
		default: 'px',
	},

	labelPosition: {
		type: 'string',
		default: 'center',
	},
};

const finalAttributes = { ...attributes, ...advancedAttributes };
export default finalAttributes;
