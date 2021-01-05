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
	paddingTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	paddingMobile: {
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
	marginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	marginMobile: {
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

	hoverBorderStyle: {
		type: 'string',
		default: 'none',
	},
	hoverBorderSize: {
		type: 'number',
		default: 1,
	},
	hoverBorderColor: {
		type: 'string',
		default: '#ddd',
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

	borderRadiusTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	borderRadiusMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	// Animation
	inAnimation: {
		type: 'string',
		default: '',
	},
	inAnimationDuration: {
		type: 'string',
		default: '',
	},
	inAnimationDelay: {
		type: 'string',
		default: '',
	},

	outAnimation: {
		type: 'string',
		default: '',
	},
	outAnimationDuration: {
		type: 'string',
		default: '',
	},
	outAnimationDelay: {
		type: 'string',
		default: '',
	},

	// Positioning. 
	blockWidth: {
		type: 'string',
		default: '',
	},
	blockCustomWidth: {
		type: 'number',
		default: '',
	},
	blockCustomWidthTablet: {
		type: 'number',
		default: '',
	},
	blockCustomWidthMobile: {
		type: 'number',
		default: '',
	},
	blockzIndex: {
		type: 'string',
		default: '',
	},

	// Visibility
	hideOnDesktop: {
		type: 'boolean',
		default: '',
	},
	hideOnTablet: {
		type: 'boolean',
		default: '',
	},
	hideOnMobile: {
		type: 'boolean',
		default: '',
	},

	// Custom.
	customClass: {
		type: 'string',
		default: '',
	},
	customID: {
		type: 'string',
		default: '',
	},
};
export default advancedAttributes;