const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

const save = ( { attributes, className } ) => {
	const {
		blockId,
		
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
        customID,
	} = attributes;

	return (
		<div>
			<div id={ `pb-testimonial-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-testimonial-wrapper',
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
					) }
					id = { customID ? customID : '' }
				>
					
				</div>
			</div>
		</div>
	);
};
export default save;
