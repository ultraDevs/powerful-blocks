import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import Inspector from './inspector';

import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const { blockId } = attributes;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	return [
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-default-${ blockId }` }>
				<h1>dd</h1>
			</div>
		</>
	];
};

export default edit;
