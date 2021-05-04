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

import classnames from 'classnames';

import {
	ResponsiveRangeControl,
	ResponsiveBoxControl,
	ColorPickerControl,
	ImageControl,
	AlignmentControl,
	TypographyControl,
	BorderControl,
	ShadowControl,
	DimensionsControl,
	PBBoxControl
} from '../../components';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		rPadding,
		contentColor,
		contentMargin,
		contentMarginType
	} = attributes;

	return (
		<InspectorControls>
			<div className="pb-custom-control-styles">
				<PanelBody title={ __( 'Settings', 'powerful-blocks' ) } initialOpen = { open }>
					<DimensionsControl
						label={ __( 'Padding', 'powerful-blocks' ) }
						value = { rPadding }
						onChange = { ( rPadding ) => {
							setAttributes({ rPadding });
						}}
						// setdevice = 'md'
					/>
					<PBBoxControl
						label={ __( 'Margin', 'powerful-blocks' ) }
						value={ contentMargin }
						sizeType={ contentMarginType }
						onChange={
							( contentMargin ) => {
								setAttributes( {contentMargin});
							}
						}
						onUnitTypeChange = {
							(newType) => {
								setAttributes( {contentMarginType: newType});
							}
						}
					/>
					{/* <ResponsiveBoxControl
						label={ __( 'Margin', 'powerful-blocks' ) }
						value={ {
							desktop: rPadding.md,
							tablet: rPadding.sm,
							mobile: rPadding.xs,
						} }
						onChange={ ( value, device ) => {
							if ( 'desktop' === device ) {
								setAttributes( { [rPadding.md]: {value} } );
							}
							if ( 'tablet' === device ) {
								setAttributes( { [rPadding.sm]: {value} } );
							}
							if ( 'mobile' === device ) {
								setAttributes( { [rPadding.xs]: {value} } );
							}
						} }
					/> */}
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
