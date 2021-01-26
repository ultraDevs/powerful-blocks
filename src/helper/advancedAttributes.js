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

	backgroundImg: {
		type: "string",
	},
	backgroundImgPosition: {
		type: "string",
		default: "center center"
	},
	backgroundImgSize: {
		type: "string",
		default: "cover"
	},
	backgroundImgRepeat: {
		type: "string",
		default: "no-repeat"
	},
	backgroundImgAttachment: {
		type: "string",
		default: "scroll"
	},

	backgroundImgOverlayColor : {
		type: "string",
		default: ""
	},

	backgroundOpacity: {
		type: "number",
		default: ""
	},

	hoverBackgroundImg: {
		type: "string",
	},
	hoverBackgroundImgPosition: {
		type: "string",
		default: "center center"
	},
	hoverBackgroundImgSize: {
		type: "string",
		default: "cover"
	},
	hoverBackgroundImgRepeat: {
		type: "string",
		default: "no-repeat"
	},
	hoverBackgroundImgAttachment: {
		type: "string",
		default: "scroll"
	},

	hoverBackgroundImgOverlayColor : {
		type: "string",
		default: ""
	},

	hoverBackgroundOpacity: {
		type: "number",
		default: ""
	},

	gradientValue: {
		type: 'string',
		default: '',
	},

	hoverGradientValue: {
		type: 'string',
		default: '',
	},
	

	padding: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
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
		default: '',
	},
	shadowHOffset: {
		type: 'number',
		default: 0,
	},
	shadowVOffset: {
		type: 'number',
		default: 0,
	},
	shadowBlur: {
		type: 'number',
		default: 2,
	},
	shadowSpread: {
		type: 'number',
		default: 2,
	},
	shadowType: {
		type: 'string',
		default: '',
	},

	hoverShadowColor: {
		type: 'string',
		default: '',
	},
	hoverShadowHOffset: {
		type: 'number',
		default: 0,
	},
	hoverShadowVOffset: {
		type: 'number',
		default: 0,
	},
	hoverShadowBlur: {
		type: 'number',
		default: 0,
	},
	hoverShadowSpread: {
		type: 'number',
		default: 0,
	},
	hoverShadowType: {
		type: 'string',
		default: '',
	},
    
    borderStyle: {
		type: 'string',
		default: '',
	},
	borderSize: {
		type: 'number',
		default: '',
	},
	borderColor: {
		type: 'string',
		default: '',
	},

	hoverBorderStyle: {
		type: 'string',
		default: '',
	},
	hoverBorderSize: {
		type: 'number',
		default: '',
	},
	hoverBorderColor: {
		type: 'string',
		default: '',
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
	inAnimationDurationCustom: {
		type: 'string',
		default: '',
	},
	inAnimationEasing: {
		type: 'string',
		default: '',
	},
	inAnimationEasingCustom: {
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
	outAnimationDurationCustom: {
		type: 'string',
		default: '',
	},
	outAnimationEasing: {
		type: 'string',
		default: '',
	},
	outAnimationEasingCustom: {
		type: 'string',
		default: '',
	},

	// Positioning. 
	blockWidth: {
		type: 'string',
		default: '',
	},
	blockHeightType: {
		type: 'string',
		default: 'px',
	},
	blockHeight: {
		type: 'number',
		default: '',
	},
	blockHeightTablet: {
		type: 'number',
		default: '',
	},
	blockHeightMobile: {
		type: 'number',
		default: '',
	},
	blockCustomWidthType: {
		type: 'string',
		default: 'px',
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

	// CSS Transform
	CSSTransform: {
		type: 'boolean',
		default: false,
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
	customAttributes: {
		type: 'string',
		default: '',
	},

	// Condition
	enableCondition: {
		type: 'boolean',
		default: false,
	},

	// Wrapper Link
	addWLink: {
		type: 'boolean',
		default: false,
	},
	wrapperLink: {
		type: 'string',
		default: '',
	},
	wrapperLinkNewTab: {
		type: 'boolean',
		default: true,
	},
	wrapperLinkNofollow: {
		type: 'boolean',
		default: false,
	},
};
export default advancedAttributes;