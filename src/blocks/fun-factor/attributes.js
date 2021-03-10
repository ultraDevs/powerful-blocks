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
		default: '',
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
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	mPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	mPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
    },
    
    mMargin: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	mMarginTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	mMarginMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
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
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},

	mBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},

	mBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},

	mOffsetType: {
		type: 'string',
		default: 'px',
	},
	mOffsetTop: {
		type: 'number',
		default: '',
	},
	mOffsetTopTablet: {
		type: 'number',
		default: '',
	},
	mOffsetTopMobile: {
		type: 'number',
		default: '',
	},
	mOffsetLeft: {
		type: 'number',
		default: '',
	},
	mOffsetLeftTablet: {
		type: 'number',
		default: '',
	},
	mOffsetLeftMobile: {
		type: 'number',
		default: '',
	},


	mShadowColor: {
		type: 'string',
		default: '',
	},
	mShadowHOffset: {
		type: 'number',
		
	},
	mShadowVOffset: {
		type: 'number',
		
	},
	mShadowBlur: {
		type: 'number',
		
	},
	mShadowSpread: {
		type: 'number',
		
	},
	mShadowType: {
		type: 'string',
		default: '',
	},

	hoverMShadowColor: {
		type: 'string',
		default: '',
	},
	hoverMShadowHOffset: {
		type: 'number',
		
	},
	hoverMShadowVOffset: {
		type: 'number',
		
	},
	hoverMShadowBlur: {
		type: 'number',
		
	},
	hoverMShadowSpread: {
		type: 'number',
		
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
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	numberBPaddingMobile: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
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
			top: '',
			left: '',
			right: '',
			bottom: '10px',
		},
	},
	titleMarginTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '10px',
		},
	},
	titleMarginMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '10px',
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
