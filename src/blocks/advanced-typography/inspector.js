const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	
	Button,
	ButtonGroup,
} = wp.components;
const { useState } = wp.element;
import classnames from 'classnames';
const { __ } = wp.i18n;

import Advanced from '../../helper/advanced';
import {
	ColorPickerControl,
	TypographyControl,
} from '../../components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		headingFontFamily,
		headingFontSizeType,
		headingFontStyle,
		headingFontSize,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingFontWeight,
		headingTextTransform,
		headingTextDecoration,
		headingLetterSpacing,
		headingLineHeight,
		paragraphFontFamily,
		paragraphFontSizeType,
		paragraphFontStyle,
		paragraphFontSize,
		paragraphFontSizeTablet,
		paragraphFontSizeMobile,
		paragraphFontWeight,
		paragraphTextTransform,
		paragraphTextDecoration,
		paragraphLetterSpacing,
		paragraphLineHeight,

		headingColor,
		paragraphColor,
	} = attributes;

	let currentTab = 'style';
	const [ tab, setTab ] = useState( currentTab );

	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<ButtonGroup className="pb-panel-head--tabs__wrapper">
					
					<Button
						onClick = { () => {
							setTab('style');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'style' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="color-picker"
					>
						{ __( 'Style', 'powerful-blocks' ) }
					</Button>
					<Button
						onClick = { () => {
							setTab('advanced');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'advanced' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="admin-generic"
					>
						{ __( 'Advanced', 'powerful-blocks' ) }
					</Button>
				</ButtonGroup>
				<div className="pb-panel-head--tabs__controls pb-custom-control-styles">
				
				{ 'style' === tab && (
					<>
						<PanelBody
							title={ __( 'Headings', 'powerful-blocks' ) }
						>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ headingColor }
								onChange={ ( headingColor ) => {
									setAttributes( { headingColor } );
								} }
							/>
							<TypographyControl
								label = { __( 'Typography', 'powerful-blocks' ) }
								fontFamily = { { value: headingFontFamily, name: 'headingFontFamily' } }
								sizeType = {
									{ value: headingFontSizeType, name: 'headingFontSizeType' }
								}
								fontSize = { { value: headingFontSize, name: 'headingFontSize' } }
								fontSizeTablet = { { value: headingFontSizeTablet, name: 'headingFontSizeTablet' } }
								fontSizeMobile = { { value: headingFontSizeMobile, name: 'headingFontSizeMobile' } }
								fontStyle = { { value: headingFontStyle, name: 'headingFontStyle' } }
								fontWeight = { { value: headingFontWeight, name: 'headingFontWeight' } }
								lineHeight = { { value: headingLineHeight, name: 'headingLineHeight' } }
								letterSpacing = { { value: headingLetterSpacing, name: 'headingLetterSpacing' } }
								textTransform = { { value: headingTextTransform, name: 'headingTextTransform' } }
								textDecoration = { { value: headingTextDecoration, name: 'headingTextDecoration' } }
								setAttributes = { props.setAttributes }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Paragraph', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ paragraphColor }
								onChange={ ( paragraphColor ) => {
									setAttributes( { paragraphColor } );
								} }
							/>
							
							<TypographyControl
								label = { __( 'Typography', 'powerful-blocks' ) }
								fontFamily = { { value: paragraphFontFamily, name: 'paragraphFontFamily' } }
								sizeType = {
									{ value: paragraphFontSizeType, name: 'paragraphFontSizeType' }
								}
								fontSize = { { value: paragraphFontSize, name: 'paragraphFontSize' } }
								fontSizeTablet = { { value: paragraphFontSizeTablet, name: 'paragraphFontSizeTablet' } }
								fontSizeMobile = { { value: paragraphFontSizeMobile, name: 'paragraphFontSizeMobile' } }
								fontStyle = { { value: paragraphFontStyle, name: 'paragraphFontStyle' } }
								fontWeight = { { value: paragraphFontWeight, name: 'paragraphFontWeight' } }
								lineHeight = { { value: paragraphLineHeight, name: 'paragraphLineHeight' } }
								letterSpacing = { { value: paragraphLetterSpacing, name: 'paragraphLetterSpacing' } }
								textTransform = { { value: paragraphTextTransform, name: 'paragraphTextTransform' } }
								textDecoration = { { value: paragraphTextDecoration, name: 'paragraphTextDecoration' } }
								setAttributes = { props.setAttributes }
							/>

						</PanelBody>
					</>
				) }
				{ 'advanced' === tab && (
					<Advanced { ...{ attributes, setAttributes } } />
				) }
				</div>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
