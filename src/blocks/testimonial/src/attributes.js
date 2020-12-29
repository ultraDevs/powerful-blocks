import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

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
			top: '15px',
			left: '15px',
			right: '15px',
			bottom: '15px',
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
		default: '',
	},
	hoverContentBackgroundColor: {
		type: 'string',
		default: '',
	},

	contentColor: {
		type: 'string',
		default: '#111',
	},

	contentTextAlign: {
		type: 'string',
		default: 'center',
	},

	contentWidth: {
		type: 'number',
		default: 80,
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

	contentMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '00px',
			right: '0px',
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

	contentBorderRadius: {
		type: 'number',
		default: 0,
	},

	contentBorderRadiusTablet: {
		type: 'number',
		default: 0,
	},

	contentBorderRadiusMobile: {
		type: 'number',
		default: 0,
	},

	imageData: {
		type: 'object',
		default: {
			id: undefined,
			alt: '',
			size: undefined,
			url: '',
		},
	},
	showImage: {
		type: 'boolean',
		default: true,
	},

	imageSize: {
		type: 'number',
		default: 50,
	},

	imageSizeTablet: {
		type: 'number',
		default: 50,
	},

	imageSizeMobile: {
		type: 'number',
		default: 50,
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
		type: 'number',
		default: 50,
	},

	imageBorderRadiusTablet: {
		type: 'number',
		default: 50,
	},

	imageBorderRadiusMobile: {
		type: 'number',
		default: 50,
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
			left: '0px',
			right: '10px',
			bottom: '0px',
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
		default: '#111',
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
	nameMargin: {
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
		default: 'Owner',
	},
	showTitle: {
		type: 'boolean',
		default: true,
	},

	titleColor: {
		type: 'string',
		default: '#111',
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
	titleMargin: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
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
};
export default attributes;
