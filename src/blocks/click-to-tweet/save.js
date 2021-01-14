import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

const save = ( props ) => {
	const { attributes } = props;

	const { 
		blockId,
		tweet,
		url,
		via,
		btnText,
		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
		customID,

		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
        wrapperLinkNofollow,
	} = attributes;

	const tweetUrl = `https://twitter.com/share?&text=${ encodeURIComponent(
		tweet
	) }&url=${ url }&via=${ via ? via : '' }`;

	const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

	return (
		<div>
			<div id={ `pb-click-to-tweet-${ blockId }` }>
				<div
					className={ classnames(
						props.className,
						'pb-click-to-tweet-wrapper',
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
					{ ! RichText.isEmpty( tweet ) && (
						<RichText.Content
							className="pb-click-to-tweet--text"
							value={ tweet }
							tagName="p"
						/>
					) }
					{ ! RichText.isEmpty( btnText ) && (
						<RichText.Content
							className="pb-click-to-tweet--button"
							value={ btnText }
							tagName="a"
							href={ tweetUrl }
							target="_blank"
							rel="noopener noreferrer"
						/>
					) }
				</div>
			</div>
		</div>
	);
};
export default save;
