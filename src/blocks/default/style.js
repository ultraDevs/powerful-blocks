import { renderStyle } from '../../components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;

	const {
		blockId,
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
		blockWidth,
		blockCustomWidthType,
        blockCustomWidth,
        blockCustomWidthTablet,
        blockCustomWidthMobile,
        blockzIndex,

	} = attributes;


	const selectorPrefix = `#pb-default-${ blockId }`;


	let rules = {
		desktop: {
			'.pb-default-wrapper': {
				background: 'image' !== backgroundType ? backgroundColor : gradientValue,
				background: 'image' !== backgroundType ? 'color' === backgroundType ? backgroundColor : gradientValue : '',
				
				padding:
					padding.top +
					' ' +
					padding.right +
					' ' +
					padding.bottom +
					' ' +
					padding.left,
				margin:
					margin.top +
					' ' +
					margin.right +
					' ' +
					margin.bottom +
					' ' +
					margin.left,
				'box-shadow':
					shadowType + ' ' +
					shadowHOffset +
					'px ' +
					shadowVOffset +
					'px ' +
					shadowBlur +
					'px ' +
					shadowSpread +
					'px ' +
					shadowColor,
				'border-width': borderSize
					? borderSize + 'px'
					: undefined,
				'border-style': borderStyle ? borderStyle : undefined,
				'border-color': borderColor ? borderColor : undefined,
				'border-radius':
					borderRadius.top +
					' ' +
					borderRadius.right +
					' ' +
					borderRadius.bottom +
					' ' +
					borderRadius.left,
			},
			'.pb-default-wrapper:hover': {
				background: 'image' !== hoverBackgroundType ? 'color' === hoverBackgroundType ? hoverBackgroundColor : hoverGradientValue : '',
				'border-width': hoverBorderSize
					? hoverBorderSize + 'px'
					: undefined,
				'border-style': hoverBorderStyle ? hoverBorderStyle : undefined,
				'border-color': hoverBorderColor ? hoverBorderColor : undefined,
			},
			
		},
		tablet: {
			'.pb-default-wrapper': {
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
			},
			
		},
		mobile: {
			'.pb-default-wrapper': {
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
			},
			
		},
	};

	if ( 'image' === backgroundType ) {
		rules.desktop[ '.pb-ab-bg--image' ] = {
			'background': backgroundImg ? `url( ${ backgroundImg } )` : '',
			'background-position': backgroundImgPosition ? backgroundImgPosition : '',
			'background-repeat': backgroundImgRepeat ? backgroundImgRepeat : '',
			'background-attachment': backgroundImgAttachment ? backgroundImgAttachment : '',
			'background-size': backgroundImgSize ? backgroundImgSize : '',

		};
		rules.desktop[ '.pb-ab-bg--image:hover' ] = {
			'background': hoverBackgroundImg ? `url( ${ hoverBackgroundImg } )` : '',
			'background-position': hoverBackgroundImgPosition ? hoverBackgroundImgPosition : '',
			'background-repeat': hoverBackgroundImgRepeat ? hoverBackgroundImgRepeat : '',
			'background-attachment': hoverBackgroundImgAttachment ? hoverBackgroundImgAttachment : '',
			'background-size': hoverBackgroundImgSize ? hoverBackgroundImgSize : '',

		};
		rules.desktop[ '.pb-ab-bg--image:before' ] = {
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
		rules.desktop[ '.pb-ab-bg--image:hover:before' ] = {
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

	if ( 'inline' === blockWidth ) {
		rules.desktop[ '.pb-b-e--width' ] = {
			display: 'inline-block',
			margin: 'auto',
		};
	}

	if ( 'custom' === blockWidth ) {
		rules.desktop[ '.pb-b-e--width' ] = {
			width: blockCustomWidth + blockCustomWidthType,
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.tablet[ '.pb-b-e--width' ] = {
			width: blockCustomWidthTablet + blockCustomWidthType,
		};
	}
	if ( 'custom' === blockWidth ) {
		rules.mobile[ '.pb-b-e--width' ] = {
			width: blockCustomWidthMobile + blockCustomWidthType,
		};
	}

	const styles = renderStyle( rules, selectorPrefix );

	return styles;
};
export default Styles;
