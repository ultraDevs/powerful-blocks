

const genClass = ( attributes, type = 'edit' ) => {
    const {
        blockId,
		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
		customID,
		customAttributes,

		enableCondition,

		inAnimation,
        outAnimation,
        inAnimationDuration,
		outAnimationDuration,
		
		CSSTransform,
		
    } = attributes;

    const classes = [
        'pb-block-advanced--wrapper',
        customClass,
        hideOnDesktop ? 'pb-hide-d' : '',
        hideOnTablet ? 'pb-hide-t' : '',
        hideOnMobile ? 'pb-hide-m' : '',
        blockWidth ? 'pb-b-e--width' : '',
        'image' === backgroundType ? 'pb-ab-bg--image' : '',
        true === enableCondition ? 'pb-block-conditions' : '',
        '' !== inAnimation ? 'edit' === type ? `pb-animation pb__animated pb__${inAnimation}` : 'pb-animation' : '',
        '' !== outAnimation ? 'edit' === type ? '' === inAnimation ? `pb-animation pb__animated_out pb__out_${outAnimation}` : `pb-animation pb__animated_out pb__out_${outAnimation}` : 'pb-animation-out' : '',
        '' !== inAnimationDuration ? `pb-anim-dur__${inAnimationDuration}` : '',
        '' !== outAnimationDuration ? `pb-anim-out-dur__${outAnimationDuration}` : '',
        true === CSSTransform ? 'pb-c-css-transform' : '',
    ];
    return classes;
};

export default genClass;