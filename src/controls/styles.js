import { renderStyle } from '../helper/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,
		backgroundType,
		hoverBackgroundType,

		pbBackgroundColor,
		hoverBackgroundColor,

		backgroundImg,
        backgroundImgPosition,
        backgroundImgSize,
        backgroundImgRepeat,
        backgroundImgAttachment,
        backgroundImgOverlayColor,
		backgroundOpacity,

		hoverBackgroundImg,
        hoverBackgroundImgPosition,
        hoverBackgroundImgSize,
        hoverBackgroundImgRepeat,
        hoverBackgroundImgAttachment,
        hoverBackgroundImgOverlayColor,
        hoverBackgroundOpacity,

		gradientValue,

        hoverGradientValue,

        padding,
        paddingTablet,
        paddingMobile,
        margin,
        marginTablet,
        marginMobile,
        shadowColor,
        shadowHOffset,
        shadowVOffset,
        shadowBlur,
        shadowSpread,
		shadowType,
		hoverShadowColor,
        hoverShadowHOffset,
        hoverShadowVOffset,
        hoverShadowBlur,
        hoverShadowSpread,
		hoverShadowType,
		
        borderStyle,
        borderSize,
        borderColor,
        hoverBorderStyle,
        hoverBorderSize,
        hoverBorderColor,
        borderRadius,
        borderRadiusTablet,
        borderRadiusMobile,
		
        inAnimationDuration,
        outAnimationDuration,
        inAnimationDurationCustom,
        outAnimationDurationCustom,

        animationDelay,
        animationEasing,
        animationEasingCustom,

		blockHeightType,
        blockHeight,
        blockHeightMobile,
		blockHeightTablet,
		
		blockWidth,
		blockCustomWidthType,
        blockCustomWidth,
        blockCustomWidthTablet,
        blockCustomWidthMobile,
        blockzIndex,

		pbFontSize,
		pbFontSizeTablet,
		pbFontSizeMobile,
		pbFontFamily,
		pbFontWeight,
		pbTextTransform,
		pbTextDecoration,
		pbLetterSpacing,
		pbLineHeight,
		pbFontSizeType,
		pbFontStyle,

	} = attributes;

	const selectorPrefix = `#pb-wrap-${ blockId }`;

	const sTag = 'p';

	const typoSelector = ` > .pb-block-c-wrapper ${sTag}`;

	let { fontsPropertiesDesktop, fontsPropertiesTable, fontsPropertiesMobile } = {};

	const typo_blocks = [
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/quote',
		'core/code',
		'core/preformatted',
		'core/verse'
	];

	if ( typo_blocks.includes( props.name ) ) {
		fontsPropertiesDesktop = {
			'font-family': pbFontFamily
				? `"${pbFontFamily}" !important`
				: undefined,
			'font-size': pbFontSize
				? pbFontSize + pbFontSizeType
				: undefined,
			'font-weight': pbFontWeight
				? pbFontWeight + '!important'
				: undefined,
			'font-style': pbFontStyle
				? pbFontStyle
				: undefined,
			'letter-spacing': pbLetterSpacing
				? pbLetterSpacing + 'px'
				: undefined,
			'line-height': pbLineHeight
				? pbLineHeight + 'px'
				: undefined,
			'text-transform': pbTextTransform
				? pbTextTransform
				: undefined,
			'text-decoration': pbTextDecoration
				? pbTextDecoration
				: undefined,
		};
	
		fontsPropertiesTable = {
			'font-size': pbFontSizeTablet
				? pbFontSizeTablet + pbFontSizeType
				: undefined,
		};
		fontsPropertiesMobile = {
			'font-size': pbFontSizeMobile
				? pbFontSizeMobile + pbFontSizeType
				: undefined,
		};
	}

	let { backGroundProperties, backgroundHoverProperties } = {};

	if ( 'image' === backgroundType ) {
		backGroundProperties = {
			'background': backgroundImg ? `url( ${ backgroundImg } )` : undefined,
			'background-position': backgroundImgPosition ? backgroundImgPosition : undefined,
			'background-repeat': backgroundImgRepeat ? backgroundImgRepeat : undefined,
			'background-attachment': backgroundImgAttachment ? backgroundImgAttachment : undefined,
			'background-size': backgroundImgSize ? backgroundImgSize : undefined,
		};
	} else {
		backGroundProperties = {
			background: 'color' === backgroundType ? pbBackgroundColor : gradientValue
		};
	}
	if ( 'image' === hoverBackgroundType ) {
		backgroundHoverProperties = {
			'background': hoverBackgroundImg ? `url( ${ hoverBackgroundImg } )` : undefined,
			'background-position': hoverBackgroundImgPosition ? hoverBackgroundImgPosition : undefined,
			'background-repeat': hoverBackgroundImgRepeat ? hoverBackgroundImgRepeat : undefined,
			'background-attachment': hoverBackgroundImgAttachment ? hoverBackgroundImgAttachment : undefined,
			'background-size': hoverBackgroundImgSize ? hoverBackgroundImgSize : undefined,
		};
	} else {
		backgroundHoverProperties = {
			background: 'color' === hoverBackgroundType ? hoverBackgroundColor : hoverGradientValue
		};
	}

	let { widthPropertiesDesktop, widthPropertiesTablet, widthPropertiesMobile } = {};

	if ( 'inline' === blockWidth ) {
		widthPropertiesDesktop = {
			display: 'inline-block',
		};
	}

	if ( 'custom' === blockWidth ) {
		widthPropertiesDesktop = {
			width: blockCustomWidth ? blockCustomWidth + blockCustomWidthType : undefined,
		};
		widthPropertiesTablet = {
			width: blockCustomWidthTablet ? blockCustomWidthTablet + blockCustomWidthType : undefined,
		};
		widthPropertiesMobile = {
			width: blockCustomWidthMobile ? blockCustomWidthMobile + blockCustomWidthType : undefined,
		};
	}


	let rules = {
		desktop: {
            ' > .pb-block-c-wrapper' : {
				...backGroundProperties,
				'padding-top': padding.top ? padding.top : undefined,
				'padding-right': padding.right ? padding.right : undefined,
				'padding-bottom': padding.bottom ? padding.bottom : undefined,
				'padding-left': padding.left ? padding.left : undefined,
				'margin-top': margin.top ? margin.top : undefined,
				'margin-right': margin.right ? margin.right : undefined,
				'margin-bottom': margin.bottom ? margin.bottom : undefined,
				'margin-left': margin.left ? margin.left : undefined,

				'box-shadow': shadowColor ? shadowType + ' ' +
				shadowHOffset +
				'px ' +
				shadowVOffset +
				'px ' +
				shadowBlur +
				'px ' +
				shadowSpread +
				'px ' +
				shadowColor : undefined,
				'border-width': borderSize
					? borderSize + 'px'
					: undefined,
				'border-style': borderStyle ? borderStyle : undefined,
				'border-color': borderColor ? borderColor : undefined,

				'border-radius': '' !== borderRadius ? ( borderRadius.top ? borderRadius.top : '0px' ) + ' ' + ( borderRadius.right ? borderRadius.right : '0px') + ' ' + ( borderRadius.bottom ? borderRadius.bottom : '0px' ) + ' ' + ( borderRadius.left ? borderRadius.left : '0px' ) : undefined,

				'z-index': blockzIndex ? blockzIndex : undefined,
				height: blockHeight ? blockHeight + blockHeightType : undefined,
				...fontsPropertiesDesktop,
				... widthPropertiesDesktop,
			},
			' > .pb-block-c-wrapper:hover': {
				... backgroundHoverProperties,
				'border-width': hoverBorderSize
					? hoverBorderSize + 'px'
					: undefined,
				'border-style': hoverBorderStyle ? hoverBorderStyle : undefined,
				'border-color': hoverBorderColor ? hoverBorderColor : undefined,
				'box-shadow': hoverShadowColor ? hoverShadowType + ' ' +
				hoverShadowHOffset +
				'px ' +
				hoverShadowVOffset +
				'px ' +
				hoverShadowBlur +
				'px ' +
				hoverShadowSpread +
				'px ' + hoverShadowColor : undefined,
			},
			'.pb-animation' : {
				'animation-delay' : animationDelay ? animationDelay + 's' : undefined,
				'animation-timing-function' : animationEasing ? 'custom' === animationEasing ? animationEasingCustom : animationEasing : undefined,
			},
			'.pb-animation .pb__animated' : {
				'animation-duration' : 'custom' === inAnimationDuration ? inAnimationDurationCustom + 's' : undefined,
			},
			'.pb-animation .pb__animated_out' : {
				'animation-duration' : 'custom' === outAnimationDuration ? outAnimationDurationCustom + 's' : undefined,
			},
		},
		tablet: {
			' > .pb-block-c-wrapper': {
				'padding-top': paddingTablet.top ? paddingTablet.top : undefined,
				'padding-right': paddingTablet.right ? paddingTablet.right : undefined,
				'padding-bottom': paddingTablet.bottom ? paddingTablet.bottom : undefined,
				'padding-left': paddingTablet.left ? paddingTablet.left : undefined,

				'margin-top': marginTablet.top ? marginTablet.top : undefined,
				'margin-right': marginTablet.right ? marginTablet.right : undefined,
				'margin-bottom': marginTablet.bottom ? marginTablet.bottom : undefined,
				'margin-left': marginTablet.left ? marginTablet.left : undefined,
				'border-radius': '' !== borderRadiusTablet ? ( borderRadiusTablet.top ? borderRadiusTablet.top : '0px' ) + ' ' + ( borderRadiusTablet.right ? borderRadiusTablet.right : '0px') + ' ' + ( borderRadiusTablet.bottom ? borderRadiusTablet.bottom : '0px' ) + ' ' + ( borderRadiusTablet.left ? borderRadiusTablet.left : '0px' ) : undefined,

				height: blockHeightTablet ? blockHeightTablet + blockHeightType : undefined,
				...fontsPropertiesTable,
				widthPropertiesTablet,
			},
			
		},
		mobile: {
			' > .pb-block-c-wrapper': {
				'padding-top': paddingMobile.top ? paddingMobile.top : undefined,
				'padding-right': paddingMobile.right ? paddingMobile.right : undefined,
				'padding-bottom': paddingMobile.bottom ? paddingMobile.bottom : undefined,
				'padding-left': paddingMobile.left ? paddingMobile.left : undefined,

				'margin-top': marginMobile.top ? marginMobile.top : undefined,
				'margin-right': marginMobile.right ? marginMobile.right : undefined,
				'margin-bottom': marginMobile.bottom ? marginMobile.bottom : undefined,
				'margin-left': marginMobile.left ? marginMobile.left : undefined,
				'border-radius': '' !== borderRadiusMobile ? ( borderRadiusMobile.top ? borderRadiusMobile.top : '0px' ) + ' ' + ( borderRadiusMobile.right ? borderRadiusMobile.right : '0px') + ' ' + ( borderRadiusMobile.bottom ? borderRadiusMobile.bottom : '0px' ) + ' ' + ( borderRadiusMobile.left ? borderRadiusMobile.left : '0px' ) : undefined,

				height: blockHeightMobile ? blockHeightMobile + blockHeightType : undefined,
				...fontsPropertiesMobile,
				widthPropertiesMobile,
			},
			
		},
	};

	if ( 'image' === backgroundType ) {
		
		rules.desktop[ ' > .pb-block-c-wrapper::before' ] = {
			background: backgroundImgOverlayColor ? backgroundImgOverlayColor : undefined,
			opacity: backgroundOpacity ? ( backgroundOpacity / 100 ) : undefined,
			'border-radius': borderRadius ? ( borderRadius.top ? borderRadius.top : '0px' ) + ' ' + ( borderRadius.right ? borderRadius.right : '0px') + ' ' + ( borderRadius.bottom ? borderRadius.bottom : '0px' ) + ' ' + ( borderRadius.left ? borderRadius.left : '0px' ) : undefined,
		};
		
	}
	if ( 'image' === hoverBackgroundType ) {
		rules.desktop[ ' > .pb-block-c-wrapper:hover::before' ] = {
			background: hoverBackgroundImgOverlayColor ? hoverBackgroundImgOverlayColor : undefined,
			opacity: hoverBackgroundOpacity ? ( hoverBackgroundOpacity / 100 ) : undefined,
			'border-radius': borderRadius ? ( borderRadius.top ? borderRadius.top : '0px' ) + ' ' + ( borderRadius.right ? borderRadius.right : '0px') + ' ' + ( borderRadius.bottom ? borderRadius.bottom : '0px' ) + ' ' + ( borderRadius.left ? borderRadius.left : '0px' ) : undefined,
		};
	}

	return renderStyle( rules, selectorPrefix, props.name );
};
export default Styles;
