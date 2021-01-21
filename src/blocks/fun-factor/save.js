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
		content,
		mPosition,
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
						<RichText.Content
							tagName="h3"
							className="pb-fun-factor--body__title"
							value={ title }
						/>
						<div className="pb-fun-factor--body__content">
							<RichText.Content
								tagName="p"
								value={ content }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default save;
