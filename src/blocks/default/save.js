const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import { genClass, blockAttributes } from '../../helper';

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

		CSSTransform,

		inAnimation,
        outAnimation,
        inAnimationDuration,
        outAnimationDuration,
		
		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
        wrapperLinkNofollow,
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	return (
		<div>
			<div id={ `pb-default-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-default-wrapper',
						...classes
					) }
					id = { customID ? customID : undefined }
					
					{ ...blockAttr }
				>
					<h3>Default</h3>
					
				</div>
			</div>
		</div>
	);
};
export default save;
