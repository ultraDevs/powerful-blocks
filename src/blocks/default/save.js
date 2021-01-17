const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

const save = ( { attributes, className } ) => {
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

	const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

	return (
		<div>
			<div id={ `pb-default-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-testimonial-wrapper',
						'pb-block-advanced--wrapper',
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
						true === enableCondition ? 'pb-block-conditions' : '',
						'' !== inAnimation ? 'pb__animated' : '',
						'' !== outAnimation ? 'pb__animated_out' : '',
						'' !== inAnimationDuration ? `pb-anim-dur__${inAnimationDuration}` : '',
						'' !== outAnimationDuration ? `pb-anim-out-dur__${outAnimationDuration}` : '',
					) }
					id = { customID ? customID : undefined }
					data-pb-link = { true === addWLink ? WrapperLink : undefined }
					data-pb-animation = {
						JSON.stringify({
							'in' : inAnimation ? inAnimation : '',
							'out' : outAnimation ? outAnimation : '',
						})
					}
					{ ...finalAttr }
				>
					<h3>Default</h3>
					
				</div>
			</div>
		</div>
	);
};
export default save;
