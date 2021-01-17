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
		customID,

		enableCondition,

		inAnimation,
        outAnimation,
        inAnimationDuration,
        outAnimationDuration,

		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
        wrapperLinkNofollow,
	} = attributes;

	const settings = {
		time: 'hideAfterTime' === displayType ? hideAfterTime : 0,
		id: `pb-alert-box-${ attributes.blockId }`,
	};

	const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

	return (
		<div>
			<div id={ `pb-alert-box-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-alert-box-wrapper',
						'pb-block-advanced--wrapper',
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
						true === enableCondition ? 'pb-block-conditions' : '',
						'' !== inAnimation ? 'pb__animated' : '',
						'' !== outAnimation ? 'pb__animated_out' : '',
						'' !== inAnimationDuration ? `pb-anim-dur__${inAnimationDuration}` : '',
						'' !== outAnimationDuration ? `pb-anim-out-dur__${outAnimationDuration}` : '',
					) }
					data-pb-animation = {
						JSON.stringify({
							'in' : inAnimation ? inAnimation : '',
							'out' : outAnimation ? outAnimation : '',
						})
					}
					id = { customID ? customID : '' }
					data-pb-link = { true === addWLink ? WrapperLink : '' }
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
