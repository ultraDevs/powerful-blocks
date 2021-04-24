const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	RangeControl,
	__experimentalBoxControl,
	TextControl,
	Button,
	ButtonGroup,
} = wp.components;
const { __ } = wp.i18n;
const { useState } = wp.element;
import classnames from 'classnames';


import { AlignmentControl, TypographyControl, ColorPickerControl } from '../../components';

import Advanced from '../../helper/advanced';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		textAlign,
		via,
		textColor,
		textSize,
		textSizeTablet,
		textSizeMobile,

		tFontFamily,
		tFontSizeType,
		tFontStyle,
		tFontWeight,
		tTextTransform,
		tTextDecoration,
		tLetterSpacing,
		tLineHeight,

		btnBackgroundColor,
		btnTxtColor,
		btnFontSize,
		btnFontSizeTablet,
		btnFontSizeMobile,

		btnFontFamily,
		btnFontSizeType,
		btnFontStyle,
		btnFontWeight,
		btnTextTransform,
		btnTextDecoration,
		btnLetterSpacing,
		btnLineHeight,

		btnPadding,
		btnBorderRadius,
		btnBorderStyle,
		btnBorderWidth,
		btnBorderColor,
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );

	return (
		<InspectorControls>
			<div className="pb-custom-control-styles">
				<PanelBody title={ __( 'Via', 'powerful-blocks' ) }>
					<TextControl
						label={ __( 'Twitter Username', 'powerful-blocks' ) }
						value={ via }
						onChange={ ( via ) => {
							setAttributes( { via } );
						} }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Text', 'powerful-blocks' ) }  initialOpen={ false }>
					<AlignmentControl
						label={ __( 'Alignment', 'powerful-blocks' ) }
						type="text"
						value={ textAlign }
						onChange={ ( textAlign ) => {
							setAttributes( { textAlign } );
						} }
					/>
					<ColorPickerControl
						label={ __( 'Color', 'powerful-blocks' ) }
						value={ textColor }
						onChange={ ( textColor ) => {
							setAttributes( { textColor } );
						} }
					/>
					
					<TypographyControl
						label = { __( 'Typography', 'powerful-blocks' ) }
						fontFamily = { { value: tFontFamily, name: 'tFontFamily' } }
						sizeType = {
							{ value: tFontSizeType, name: 'tFontSizeType' }
						}
						fontSize = { { value: textSize, name: 'textSize' } }
						fontSizeTablet = { { value: textSizeTablet, name: 'textSizeTablet' } }
						fontSizeMobile = { { value: textSizeMobile, name: 'textSizeMobile' } }
						fontStyle = { { value: tFontStyle, name: 'tFontStyle' } }
						fontWeight = { { value: tFontWeight, name: 'tFontWeight' } }
						lineHeight = { { value: tLineHeight, name: 'tLineHeight' } }
						letterSpacing = { { value: tLetterSpacing, name: 'tLetterSpacing' } }
						textTransform = { { value: tTextTransform, name: 'tTextTransform' } }
						textDecoration = { { value: tTextDecoration, name: 'tTextDecoration' } }
						setAttributes = { props.setAttributes }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Button', 'powerful-blocks' ) } initialOpen={ false }>
					<ColorPickerControl
						label={ __( 'Background Color', 'powerful-blocks' ) }
						value={ btnBackgroundColor }
						onChange={ ( btnBackgroundColor ) => {
							setAttributes( { btnBackgroundColor } );
						} }
					/>
					<ColorPickerControl
						label={ __( 'Color', 'powerful-blocks' ) }
						value={ btnTxtColor }
						onChange={ ( btnTxtColor ) => {
							setAttributes( { btnTxtColor } );
						} }
					/>
					<TypographyControl
						label = { __( 'Typography', 'powerful-blocks' ) }
						fontFamily = { { value: btnFontFamily, name: 'btnFontFamily' } }
						sizeType = {
							{ value: btnFontSizeType, name: 'btnFontSizeType' }
						}
						fontSize = { { value: btnFontSize, name: 'btnFontSize' } }
						fontSizeTablet = { { value: btnFontSizeTablet, name: 'btnFontSizeTablet' } }
						fontSizeMobile = { { value: btnFontSizeMobile, name: 'btnFontSizeMobile' } }
						fontStyle = { { value: btnFontStyle, name: 'btnFontStyle' } }
						fontWeight = { { value: btnFontWeight, name: 'btnFontWeight' } }
						lineHeight = { { value: btnLineHeight, name: 'btnLineHeight' } }
						letterSpacing = { { value: btnLetterSpacing, name: 'btnLetterSpacing' } }
						textTransform = { { value: btnTextTransform, name: 'btnTextTransform' } }
						textDecoration = { { value: btnTextDecoration, name: 'btnTextDecoration' } }
						setAttributes = { props.setAttributes }
					/>

					<__experimentalBoxControl
						label={ __( 'Padding', 'powerful-blocks' ) }
						values={ btnPadding }
						onChange={ ( btnPadding ) => {
							setAttributes( { btnPadding } );
						} }
					/>

					<__experimentalBoxControl
						label={ __( 'Border Radius', 'powerful-blocks' ) }
						values={ btnBorderRadius }
						onChange={ ( btnBorderRadius ) => {
							setAttributes( { btnBorderRadius } );
						} }
					/>
					<SelectControl
						className = "pb-custom-select-control"
						label={ __( 'Border Style', 'powerful-blocks' ) }
						value={ btnBorderStyle }
						onChange={ ( btnBorderStyle ) => {
							setAttributes( { btnBorderStyle } );
						} }
						options={ [
							{ value: 'none', label: 'None' },
							{ value: 'solid', label: 'Solid' },
							{ value: 'dotted', label: 'Dotted' },
							{ value: 'dashed', label: 'Dashed' },
							{ value: 'double', label: 'Double' },
						] }
					/>
					<RangeControl
						label={ __( 'Border Width', 'powerful-blocks' ) }
						value={ btnBorderWidth }
						onChange={ ( btnBorderWidth ) =>
							setAttributes( { btnBorderWidth } )
						}
						min={ 0 }
						step={ 1 }
						max={ 10 }
					/>

					<ColorPickerControl
						label={ __( 'Color', 'powerful-blocks' ) }
						value={ btnBorderColor }
						onChange={ ( btnBorderColor ) => {
							setAttributes( { btnBorderColor } );
						} }
					/>
				</PanelBody>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
