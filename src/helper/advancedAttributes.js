const advancedAttributes = {
    backgroundColor: {
		type: 'string',
		default: '',
	},
	hoverBackgroundColor: {
		type: 'string',
		default: '',
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
    
    margin: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	shadowColor: {
		type: 'string',
		default: 'transparent',
	},
	shadowHOffset: {
		type: 'number',
		default: '0',
	},
	shadowVOffset: {
		type: 'number',
		default: '0',
	},
	shadowBlur: {
		type: 'number',
		default: '0',
	},
	shadowSpread: {
		type: 'number',
		default: '0',
	},
	shadowType: {
		type: 'string',
		default: '',
	},
    
    borderStyle: {
		type: 'string',
		default: 'none',
	},
	borderSize: {
		type: 'number',
		default: 1,
	},
	borderColor: {
		type: 'string',
		default: '#ddd',
	},
};
export default advancedAttributes;