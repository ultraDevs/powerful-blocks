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
		icon,
		title,

		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
        wrapperLinkNofollow,
	} = attributes;

	const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

	return (
		<div>
			<div id={ `pb-icon-box-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-icon-box-wrapper',
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
					) }
					id = { customID ? customID : '' }
					data-pb-link = { true === addWLink ? WrapperLink : '' }
				>
					<div className="pb-icon-box--m">
						<IconBox icon={ icon } iconClass = 'pb-icon-box--icon' />
					</div>
					<div className="pb-icon-box--body">
						<RichText.Content
							tagName="h3"
							className="pb-icon-box--body__title"
							value={ title }
						/>
						
					</div>
				</div>
			</div>
		</div>
	);
};
export default save;
