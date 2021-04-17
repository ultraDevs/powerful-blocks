const { createHigherOrderComponent } = wp.compose;
import Styles from './styles';
import classnames from 'classnames';

const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
        const { attributes, setAttributes } = props;

        const {
            blockId,
            backgroundType,
            hideOnDesktop,
            hideOnTablet,
            hideOnMobile,
            blockWidth,

            enableCondition,

            inAnimation,
            outAnimation,
            inAnimationDuration,
            outAnimationDuration,
            
            CSSTransform,
        } = attributes;

        const type = 'edit';

        if ( props.isSelected && ! props.blockId ) {
            const clientId = props.clientId;
            setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
        }
        return (
            <>
                <Styles { ...{ attributes } } name={ props.name } />
                <div 
                    id={ `pb-wrap-${blockId}` }
                >
                    <BlockListBlock { ...props }
                        className={ classnames(
                            'pb-block-c-wrapper',
                            hideOnDesktop ? 'pb-hide-d' : '',
                            hideOnTablet ? 'pb-hide-t' : '',
                            hideOnMobile ? 'pb-hide-m' : '',
                            blockWidth ? 'pb-b-e--width' : '',
                            'core/heading' === props.name ? 'pb-c-heading' : undefined,
                            'image' === backgroundType ? 'pb-ab-bg--image' : '',
                            true === enableCondition ? 'pb-block-conditions' : '',
                            '' !== inAnimation ? 'edit' === type ? `pb-animation pb__animated pb__${inAnimation}` : 'pb-animation' : '',
                            '' !== outAnimation ? 'edit' === type ? '' === inAnimation ? `pb-animation pb__animated_out pb__out_${outAnimation}` : `pb-animation pb__animated_out pb__out_${outAnimation}` : 'pb-animation-out' : '',
                            '' !== inAnimationDuration ? `pb-anim-dur__${inAnimationDuration}` : '',
                            '' !== outAnimationDuration ? `pb-anim-out-dur__${outAnimationDuration}` : '',
                            true === CSSTransform ? 'pb-c-css-transform' : '',
                        ) }
                    />
                </div>
            </>
        );
    };
}, 'withClientIdClassName' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'powerful-blocks/with-client-id-class-name', withClientIdClassName );


const setExtraPropsToBlockType = ( props, blockType, attributes ) => {

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
        
        animationDelay,
        animationEasing,
        animationEasingCustom,
		
		CSSTransform,
    } = attributes;

    const type = 'save';

    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false

    return Object.assign(props, {
        className: notDefined ? classnames(
            // `pb-wrap-${blockId}`,
            'pb-block-c-wrapper',
            customClass,
            props.className,
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
        ) : classnames(
            // `pb-wrap-${blockId}`,
            'pb-block-c-wrapper',
            customClass,
            props.className,
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
        ),
    });

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'powerful-blocks/block-filters',
    setExtraPropsToBlockType
);