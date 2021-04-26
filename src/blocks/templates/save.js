const { __ } = wp.i18n;
import classnames from 'classnames';

const save = ( { attributes, className } ) => {
	const {
		blockId,
	} = attributes;

	return (
		<div>
			<div id={ `pb-templates-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-templates-wrapper',
					) }					
				>
					<h3>Default</h3>
					
				</div>
			</div>
		</div>
	);
};
export default save;
