const AdvancedCSS = ( attributes ) => {
    const {
        backgroundType,
		hoverBackgroundType,

		backgroundColor,
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
        inAnimation,
        outAnimation,
        inAnimationDuration,
        inAnimationDelay,
        outAnimationDuration,
        outAnimationDelay,
        inAnimationDirection,
        inAnimationDurationCustom,
        inAnimationEasing,
        outAnimationDirection,
        outAnimationDurationCustom,
        outAnimationEasing,

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
	} = attributes;
	
    let rules = {
		desktop: {
			'> .pb-block-advanced--wrapper': {
				background: 'image' !== backgroundType ? backgroundColor : gradientValue,
				background: 'image' !== backgroundType ? 'color' === backgroundType ? backgroundColor : gradientValue : '',
				padding: padding ? padding.top +
				' ' +
				padding.right +
				' ' +
				padding.bottom +
				' ' +
				padding.left : undefined,
				margin: margin ? margin.top +
				' ' +
				margin.right +
				' ' +
				margin.bottom +
				' ' +
				margin.left : undefined,
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
				'border-radius': borderRadius ? borderRadius.top +
				' ' +
				borderRadius.right +
				' ' +
				borderRadius.bottom +
				' ' +
				borderRadius.left : undefined,
				'z-index': blockzIndex ? blockzIndex : undefined,
				height: blockHeight ? blockHeight + blockHeightType : undefined,
			},
			'> .pb-block-advanced--wrapper:hover': {
				background: 'image' !== hoverBackgroundType ? 'color' === hoverBackgroundType ? hoverBackgroundColor : hoverGradientValue : '',
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
			
		},
		tablet: {
			'> .pb-block-advanced--wrapper': {
				padding:
					paddingTablet.top +
					' ' +
					paddingTablet.right +
					' ' +
					paddingTablet.bottom +
					' ' +
					paddingTablet.left,
				margin:
					marginTablet.top +
					' ' +
					marginTablet.right +
					' ' +
					marginTablet.bottom +
					' ' +
					marginTablet.left,
				'border-radius':
					borderRadiusTablet.top +
					' ' +
					borderRadiusTablet.right +
					' ' +
					borderRadiusTablet.bottom +
					' ' +
					borderRadiusTablet.left,
				height: blockHeightTablet ? blockHeightTablet + blockHeightType : undefined,
			},
			
		},
		mobile: {
			'> .pb-block-advanced--wrapper': {
				padding:
					paddingMobile.top +
					' ' +
					paddingMobile.right +
					' ' +
					paddingMobile.bottom +
					' ' +
					paddingMobile.left,
				margin:
					marginMobile.top +
					' ' +
					marginMobile.right +
					' ' +
					marginMobile.bottom +
					' ' +
					marginMobile.left,
				'border-radius':
					borderRadiusMobile.top +
					' ' +
					borderRadiusMobile.right +
					' ' +
					borderRadiusMobile.bottom +
					' ' +
					borderRadiusMobile.left,
				height: blockHeightMobile ? blockHeightMobile + blockHeightType : undefined,
			},
			
		},
	};

	if ( 'image' === backgroundType ) {
		rules.desktop[ '> .pb-ab-bg--image' ] = {
			'background': backgroundImg ? `url( ${ backgroundImg } )` : '',
			'background-position': backgroundImgPosition ? backgroundImgPosition : '',
			'background-repeat': backgroundImgRepeat ? backgroundImgRepeat : '',
			'background-attachment': backgroundImgAttachment ? backgroundImgAttachment : '',
			'background-size': backgroundImgSize ? backgroundImgSize : '',

		};
		
		rules.desktop[ '> .pb-ab-bg--image:before' ] = {
			background: backgroundImgOverlayColor ? backgroundImgOverlayColor : '',
			opacity: backgroundOpacity ? ( backgroundOpacity / 100 ) : '',
			'border-radius':
					borderRadius.top +
					' ' +
					borderRadius.right +
					' ' +
					borderRadius.bottom +
					' ' +
					borderRadius.left,
		};
		rules.desktop[ '> .pb-ab-bg--image:hover:before' ] = {
			background: hoverBackgroundImgOverlayColor ? hoverBackgroundImgOverlayColor : '',
			opacity: hoverBackgroundOpacity ? ( hoverBackgroundOpacity / 100 ) : '',
			'border-radius':
					borderRadius.top +
					' ' +
					borderRadius.right +
					' ' +
					borderRadius.bottom +
					' ' +
					borderRadius.left,
		};
	}
	if ( 'image' === hoverBackgroundType ) {
		rules.desktop[ '> .pb-ab-bg--image:hover' ] = {
			'background': hoverBackgroundImg ? `url( ${ hoverBackgroundImg } )` : '',
			'background-position': hoverBackgroundImgPosition ? hoverBackgroundImgPosition : '',
			'background-repeat': hoverBackgroundImgRepeat ? hoverBackgroundImgRepeat : '',
			'background-attachment': hoverBackgroundImgAttachment ? hoverBackgroundImgAttachment : '',
			'background-size': hoverBackgroundImgSize ? hoverBackgroundImgSize : '',

		};
	}

	if ( 'inline' === blockWidth ) {
		rules.desktop[ '> .pb-b-e--width' ] = {
			display: 'inline-block',
			margin: 'auto',
		};
	}

	if ( 'custom' === blockWidth ) {
		rules.desktop[ '> .pb-b-e--width' ] = {
			width: blockCustomWidth + blockCustomWidthType,
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.tablet[ '> .pb-b-e--width' ] = {
			width: blockCustomWidthTablet + blockCustomWidthType,
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.mobile[ '> .pb-b-e--width' ] = {
			width: blockCustomWidthMobile + blockCustomWidthType,
		};
    }
    
    return rules;
};

export default AdvancedCSS;