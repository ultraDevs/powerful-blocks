import { __ } from '@wordpress/i18n';

import advancedAttributes from '../../helper/advancedAttributes';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	showContent: {
		type: 'boolean',
		default: true,
	},

	content: {
		type: 'string',
		default: __(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			'powerful-blocks'
		),
	},

	contentBackgroundColor: {
		type: 'string',
		default: '#f7f7f7',
	},
	hoverContentBackgroundColor: {
		type: 'string',
		default: '',
	},

	contentColor: {
		type: 'string',
		default: '#6D7680',
	},
	hoverContentColor: {
		type: 'string',
		default: '#222',
	},

	contentTextAlign: {
		type: 'string',
		default: 'center',
	},

	contentWidth: {
		type: 'number',
		default: 80,
	},

	contentFontFamily: {
		type: 'string',
		default: '',
	},

	contentFontSizeType: {
		type: 'string',
		default: 'px',
	},
	contentFontStyle: {
		type: 'string',
		default: 'normal',
	},

	contentFontSize: {
		type: 'number',
		default: 18,
	},

	contentFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	contentFontSizeMobile: {
		type: 'number',
		default: 16,
	},
	contentFontWeight: {
		type: 'string',
		default: 'normal',
	},
	contentTextTransform: {
		type: 'string',
		default: '',
	},
	contentTextDecoration: {
		type: 'string',
		default: '',
	},
	contentLetterSpacing: {
		type: 'number',
		default: '',
	},
	contentLineHeight: {
		type: 'number',
		default: '',
	},


	contentMargin: {
		type: 'object',
		default: {
			top: '',
			left: '00px',
			right: '',
			bottom: '10px',
		},
	},
	contentMarginTablet: {
		type: 'object',
		default: {
			top: '',
			left: '00px',
			right: '',
			bottom: '10px',
		},
	},
	contentMarginMobile: {
		type: 'object',
		default: {
			top: '',
			left: '00px',
			right: '',
			bottom: '10px',
		},
	},
	contentPadding: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	contentPaddingTablet: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},
	contentPaddingMobile: {
		type: 'object',
		default: {
			top: '10px',
			left: '10px',
			right: '10px',
			bottom: '10px',
		},
	},

	contentBorderRadius: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},

	contentBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	contentBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},

	imageData: {
		type: 'object',
		default: {
			id: undefined,
			alt: '',
			size: undefined,
			url: UDPB.assets + 'images/pb-placeholder.png',
		},
	},
	showImage: {
		type: 'boolean',
		default: true,
	},

	imageSizeType: {
		type: 'string',
		default: 'px',
	},

	imageSize: {
		type: 'number',
		default: 60,
	},

	imageSizeTablet: {
		type: 'number',
		default: 50,
	},

	imageSizeMobile: {
		type: 'number',
		default: 40,
	},

	imageBorderStyle: {
		type: 'string',
		default: 'none',
	},
	imageBorderSize: {
		type: 'number',
		default: 1,
	},
	imageBorderColor: {
		type: 'string',
		default: '#111',
	},

	imageBorderRadius: {
		type: 'object',
		default: {
			top: '100px',
			left: '100px',
			right: '100px',
			bottom: '100px',
		},
	},

	imageBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '100px',
			left: '100px',
			right: '100px',
			bottom: '100px',
		},
	},
	imageBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '100px',
			left: '100px',
			right: '100px',
			bottom: '100px',
		},
	},


	imageShadowColor: {
		type: 'string',
		default: 'transparent',
	},
	imageShadowHOffset: {
		type: 'number',
		default: '0',
	},
	imageShadowVOffset: {
		type: 'number',
		default: '0',
	},
	imageShadowBlur: {
		type: 'number',
		default: '0',
	},
	imageShadowSpread: {
		type: 'number',
		default: '0',
	},

	imageShowContent: {
		type: 'boolean',
		default: true,
	},

	imagePosition: {
		type: 'string',
		default: 'left',
	},

	imageMargin: {
		type: 'object',
		default: {
			top: '10px',
			left: '',
			right: '10px',
			bottom: '',
		},
	},
	imageMarginTablet: {
		type: 'object',
		default: {
			top: '10px',
			left: '',
			right: '10px',
			bottom: '',
		},
	},
	imageMarginMobile: {
		type: 'object',
		default: {
			top: '10px',
			left: '',
			right: '10px',
			bottom: '',
		},
	},

	name: {
		type: 'string',
		default: 'MH Imon',
	},

	showName: {
		type: 'boolean',
		default: true,
	},
	nameColor: {
		type: 'string',
		default: '#6D7680',
	},
	nameTextAlign: {
		type: 'string',
		default: 'left',
	},

	nameFontSize: {
		type: 'number',
		default: 18,
	},

	nameFontSizeTablet: {
		type: 'number',
		default: 17,
	},

	nameFontSizeMobile: {
		type: 'number',
		default: 16,
	},

	nameFontFamily: {
		type: 'string',
		default: '',
	},

	nameFontSizeType: {
		type: 'string',
		default: 'px',
	},
	nameFontStyle: {
		type: 'string',
		default: 'normal',
	},

	nameFontWeight: {
		type: 'string',
		default: 'normal',
	},
	nameTextTransform: {
		type: 'string',
		default: '',
	},
	nameTextDecoration: {
		type: 'string',
		default: '',
	},
	nameLetterSpacing: {
		type: 'number',
		default: '',
	},
	nameLineHeight: {
		type: 'number',
		default: '',
	},


	nameMargin: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	nameMarginTablet: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
		},
	},
	nameMarginMobile: {
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
		default: 'Owner',
	},
	showTitle: {
		type: 'boolean',
		default: true,
	},

	titleColor: {
		type: 'string',
		default: '#6D7680',
	},
	titleTextAlign: {
		type: 'string',
		default: 'left',
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

	titleMargin: {
		type: 'object',
		default: {
			top: '',
			left: '',
			right: '',
			bottom: '',
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

	clientInfoPosition: {
		type: 'string',
		default: 'after-content',
	},

	ratingsAlign: {
		type: 'string',
		default: 'center',
	},
	showRatings: {
		type: 'boolean',
		default: true,
	},
	ratingsPosition: {
		type: 'string',
		default: 'after-content',
	},

	preset: {
		type: 'string',
		default: 'design-1',
	},

	displayBubble: {
		type: 'boolean',
		default: false,
	},
	bubblePosition: {
		type: 'string',
		default: 'bottom',
	},
	bubbleSize: {
		type: 'number',
		default: '15',
	},
	bubbleColor: {
		type: 'string',
		default: '#f7f7f7',
	},
};

const finalAttributes = { ...attributes, ...advancedAttributes };
export default finalAttributes;
