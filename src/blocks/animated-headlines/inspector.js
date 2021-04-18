const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	TextControl,
	FormTokenField,
} = wp.components;
const { __ } = wp.i18n;


import {
	ResponsiveBoxControl,
	ColorPickerControl,
	AlignmentControl,
	TypographyControl,
} from '../../components';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		txtAlign,
		animationType,
		textTag,
		prefixText,
		suffixText,
		animatedText,
		loadingBarColor,

		animatedTextColor,
		animatedTextMargin,
		animatedTextMarginTablet,
		animatedTextMarginMobile,
		animatedTextFontFamily,
		animatedTextFontSizeType,
		animatedTextFontStyle,
		animatedTextFontSize,
		animatedTextFontSizeTablet,
		animatedTextFontSizeMobile,
		animatedTextFontWeight,
		animatedTextTextTransform,
		animatedTextTextDecoration,
		animatedTextLetterSpacing,
		animatedTextLineHeight,


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
	} = attributes;


	return (
		<InspectorControls>
			<div className="pb-custom-control-styles">
				<PanelBody title={ __( 'Settings', 'powerful-blocks' ) } initialOpen = { open }>
					<AlignmentControl
						label={ __( 'Alignment', 'powerful-blocks' ) }
						type="text"
						value={ txtAlign }
						onChange={ ( txtAlign ) => {
							setAttributes( { txtAlign } );
						} }
					/>
					<SelectControl
						className = "pb-custom-select-control"
						label={ __( 'Animation Type', 'powerful-blocks' ) }
						value={ animationType }
						onChange={ ( animationType ) => {
							setAttributes( { animationType } ) }
						}
						options={ [
							{ value: "rotate-1", label: __( 'Rotate', 'powerful-blocks' ) },
							{ value: "loading-bar", label: __( 'Loading Bar', 'powerful-blocks' ) },
							{ value: "slide", label: __( 'Slide', 'powerful-blocks' ) },
							{ value: "clip", label: __( 'Clip', 'powerful-blocks' ) },
							{ value: "zoom", label: __( 'Zoom', 'powerful-blocks' ) },
							{ value: "push", label: __( 'Push', 'powerful-blocks' ) },
						] }
					/>
					<SelectControl
						className = "pb-custom-select-control"
						label={ __( 'Text Tag', 'powerful-blocks' ) }
						value={ textTag }
						onChange={ ( textTag ) => {
							setAttributes( { textTag } ) }
						}
						options={ [
							{ value: "h1", label: __( 'H1', 'powerful-blocks' ) },
							{ value: "h2", label: __( 'H2', 'powerful-blocks' ) },
							{ value: "h3", label: __( 'H3', 'powerful-blocks' ) },
							{ value: "h4", label: __( 'H4', 'powerful-blocks' ) },
							{ value: "h5", label: __( 'H5', 'powerful-blocks' ) },
							{ value: "h6", label: __( 'H6', 'powerful-blocks' ) },
							{ value: "span", label: __( 'Span', 'powerful-blocks' ) },
							{ value: "div", label: __( 'Div', 'powerful-blocks' ) },
						] }
					/>
					{ ( 'loading-bar' === animationType || 'clip' === animationType ) && (
						<ColorPickerControl
							label={ __( 'Color', 'powerful-blocks' ) }
							value={ loadingBarColor }
							onChange={ ( loadingBarColor ) => {
								setAttributes( { loadingBarColor } );
							} }
						/>
					)}
				</PanelBody>
				<PanelBody
					title={ __( 'Texts', 'powerful-blocks' ) }
					initialOpen={ false }
				>
					<TextControl
						label={ __( 'Prefix Text', 'powerful-blocks' ) }
						value={ prefixText }
						onChange={ ( prefixText ) => {
								setAttributes( { prefixText } ) 
							}
						}
					/>
					<TextControl
						label={ __( 'Suffix Text', 'powerful-blocks' ) }
						value={ suffixText }
						onChange={ ( suffixText ) => {
								setAttributes( { suffixText } ) 
							}
						}
					/>
					<FormTokenField
						value={ animatedText }
						onChange={ ( animatedText ) => {
							setAttributes( { animatedText } ) 
						} }
						label={ __( 'Animated Texts', 'powerful-blocks' ) }
					/>

				</PanelBody>
				<PanelBody
					title={ __( 'Animated Texts', 'powerful-blocks' ) }
					initialOpen={ false }
				>
					<ColorPickerControl
						label={ __( 'Color', 'powerful-blocks' ) }
						value={ animatedTextColor }
						onChange={ ( animatedTextColor ) => {
							setAttributes( { animatedTextColor } );
						} }
					/>
					<ResponsiveBoxControl
						label={ __( 'Margin', 'powerful-blocks' ) }
						value={ {
							desktop: animatedTextMargin,
							tablet: animatedTextMarginTablet,
							mobile: animatedTextMarginMobile,
						} }
						onChange={ ( value, device ) => {
							if ( 'desktop' === device ) {
								setAttributes( { animatedTextMargin: value } );
							}
							if ( 'tablet' === device ) {
								setAttributes( { animatedTextMarginTablet: value } );
							}
							if ( 'mobile' === device ) {
								setAttributes( { animatedTextMarginMobile: value } );
							}
						} }
					/>
					<TypographyControl
						label = { __( 'Typography', 'powerful-blocks' ) }
						fontFamily = { { value: animatedTextFontFamily, name: 'animatedTextFontFamily' } }
						sizeType = {
							{ value: animatedTextFontSizeType, name: 'animatedTextFontSizeType' }
						}
						fontSize = { { value: animatedTextFontSize, name: 'animatedTextFontSize' } }
						fontSizeTablet = { { value: animatedTextFontSizeTablet, name: 'animatedTextFontSizeTablet' } }
						fontSizeMobile = { { value: animatedTextFontSizeMobile, name: 'animatedTextFontSizeMobile' } }
						fontStyle = { { value: animatedTextFontStyle, name: 'animatedTextFontStyle' } }
						fontWeight = { { value: animatedTextFontWeight, name: 'animatedTextFontWeight' } }
						lineHeight = { { value: animatedTextLineHeight, name: 'animatedTextLineHeight' } }
						letterSpacing = { { value: animatedTextLetterSpacing, name: 'animatedTextLetterSpacing' } }
						textTransform = { { value: animatedTextTextTransform, name: 'animatedTextTextTransform' } }
						textDecoration = { { value: animatedTextTextDecoration, name: 'animatedTextTextDecoration' } }
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
			</div>
		</InspectorControls>
	);
};

export default Inspector;
