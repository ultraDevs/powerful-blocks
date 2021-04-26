const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	Button,
	ButtonGroup,
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );


	return (
		<InspectorControls>
			<div className="pb-custom-control-styles">
				<PanelBody title={ __( 'Settings', 'powerful-blocks' ) } initialOpen = { open }>
					
				</PanelBody>
				<PanelBody
					title={ __( 'Image', 'powerful-blocks' ) }
					initialOpen={ false }
				>
					
				</PanelBody>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
