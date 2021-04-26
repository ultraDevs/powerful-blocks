import { RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes, isSelected } = props;
	const { 
		blockId,
		title,
		content,
		displayType,
		hideAfterTime,
	} = attributes;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}
	const settings = {
		time: 'hideAfterTime' === displayType ? hideAfterTime : 0,
		id: `pb-alert-box-${ attributes.blockId }`,
	};

	return (
		<>
			{ isSelected && <Inspector { ...{ attributes, setAttributes } } /> }
			<Styles { ...{ attributes } } />
			<div id={ `pb-alert-box-${ blockId }` }>
				<div
					className={ classnames(
						'pb-alert-box-wrapper',
					) }
				>
					<div
						className={ classnames( 'pb-alert-box', props.className ) }
						data-settings={ JSON.stringify( settings ) }
					>
						{ 'dismissable' === displayType && (
							<span className="pb-alert-box-hide">X</span>
						) }

						<RichText
							tagName="h3"
							className="pb-alert-box__title"
							placeholder={ __( 'Alert Title', 'powerful-blocks' ) }
							value={ title }
							disableLineBreaks
							keepPlaceholderOnFocus={ true }
							onChange={ ( title ) => {
								setAttributes( { title } );
							} }
						/>

						<RichText
							tagName="p"
							className="pb-alert-box__content"
							placeholder={ __( 'Alert Content', 'powerful-blocks' ) }
							value={ content }
							disableLineBreaks
							keepPlaceholderOnFocus={ true }
							onChange={ ( content ) => {
								setAttributes( { content } );
							} }
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default edit;
