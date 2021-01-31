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
					'pb-tab-wrapper',
				) }
				data-tab = { slug }
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
};
export default save;
