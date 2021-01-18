

const blockAttr = ( attributes, type = 'edit' ) => {
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
		
		CSSTransform,
		
		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
		wrapperLinkNofollow,
		
    } = attributes;

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
    let saveAttr;
    if ( 'save' === type ) {
        saveAttr = {
            'data-pb-animation' : JSON.stringify({
                'in' : inAnimation ? inAnimation : '',
                'out' : outAnimation ? outAnimation : '',
            }),
        }
    } else {
        saveAttr = {};
    }

    const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

    const bAttributes = {
        'data-pb-link' : true === addWLink ? WrapperLink : undefined ,
        ...saveAttr,
        ...finalAttr,
    };
    return bAttributes;
};

export default blockAttr;