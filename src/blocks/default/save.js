const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

const save = ( { attributes, className } ) => {
	const {
		blockId,
	} = attributes;

	return (
		<div>
			<div id={ `pb-default-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-default-wrapper',
					) }					
				>
					<h3>Default</h3>
					
				</div>
			</div>
		</div>
	);
};
export default save;
