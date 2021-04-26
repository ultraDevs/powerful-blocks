const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
	BaseControl,
	Dropdown,
	Button,
	ButtonGroup,
	TabPanel
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';


import {
	ResponsiveRangeControl,
	ResponsiveBoxControl,
	ColorPickerControl,
	ImageControl,
	AlignmentControl,
	TypographyControl,
	BorderControl,
	ShadowControl
} from '../../components';


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
