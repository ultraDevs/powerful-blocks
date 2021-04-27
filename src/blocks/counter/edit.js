const { __ } = wp.i18n;
import classnames from 'classnames';

import Inspector from './inspector';

import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

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

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	setTimeout( function () {
		pbCounter();
	}, 500 );
	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div 
				id={ `pb-counter-${ blockId }` }
				className={ classnames(
					props.className,
					props.isSelected ? 'pb-is-selected' : '',
				) }
			>
				<div
					className={ classnames(
						'pb-counter-wrapper',
					) }
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
		</>
	);
};

export default edit;
