import { __ } from '@wordpress/i18n';
const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	headline: {
		type: 'string',
		default: ''
	},

	date: {
		type: 'string',
		default: ''
	},

	days: {
		type: 'string',
		default: '0'
	},
	daysLabel: {
		type: 'string',
		default: __( 'Days', 'powerful-blocks' )
	},
	showDays: {
		type: 'boolean',
		default: true
	},

	months: {
		type: 'string',
		default: '0'
	},

	hours: {
		type: 'string',
		default: '0'
	},
	hoursLabel: {
		type: 'string',
		default: __( 'Hours', 'powerful-blocks' )
	},
	showHours: {
		type: 'boolean',
		default: true
	},

	minutes: {
		type: 'string',
		default: '0'
	},
	minutesLabel: {
		type: 'string',
		default: __( 'Minutes', 'powerful-blocks' )
	},
	showMinutes: {
		type: 'boolean',
		default: true
	},

	seconds: {
		type: 'string',
		default: '0'
	},
	secondsLabel: {
		type: 'string',
		default: __( 'Seconds', 'powerful-blocks' )
	},
	showSeconds: {
		type: 'boolean',
		default: true
	},

	boxBackground: {
		type: 'string',
		default: '#111',
	},
	boxHeight: {
		type: 'number',
		default: ''
	},
	boxWidth: {
		type: 'number',
		default: ''
	},
	boxSpace: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	itemsAlign: {
		type: 'string',
		default: 'center'
	},

	padding: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	borderRadius: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderWidth: {
		type: 'number',
		default: 1,
	},
	borderColor: {
		type: 'string',
		default: '#111',
	},

	digitColor: {
		type: 'string',
		default: '#111',
	},
	digitFontSize: {
		type: 'number',
		default: 18
	},
	digitFontSizeTablet: {
		type: 'number',
		default: 17
	},
	digitFontSizeMobile: {
		type: 'number',
		default: 16
	},

	labelColor: {
		type: 'string',
		default: '#111',
	},
	labelFontSize: {
		type: 'number',
		default: 18
	},
	labelFontSizeTablet: {
		type: 'number',
		default: 17
	},
	labelFontSizeMobile: {
		type: 'number',
		default: 16
	},

};
export default attributes;
