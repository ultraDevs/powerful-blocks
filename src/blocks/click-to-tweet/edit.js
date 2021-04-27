import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

import Inspector from './inspector';
import classnames from 'classnames';

import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const { 
		blockId,
		tweet,
		url,
		btnText,
	} = attributes;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	if ( props.postUrl ) {
		setAttributes( { url: props.postUrl } );
	}

	return [
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-click-to-tweet-${ blockId }` }>
				<div 
					className={ classnames(
						'pb-click-to-tweet-wrapper',
						props.className,
					) }
				>
					<RichText
						className="pb-click-to-tweet--text"
						placeholder={ __( 'Tweet...', 'powerful-blocks' ) }
						value={ tweet }
						allowedFormats={ [] }
						keepPlaceholderOnFocus
						onChange={ ( tweet ) => {
							setAttributes( { tweet } );
						} }
						tagName="p"
					/>
					<RichText
						className="pb-click-to-tweet--button"
						placeholder={ __( 'Add Button', 'powerful-blocks' ) }
						multiline="false"
						value={ btnText }
						keepPlaceholderOnFocus
						onChange={ ( btnText ) => {
							setAttributes( { btnText } );
						} }
						tagName="span"
					/>
				</div>
			</div>
		</>,
	];
};

export default compose(
	withSelect( ( select ) => {
		return {
			postUrl: select( 'core/editor' ).getPermalink(),
		};
	} )
)( edit );
