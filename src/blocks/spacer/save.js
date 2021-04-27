const { __ } = wp.i18n;
import classnames from 'classnames';

const save = ( { attributes, className } ) => {
	const {
		blockId,
	} = attributes;

	return (
		<div>
			<div id={ `pb-pb-spacer-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-pb-spacer-wrapper',
					) }					
				></div>
			</div>
		</div>
	);
};
export default save;
