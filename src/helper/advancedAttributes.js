const advancedAttributes = {

	backgroundType: {
		type: 'string',
		default: 'color',
	},
	hoverBackgroundType: {
		type: 'string',
		default: 'color',
	},

    backgroundColor: {
		type: 'string',
		default: '',
	},
	hoverBackgroundColor: {
		type: 'string',
		default: '',
	},

	gradientValue: {
		type: 'string',
		default: '',
	},
	gradientAngle: {
		type: 'number',
		default: 0,
	},
	gradientColor1: {
		type: 'string',
	},
	gradientColor2: {
		type: 'string',
	},
	gradientLoc1: {
		type: 'number',
		default: 0,
	},
	gradientLoc2: {
		type: 'number',
		default: 100,
	},
	gradientPosition: {
		type: 'string',
		default: 'center center',
	},
	gradientType: {
		type: 'string',
		default: 'linear',
	},

	hoverGradientValue: {
		type: 'string',
		default: '',
	},
	hoverGradientAngle: {
		type: 'number',
		default: 0,
	},
	hoverGradientColor1: {
		type: 'string',
	},
	hoverGradientColor2: {
		type: 'string',
	},
	hoverGradientLoc1: {
		type: 'number',
		default: 0,
	},
	hoverGradientLoc2: {
		type: 'number',
		default: 100,
	},
	hoverGradientPosition: {
		type: 'string',
		default: 'center center',
	},
	hoverGradientType: {
		type: 'string',
		default: 'linear',
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