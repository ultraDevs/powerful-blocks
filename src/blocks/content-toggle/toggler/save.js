const { InnerBlocks } = wp.blockEditor;
import classnames from 'classnames';

const save = ( { attributes, className } ) => {
	const {
		slug
	} = attributes;

	return (
		<>
			<div
				className={ classnames(
					className,
					'pb-toggle-wrapper',
				) }
				data-toggle = { slug }
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
};
export default save;
