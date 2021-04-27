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
        const typo_blocks = [
            'core/paragraph',
            'core/heading',
            'core/list',
            'core/quote',
            'core/code',
            'core/preformatted',
            'core/verse'
        ];

        if ( props.name.includes("core/") ) {
            
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
                                typo_blocks.includes( props.name ) ? 'pb-c-typo' : undefined,
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
        } else {
            return <BlockListBlock {...props} />;
        }
    };
}, 'withClientIdClassName' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'powerful-blocks/with-client-id-class-name', withClientIdClassName );


const setExtraPropsToBlockType = ( props, block, attributes ) => {

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

		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
		wrapperLinkNofollow,
    } = attributes;

    const type = 'save';

    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false;

    const typo_blocks = [
        'core/paragraph',
        'core/heading',
        'core/list',
        'core/quote',
        'core/code',
        'core/preformatted',
        'core/verse'
    ];


    let extractAttribute = customAttributes ? customAttributes.split(/[,]+/) : '',
		finalAttr = {},
		eAttr = [];
	if ( extractAttribute ) {
		
		extractAttribute.forEach( ( attr, index ) => {
			eAttr.push( attr.trim().split('|') );
		});
		eAttr.map( ( attr, i ) => {
			finalAttr[ attr[0] ] = attr[1];
		});
    }

    let animationSettings = JSON.stringify({
        'in' : inAnimation ? inAnimation : '',
        'out' : outAnimation ? outAnimation : '',
    });

    const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

    Object.assign( props, {
        className: notDefined ? classnames(
            'pb-block-c-wrapper',
            customClass,
            props.className,
            hideOnDesktop ? 'pb-hide-d' : '',
            hideOnTablet ? 'pb-hide-t' : '',
            hideOnMobile ? 'pb-hide-m' : '',
            true === enableCondition ? 'pb-block-conditions' : '',
            '' !== inAnimation ? 'edit' === type ? `pb-animation pb__animated pb__${inAnimation}` : 'pb-animation' : '',
            '' !== outAnimation ? 'edit' === type ? '' === inAnimation ? `pb-animation pb__animated_out pb__out_${outAnimation}` : `pb-animation pb__animated_out pb__out_${outAnimation}` : 'pb-animation-out' : '',
            '' !== inAnimationDuration ? `pb-anim-dur__${inAnimationDuration}` : '',
            '' !== outAnimationDuration ? `pb-anim-out-dur__${outAnimationDuration}` : '',
            true === CSSTransform ? 'pb-c-css-transform' : '',

        ) : classnames(
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
    if ( inAnimation || outAnimation ) {
        props['data-pb-animation'] = animationSettings;
    }

    if ( true === addWLink ) {
        props['data-pb-link'] = WrapperLink;
    }
    if ( customID ) {
        props['id'] = customID;
    }
    return props;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'powerful-blocks/extra-props',
    setExtraPropsToBlockType
);