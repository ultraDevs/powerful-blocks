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
	} = attributes;

	const classes = genClass( attributes, 'edit'  );
	const blockAttr = blockAttributes( attributes, 'edit' );

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-pb-spacer-${ blockId }` }>
				<div
					className={ classnames(
						'pb-pb-spacer-wrapper',
						props.className,
						...classes
					) }
					{ ... blockAttr }
				></div>
			</div>
		</>
	);
};

export default edit;
