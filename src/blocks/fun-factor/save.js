const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';
import IconBox from "../../helper/iconbox.js";
import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className } ) => {
	const {
		blockId,
		mType,
		icon,
		img,
		title,
		number,
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
							data-settings = {
								JSON.stringify({
									from: number ? number : 0,
									to: endingNumber ? endingNumber : 0,
									delimiter: delimiter ? delimiter : '',
									duration: duration ? duration : '',
									easing: easing ? easing : '',
								})
							}
						>
							{ number ? number : '0' }
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
