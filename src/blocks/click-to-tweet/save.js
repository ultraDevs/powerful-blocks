import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { genClass, blockAttributes } from '../../helper';

const save = ( props ) => {
	const { attributes } = props;

	const { 
		blockId,
		tweet,
		url,
		via,
		btnText,
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	const tweetUrl = `https://twitter.com/share?&text=${ encodeURIComponent(
		tweet
	) }&url=${ url }&via=${ via ? via : '' }`;

	return (
		<div>
			<div id={ `pb-click-to-tweet-${ blockId }` }>
				<div
					className={ classnames(
						props.className,
						'pb-click-to-tweet-wrapper',
						...classes
					) }					
					{ ...blockAttr }
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
