const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	ButtonGroup,
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';


import {
	ResponsiveBoxControl,
	ColorPickerControl,
	AlignmentControl,
	TypographyControl,
} from '../../components';

import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		txtAlign,
		
		startingNumber,
		endingNumber,

		numberPrefix,
		numberSuffix,
		easing,
		duration,
		delimiter,
		rounding,

		numberColor,
		numberMargin,
		numberMarginTablet,
		numberMarginMobile,
		numberFontFamily,
		numberFontSizeType,
		numberFontStyle,
		numberFontSize,
		numberFontSizeTablet,
		numberFontSizeMobile,
		numberFontWeight,
		numberTextTransform,
		numberTextDecoration,
		numberLetterSpacing,
		numberLineHeight,

		suffpreColor,
		suffpreMargin,
		suffpreMarginTablet,
		suffpreMarginMobile,
		suffpreFontFamily,
		suffpreFontSizeType,
		suffpreFontStyle,
		suffpreFontSize,
		suffpreFontSizeTablet,
		suffpreFontSizeMobile,
		suffpreFontWeight,
		suffpreTextTransform,
		suffpreTextDecoration,
		suffpreLetterSpacing,
		suffpreLineHeight,

		preset,
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );

	const validateNumValue = ( value ) => {
		if ( isNaN( Number( value ) ) ) {
			return 0;
		}
		return Number( value );
	};

	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<ButtonGroup className="pb-panel-head--tabs__wrapper">
					<Button
						onClick = { () => {
							setTab('content');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'content' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="edit"
					>
						{ __( 'Content', 'powerful-blocks' ) }
					</Button>
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
				{ 'content' === tab && (
					<>
						<PanelBody title={ __( 'Settings', 'powerful-blocks' ) } initialOpen = { open }>
							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ txtAlign }
								onChange={ ( txtAlign ) => {
									setAttributes( { txtAlign } );
								} }
							/>
						</PanelBody>
						
						<PanelBody
							title={ __( 'Digit', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<TextControl
								label={ __( 'Starting Number', 'powerful-blocks' ) }
								value={ startingNumber }
								onChange={ ( startingNumber ) => {
									startingNumber = validateNumValue( startingNumber);
									setAttributes( { startingNumber } );
								} }
							/>
							<TextControl
								label={ __( 'Final Number', 'powerful-blocks' ) }
								value={ endingNumber }
								onChange={ ( endingNumber ) => {
									endingNumber = validateNumValue( endingNumber);
									setAttributes( { endingNumber } );
								} }
							/>
							<TextControl
								label={ __( 'Duration', 'powerful-blocks' ) }
								value={ duration }
								onChange={ ( duration ) => {
									duration = validateNumValue( duration);
									setAttributes( { duration } );
								} }
							/>
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Easing', 'powerful-blocks' ) }
								value={ easing }
								onChange={ ( easing ) => {
									setAttributes( { easing } );
								} }
								options={ [
									{ value: '', label: __( 'None', 'powerful-blocks' ) },
									{ value: 'linear', label: __( 'Linear', 'powerful-blocks' ) },
									{ value: 'swing', label: __( 'Swing', 'powerful-blocks' ) },
								] }
							/>
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Thousand Separator', 'powerful-blocks' ) }
								value={ delimiter }
								onChange={ ( delimiter ) => {
									setAttributes( { delimiter } );
								} }
								options={ [
									{ value: '', label: __( 'None', 'powerful-blocks' ) },
									{ value: ',', label: __( 'Comma', 'powerful-blocks' ) },
									{ value: '.', label: __( 'Dot', 'powerful-blocks' ) },
								] }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Suffix/Prefix', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<TextControl
								label={ __( 'Suffix', 'powerful-blocks' ) }
								value={ numberSuffix }
								onChange={ ( numberSuffix ) => {
									setAttributes( { numberSuffix } );
								} }
							/>
							<TextControl
								label={ __( 'Prefix', 'powerful-blocks' ) }
								value={ numberPrefix }
								onChange={ ( numberPrefix ) => {
									setAttributes( { numberPrefix } );
								} }
							/>
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
						
						<PanelBody
							title={ __( 'Digit', 'powerful-blocks' ) }
						>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ numberColor }
								onChange={ ( numberColor ) => {
									setAttributes( { numberColor } );
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								value={ {
									desktop: numberMargin,
									tablet: numberMarginTablet,
									mobile: numberMarginMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { numberMargin: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { numberMarginTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { numberMarginMobile: value } );
									}
								} }
							/>
							<TypographyControl
								label = { __( 'Typography', 'powerful-blocks' ) }
								fontFamily = { { value: numberFontFamily, name: 'numberFontFamily' } }
								sizeType = {
									{ value: numberFontSizeType, name: 'numberFontSizeType' }
								}
								fontSize = { { value: numberFontSize, name: 'numberFontSize' } }
								fontSizeTablet = { { value: numberFontSizeTablet, name: 'numberFontSizeTablet' } }
								fontSizeMobile = { { value: numberFontSizeMobile, name: 'numberFontSizeMobile' } }
								fontStyle = { { value: numberFontStyle, name: 'numberFontStyle' } }
								fontWeight = { { value: numberFontWeight, name: 'numberFontWeight' } }
								lineHeight = { { value: numberLineHeight, name: 'numberLineHeight' } }
								letterSpacing = { { value: numberLetterSpacing, name: 'numberLetterSpacing' } }
								textTransform = { { value: numberTextTransform, name: 'numberTextTransform' } }
								textDecoration = { { value: numberTextDecoration, name: 'numberTextDecoration' } }
								setAttributes = { props.setAttributes }
							/>

						</PanelBody>
						<PanelBody
							title={ __( 'Suffix & Prefix', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ suffpreColor }
								onChange={ ( suffpreColor ) => {
									setAttributes( { suffpreColor } );
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								value={ {
									desktop: suffpreMargin,
									tablet: suffpreMarginTablet,
									mobile: suffpreMarginMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { suffpreMargin: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { suffpreMarginTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { suffpreMarginMobile: value } );
									}
								} }
							/>
							<TypographyControl
								label = { __( 'Typography', 'powerful-blocks' ) }
								fontFamily = { { value: suffpreFontFamily, name: 'suffpreFontFamily' } }
								sizeType = {
									{ value: suffpreFontSizeType, name: 'suffpreFontSizeType' }
								}
								fontSize = { { value: suffpreFontSize, name: 'suffpreFontSize' } }
								fontSizeTablet = { { value: suffpreFontSizeTablet, name: 'suffpreFontSizeTablet' } }
								fontSizeMobile = { { value: suffpreFontSizeMobile, name: 'suffpreFontSizeMobile' } }
								fontStyle = { { value: suffpreFontStyle, name: 'suffpreFontStyle' } }
								fontWeight = { { value: suffpreFontWeight, name: 'suffpreFontWeight' } }
								lineHeight = { { value: suffpreLineHeight, name: 'suffpreLineHeight' } }
								letterSpacing = { { value: suffpreLetterSpacing, name: 'suffpreLetterSpacing' } }
								textTransform = { { value: suffpreTextTransform, name: 'suffpreTextTransform' } }
								textDecoration = { { value: suffpreTextDecoration, name: 'suffpreTextDecoration' } }
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
