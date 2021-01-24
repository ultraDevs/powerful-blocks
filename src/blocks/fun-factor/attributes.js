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

	mType: {
		type: 'string',
		default: 'icon',
	},

	icon: {
		type: 'string',
		default: 'far fa-smile',
	},
	iconSize: {
		type: 'number',
		default: '60',
	},
	iconColor: {
		type: 'string',
		default: '#333',
	},
	iconBGColor: {
		type: 'string',
		default: 'transparent',
	},

	mPosition: {
		type: 'string',
		default: 'top',
	},
	mValign: {
		type: 'string',
		default: 'center',
	},

	img: {
		type: 'object',
		default: {
			id: undefined,
			alt: '',
			size: undefined,
			url: UDPB.assets + 'images/pb-placeholder.png',
		},
	},
	imgHeightType: {
		type: "string",
		default: "px"
	},
	imgHeight: {
		type: "number",
		default: "100"
	},
	imgHeightTablet: {
		type: "number",
		default: "100"
	},
	imgHeightMobile: {
		type: "number",
		default: "100"
	},

	imgWidthType: {
		type: "string",
		default: "px"
	},
	imgWidth: {
		type: "number",
		default: "100"
	},
	imgWidthTablet: {
		type: "number",
		default: "100"
	},
	imgWidthMobile: {
		type: "number",
		default: "100"
	},

	mPadding: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	mPaddingTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	mPaddingMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
    },
    
    mMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	mMarginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	mMarginMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	mBorderStyle: {
		type: 'string',
		default: 'none',
	},
	mBorderSize: {
		type: 'number',
		default: 1,
	},
	mBorderColor: {
		type: 'string',
		default: '#ddd',
	},

	hoverMBorderStyle: {
		type: 'string',
		default: 'none',
	},
	hoverMBorderSize: {
		type: 'number',
		default: 1,
	},
	hoverMBorderColor: {
		type: 'string',
		default: '#ddd',
	},

	mBorderRadius: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	mBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	mBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	mOffsetType: {
		type: 'string',
		default: 'px',
	},
	mOffsetTop: {
		type: 'number',
		default: 0,
	},
	mOffsetTopTablet: {
		type: 'number',
		default: 0,
	},
	mOffsetTopMobile: {
		type: 'number',
		default: 0,
	},
	mOffsetLeft: {
		type: 'number',
		default: 0,
	},
	mOffsetLeftTablet: {
		type: 'number',
		default: 0,
	},
	mOffsetLeftMobile: {
		type: 'number',
		default: 0,
	},


	mShadowColor: {
		type: 'string',
		default: 'transparent',
	},
	mShadowHOffset: {
		type: 'number',
		default: '0',
	},
	mShadowVOffset: {
		type: 'number',
		default: '0',
	},
	mShadowBlur: {
		type: 'number',
		default: '0',
	},
	mShadowSpread: {
		type: 'number',
		default: '0',
	},
	mShadowType: {
		type: 'string',
		default: '',
	},

	hoverMShadowColor: {
		type: 'string',
		default: 'transparent',
	},
	hoverMShadowHOffset: {
		type: 'number',
		default: '0',
	},
	hoverMShadowVOffset: {
		type: 'number',
		default: '0',
	},
	hoverMShadowBlur: {
		type: 'number',
		default: '0',
	},
	hoverMShadowSpread: {
		type: 'number',
		default: '0',
	},
	hoverMShadowType: {
		type: 'string',
		default: '',
	},

	numberBPadding: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	numberBPaddingTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	numberBPaddingMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	title: {
		type: 'string',
		default: __( 'Fun Factor Title', 'powerful-blocks' ),
	},
	titleColor: {
		type: 'string',
		default: '#333',
	},

	titleMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '10px',
		},
	},
	titleMarginTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},
	titleMarginMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
		},
	},

	titleFontSize: {
		type: 'number',
		default: 18,
	},

	titleFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	titleFontSizeMobile: {
		type: 'number',
		default: 16,
	},

	titleFontFamily: {
		type: 'string',
		default: '',
	},

	titleFontSizeType: {
		type: 'string',
		default: 'px',
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
	},

	titleFontWeight: {
		type: 'string',
		default: 'normal',
	},
	titleTextTransform: {
		type: 'string',
		default: '',
	},
	titleTextDecoration: {
		type: 'string',
		default: '',
	},
	titleLetterSpacing: {
		type: 'number',
		default: '',
	},
	titleLineHeight: {
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
