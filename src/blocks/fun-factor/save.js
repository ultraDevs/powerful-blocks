const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';
import IconBox from "../../helper/iconbox.js";

const save = ( { attributes, className, clientId } ) => {
	const {
		blockId,
		mType,
		icon,
		img,
		title,
		mPosition,

		preset,
	} = attributes;

	return (
		<div>
			<div id={ `pb-fun-factor-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-fun-factor-wrapper',
						mPosition ? `pb-fun-factor-${mPosition}` : '',
					) }
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
						<InnerBlocks.Content />
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
