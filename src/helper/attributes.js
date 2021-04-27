export default {
    backgroundType: {
        type: 'string',
        default: 'color',
    },
    hoverBackgroundType: {
        type: 'string',
        default: 'color',
    },

    pbBackgroundColor: {
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
        default: ""
    },
    hoverBackgroundImgSize: {
        type: "string",
        default: ""
    },
    hoverBackgroundImgRepeat: {
        type: "string",
        default: ""
    },
    hoverBackgroundImgAttachment: {
        type: "string",
        default: ""
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
            top: '',
            left: '',
            right: '',
            bottom: '',
        },
    },
    paddingMobile: {
        type: 'object',
        default: {
            top: '',
            left: '',
            right: '',
            bottom: '',
        },
    },
    
    margin: {
        type: 'object',
        default: {
            top: '',
            left: '',
            right: '',
            bottom: '',
        },
    },
    marginTablet: {
        type: 'object',
        default: {
            top: '',
            left: '',
            right: '',
            bottom: '',
        },
    },
    marginMobile: {
        type: 'object',
        default: {
            top: '',
            left: '',
            right: '',
            bottom: '',
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
        default: 15,
    },
    shadowSpread: {
        type: 'number',
        default: 4,
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
        default: 15,
    },
    hoverShadowSpread: {
        type: 'number',
        default: 5,
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
    },
    hoverBorderColor: {
        type: 'string',
        default: '',
    },

    borderRadius: {
        type: 'object',
        default: {
            top: '',
            left: '',
            right: '',
            bottom: '',
        },
    },

    borderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            left: '',
            right: '',
            bottom: '',
        },
    },

    borderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            left: '',
            right: '',
            bottom: '',
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
    inAnimationDurationCustom: {
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
    outAnimationDurationCustom: {
        type: 'string',
        default: '',
    },
    animationDelay: {
        type: 'string',
        default: '',
    },
    animationEasing: {
        type: 'string',
        default: '',
    },
    animationEasingCustom: {
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
        default: false,
    },
    wrapperLinkNofollow: {
        type: 'boolean',
        default: false,
    }
};