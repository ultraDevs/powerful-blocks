import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import Inspector from './inspector';

import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		blockId,
		headline
	} = attributes;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	return [
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-countdown-${ blockId }` }>
				<div className="pb-countdown-wrapper">
					<RichText
						className="pb-countdown--headline"
						placeholder={ __( 'Headline', 'powerful-blocks' ) }
						multiline="false"
						value={ headline }
						keepPlaceholderOnFocus
						onChange={ ( headline ) => {
							setAttributes( { headline } );
						} }
						tagName="h3"
					/>
				</div>
			</div>
		</>
	];
};

export default edit;
