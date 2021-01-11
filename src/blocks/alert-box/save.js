import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

const save = ( { attributes, className } ) => {
	const { 
		blockId,
		title,
		content,
		displayType,
		hideAfterTime,
		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
		customID
	} = attributes;

	const settings = {
		time: 'hideAfterTime' === displayType ? hideAfterTime : 0,
		id: `pb-alert-box-${ attributes.blockId }`,
	};

	return (
		<div>
			<div id={ `pb-alert-box-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-alert-box-wrapper',
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
					) }
					id = { customID ? customID : '' }
				>
					<div
						className={ classnames( className, 'pb-alert-box' ) }
						data-settings={ JSON.stringify( settings ) }
					>
						{ 'dismissable' === displayType && (
							<span className="pb-alert-box-hide">X</span>
						) }
						{ ! RichText.isEmpty( title ) && (
							<RichText.Content
								tagName="h3"
								className="pb-alert-box__title"
								value={ title }
							/>
						) }
						{ ! RichText.isEmpty( content ) && (
							<RichText.Content
								tagName="p"
								className="pb-alert-box__content"
								value={ content }
							/>
						) }
					</div>
				</div>
			</div>
		</div>
	);
};
export default save;
