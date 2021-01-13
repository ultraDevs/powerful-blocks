const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';
import IconBox from "../../helper/iconbox.js";

const save = ( { attributes, className } ) => {
	const {
		blockId,
		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
		customID,
		mType,
		icon,
		img,
		title,
		content,
		mPosition
	} = attributes;

	return (
		<div>
			<div id={ `pb-info-box-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-info-box-wrapper',
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						`pb-info-box-${mPosition}`,
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
					) }
					id = { customID ? customID : '' }
				>
					<div className="pb-info-box--m">
						{ 'icon' === mType ? (
							<IconBox icon={ icon } iconClass = 'pb-info-box--icon' />
						) : (
							<>
								<div className="pb-info-box--image">
									<img src={ img.url } alt={ img.alt } />
								</div>
							</>
						) } 
					</div>
					<div className="pb-info-box--body">
						<RichText.Content
							tagName="h3"
							className="pb-info-box--body__title"
							value={ title }
						/>
						<div className="pb-info-box--body__content">
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
