const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';
import IconBox from "../../helper/iconbox.js";
import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className, clientId } ) => {
	const {
		blockId,
		mType,
		icon,
		img,
		title,
		startingNumber,
		mPosition,
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
			<div id={ `pb-fun-factor-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-fun-factor-wrapper',
						mPosition ? `pb-fun-factor-${mPosition}` : '',
						...classes
					) }
					{ ... blockAttr }
				>
					<div className="pb-fun-factor--m">
						{ 'icon' === mType ? (
							<IconBox icon={ icon } iconClass = 'pb-fun-factor--icon' />
						) : (
							<>
								<div className="pb-fun-factor--image">
									<img src={ img.url } alt={ img.alt } />
								</div>
							</>
						) } 
					</div>
					<div className="pb-fun-factor--body">
						<div 
							className="pb-fun-factor-counter"
						>
						{ numberPrefix && (
							<span className="pb-fun-factor-number--prefix">
								{ numberPrefix }
							</span>
						) }
						<span 
							className="pb-fun-factor-number"
							data-from = { startingNumber }
							data-to = { endingNumber }
							data-delimiter = { delimiter }
							data-duration = { duration }
							data-easing = { easing }
						>
							{ startingNumber ? startingNumber : '0' }
						</span>

						{ numberSuffix && (
							<span className="pb-fun-factor-number--suffix">
								{ numberSuffix }
							</span>
						) }

						</div>
						<RichText.Content
							tagName="h3"
							className="pb-fun-factor--body__title"
							value={ title }
						/>
						
					</div>
				</div>
			</div>
		</div>
	);
};
export default save;
