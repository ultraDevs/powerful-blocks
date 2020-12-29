const { InspectorControls, ColorPalette } = wp.blockEditor;
const {
	PanelBody,
	__experimentalBoxControl,
	SelectControl,
	ToggleControl,
	RangeControl,
	BaseControl,
	Dropdown,
	Button,
	ButtonGroup
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';

const Advanced = ( props ) => {

    const { attributes, setAttributes } = props;

    const {
		
    } = attributes;
    
    return (
        <>
            <PanelBody title={ __( 'Background', 'powerful-blocks' ) }>
                
            </PanelBody>
            <PanelBody 
                title={ __( 'Layout', 'powerful-blocks' ) } 
                initialOpen = { false }
            >
            </PanelBody>
        </>
    );
}

export default Advanced;