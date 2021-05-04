import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	txtAlign: {
		type: 'string',
		default: 'center',
	},

	icon: {
		type: 'string',
		default: 'fab fa-wordpress',
	},
	iconSize: {
		type: 'number',
		default: 60,
	},
	iconColor: {
		type: 'string',
		default: '#333',
	},
	iconBGColor: {
		type: 'string',
		default: '',
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
			bottom: '10px',
		},
	},
	mMarginTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '10px',
		},
	},
	mMarginMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '10px',
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

	contentBPadding: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	contentBPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	contentBPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},

	title: {
		type: 'string',
		default: __( 'PB Icon Box', 'powerful-blocks' ),
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
			bottom: '',
		},
	},
	titleMarginMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
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


	badgeText: {
		type: 'string',
	},
	badgeColor: {
		type: 'string',
		default: '#fff',
	},
	badgeBackgroundColor: {
		type: 'string',
		default: '#ff0000',
	},

	badgePositionV: {
		type: 'string',
		default: 'top',
	},
	badgePositionH: {
		type: 'string',
		default: 'right',
	},
	
	badgePadding: {
		type: 'object',
		default: {
			top: '0px',
			left: '5px',
			right: '5px',
			bottom: '0px',
		},
	},
	badgePaddingTablet: {
		type: 'object',
		default: {
			top: '0px',
			left: '5px',
			right: '5px',
			bottom: '0px',
		},
	},
	badgePaddingMobile: {
		type: 'object',
		default: {
			top: '0px',
			left: '5px',
			right: '5px',
			bottom: '0px',
		},
	},
	
	badgeBorderRadius: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	
	badgeBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	
	badgeBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	
	badgeFontSize: {
		type: 'number',
		default: 15,
	},
	
	badgeFontSizeTablet: {
		type: 'number',
		default: 15,
	},
	
	badgeFontSizeMobile: {
		type: 'number',
		default: 14,
	},
	
	badgeFontFamily: {
		type: 'string',
		default: '',
	},
	
	badgeFontSizeType: {
		type: 'string',
		default: 'px',
	},
	badgeFontStyle: {
		type: 'string',
		default: 'normal',
	},
	
	badgeFontWeight: {
		type: 'string',
		default: 'normal',
	},
	badgeTextTransform: {
		type: 'string',
		default: '',
	},
	badgeTextDecoration: {
		type: 'string',
		default: '',
	},
	badgeLetterSpacing: {
		type: 'number',
		default: '',
	},
	badgeLineHeight: {
		type: 'number',
		default: '',
	},


	preset: {
		type: 'string',
		default: 'design-1',
	},
};

export default attributes;
