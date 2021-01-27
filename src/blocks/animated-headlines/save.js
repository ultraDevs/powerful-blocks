const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className } ) => {
	const {
		blockId,
		animationType,
		textTag,
		prefixText,
		suffixText,
		animatedText,
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	const Tag = textTag;

	return (
		<div>
			<div id={ `pb-animated-text-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-animated-text-wrapper',
						...classes
					) }					
					{ ...blockAttr }
				>
					<Tag className={ `pb-animated-txt ${animationType}`} >
						{ prefixText ? (
							<span className='pb-animated-text--prefix'>
								{ prefixText }
							</span>
						) : ''}
						<span className='animation-text--content'>
						{ 
							animatedText ? animatedText.map( ( text, key ) => (
								
								<b className={
									classnames(
										'pb-animated-text',
										0 === key ? 'is-visible' : 'is-hidden'
									)
								}>
								{ text }
								</b>
							)) : ''
						}
						</span>
						{ suffixText ? (
							<span className='pb-animated-text--suffix'>
								{ suffixText }
							</span>
						) : ''}
					</Tag>
					
				</div>
			</div>
		</div>
	);
};
export default save;
