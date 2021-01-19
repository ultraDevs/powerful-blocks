const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className } ) => {
	const {
		blockId,
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	return (
		<div>
			<div id={ `pb-accordion-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-accordion-wrapper',
						...classes
					) }					
					{ ...blockAttr }
				>
					<h3>Default</h3>
					
				</div>
			</div>
		</div>
	);
};
export default save;
