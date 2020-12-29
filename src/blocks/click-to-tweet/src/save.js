import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Styles from './style';

const save = ( props ) => {
	const { attributes } = props;

	const { blockId, tweet, url, via, btnText } = attributes;

	const tweetUrl = `https://twitter.com/share?&text=${ encodeURIComponent(
		tweet
	) }&url=${ url }&via=${ via ? via : '' }`;

	return (
		<div>
			<Styles { ...{ attributes } } />
			<div id={ `pb-click-to-tweet-${ blockId }` }>
				<div className="pb-click-to-tweet-wrapper">
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
