const { __ } = wp.i18n;
import classnames from 'classnames';
import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className, clientId } ) => {
	const {
		blockId,
		startingNumber,
		endingNumber,

		numberPrefix,
		numberSuffix,
		easing,
		duration,
		delimiter,
		rounding,
		preset,
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );


	return (
		<div>
			<div id={ `pb-counter-${ blockId }` }>
			<div
				className={ classnames(
					className,
					'pb-counter-wrapper',
					...classes
				) }
				{ ... blockAttr }
			>
				{ numberPrefix && (
					<span className="pb-counter--prefix">
						{ numberPrefix }
					</span>
				) }
				<span 
					className="pb-counter"
					data-from = { startingNumber }
					data-to = { endingNumber }
					data-delimiter = { delimiter }
					data-duration = { duration }
					data-easing = { easing }
				>
					{ startingNumber ? startingNumber : 0 }
				</span>

				{ numberSuffix && (
					<span className="pb-counter--suffix">
						{ numberSuffix }
					</span>
				) }
			</div>
			</div>
		</div>
	);
};
export default save;
