const { RichText, InnerBlocks, MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const { Button } = wp.components;
import classnames from 'classnames';

import Inspector from './inspector';

import { genClass, blockAttributes } from '../../helper';


import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		blockId,
		animationType,
		textTag,
		prefixText,
		suffixText,
		animatedText,
	} = attributes;

	const classes = genClass( attributes, 'edit'  );
	const blockAttr = blockAttributes( attributes, 'edit' );

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	const Tag = textTag;

	// setInterval( function(){
	// 	pbAnimatedHeadlines();
	// }, 500 );
	pbAnimatedHeadlines();


	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-animated-text-${ blockId }` }>
				<div
					className={ classnames(
						'pb-animated-text-wrapper',
						props.className,
						...classes
					) }
					{ ... blockAttr }
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
		</>
	);
};

export default edit;
