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
	TypographyControl
} from '../../components';

import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		contentBackgroundColor,
		hoverContentBackgroundColor,
		contentColor,
		hoverContentColor,
		contentTextAlign,
		contentWidth,
		contentPadding,
		contentPaddingTablet,
		contentPaddingMobile,
		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLineHeight,
		contentFontSizeType,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentFontStyle,
		contentMargin,
		contentMarginTablet,
		contentMarginMobile,
		contentBorderRadius,
		contentBorderRadiusTablet,
		contentBorderRadiusMobile,
		imageData,
		imageSizeType,
		imageSize,
		imageSizeTablet,
		imageSizeMobile,
		imageBorderStyle,
		imageBorderSize,
		imageBorderColor,
		imageBorderRadius,
		imageBorderRadiusTablet,
		imageBorderRadiusMobile,
		imageShadowColor,
		imageShadowHOffset,
		imageShadowVOffset,
		imageShadowBlur,
		imageShadowSpread,
		imageShowContent,
		imagePosition,
		imageMargin,
		imageMarginTablet,
		imageMarginMobile,


		nameColor,
		nameTextAlign,

		nameFontFamily,
		nameFontSizeType,
		nameFontStyle,
		nameFontWeight,
		nameTextTransform,
		nameTextDecoration,
		nameLetterSpacing,
		nameLineHeight,

		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameMargin,
		nameMarginTablet,
		nameMarginMobile,


		titleColor,
		titleTextAlign,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,

		titleFontFamily,
		titleFontSizeType,
		titleFontStyle,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLineHeight,

		titleMargin,
		titleMarginTablet,
		titleMarginMobile,
		clientInfoPosition,
		showContent,
		showImage,
		showName,
		showTitle,
		ratingsAlign,
		showRatings,
		ratingsPosition,
		preset,
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );


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
				<div className="pb-panel-head--tabs__controls">
				{ 'content' === tab && (
					<>
						<PanelBody title={ __( 'Settings', 'powerful-blocks' ) } initialOpen = { open }>
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Preset', 'powerful-blocks' ) }
								value={ preset }
								onChange={ ( preset ) => {
									setAttributes( { preset } );
								} }
								options={ [
									{ value: 'design-1', label: 'Design 1' },
									{ value: 'design-2', label: 'Design 2' },
									{ value: 'design-3', label: 'Design 3' },
								] }
							/>
							<SelectControl
								label={ __( 'Client Info Position', 'powerful-blocks' ) }
								value={ clientInfoPosition }
								onChange={ ( clientInfoPosition ) => {
									setAttributes( { clientInfoPosition } );
								} }
								options={ [
									{ value: 'above-content', label: 'Above Content' },
									{ value: 'after-content', label: 'After Content' },
									{ value: 'left-content', label: 'Left Content' },
									{ value: 'right-content', label: 'Right Content' },
								] }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Image', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Show Image?', 'powerful-blocks' ) }
								checked={ showImage }
								onChange={ ( showImage ) => {
									setAttributes( { showImage } );
								} }
							/>
							<ImageControl
								i18n={ {
									imageSize: __( 'Image Size', 'powerful-blocks' ),
									uploadImage: __(
										'Choose or Upload an image',
										'powerful-blocks'
									),
								} }
								value={ imageData }
								onChange={ ( imageData ) => {
									setAttributes( { imageData } );
								} }
								enableImageSizes
							/>
						</PanelBody>
						<PanelBody title={ __( 'Content', 'powerful-blocks' ) } initialOpen={ false }>
							<ToggleControl
								label={ __( 'Show Content?', 'powerful-blocks' ) }
								checked={ showContent }
								onChange={ ( showContent ) => {
									setAttributes( { showContent } );
								} }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Name', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Show Name?', 'powerful-blocks' ) }
								checked={ showName }
								onChange={ ( showName ) => {
									setAttributes( { showName } );
								} }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Show Title?', 'powerful-blocks' ) }
								checked={ showTitle }
								onChange={ ( showTitle ) => {
									setAttributes( { showTitle } );
								} }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Ratings', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Show Ratings?', 'powerful-blocks' ) }
								checked={ showRatings }
								onChange={ ( showRatings ) => {
									setAttributes( { showRatings } );
								} }
							/>
							<SelectControl
								label={ __( 'Ratings Position', 'powerful-blocks' ) }
								value={ ratingsPosition }
								onChange={ ( ratingsPosition ) => {
									setAttributes( { ratingsPosition } );
								} }
								options={ [
									{ value: 'before-content', label: 'Before Content' },
									{ value: 'after-content', label: 'After Content' },
									{ value: 'after-info', label: 'After Info' },
								] }
							/>
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
						<PanelBody
							title={ __( 'Image', 'powerful-blocks' ) }
						>
							<ResponsiveRangeControl
								label={ __( 'Size', 'powerful-blocks' ) }
								sizeType = {
									{ value: imageSizeType, name: 'imageSizeType' }
								}
								sizeTypes = { [
									{ key: "px", name: __( "px" ) },
									{ key: "em", name: __( "em" ) },
								] }
								sizeOnDesktop = { { value: imageSize, name: 'imageSize' } }
								sizeOnTablet = { { value: imageSizeTablet, name: 'imageSizeTablet' } }
								sizeOnMobile = { { value: imageSizeMobile, name: 'imageSizeMobile' } }
								min={ 0 }
								max={ 500 }
								setAttributes = { setAttributes }
							/>

							<BaseControl
								label={ __( 'Border', 'powerful-blocks' ) }
								className="pb-border-control"
							>
								<Dropdown
									className="pb-border-control--dropdown"
									contentClassName="my-popover-content-classname"
									position="bottom right"
									renderToggle={ ( { isOpen, onToggle } ) => (
										<Button
											isSmall
											onClick={ onToggle }
											aria-expanded={ isOpen }
											icon="edit"
										></Button>
									) }
									renderContent={ () => (
										<div className="pb-border-control--content">
											<SelectControl
												className = "pb-custom-select-control"
												label={ __(
													'Border Style',
													'powerful-blocks'
												) }
												value={ imageBorderStyle }
												onChange={ ( imageBorderStyle ) => {
													setAttributes( { imageBorderStyle } );
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
												label={ __(
													'Border Size',
													'powerful-blocks'
												) }
												value={ imageBorderSize }
												onChange={ ( imageBorderSize ) =>
													setAttributes( { imageBorderSize } )
												}
												min={ 0 }
												step={ 1 }
												max={ 10 }
											/>
											<ColorPickerControl
												label={ __( 'Border Color', 'powerful-blocks' ) }
												value={ imageBorderColor }
												onChange={ ( imageBorderColor ) => {
													setAttributes( { imageBorderColor } );
												} }
											/>
										</div>
									) }
								/>
							</BaseControl>

							<ResponsiveBoxControl
								label={ __( 'Border Radius', 'powerful-blocks' ) }
								value={ {
									desktop: imageBorderRadius,
									tablet: imageBorderRadiusTablet,
									mobile: imageBorderRadiusMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { imageBorderRadius: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { imageBorderRadiusTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { imageBorderRadiusMobile: value } );
									}
								} }
							/>

							<BaseControl
								label={ __( 'Shadow', 'powerful-blocks' ) }
								className="pb-shadow-control"
							>
								<Dropdown
									className="pb-shadow-control--dropdown"
									contentClassName="my-popover-content-classname"
									position="bottom right"
									renderToggle={ ( { isOpen, onToggle } ) => (
										<Button
											isSmall
											onClick={ onToggle }
											aria-expanded={ isOpen }
											icon="edit"
										></Button>
									) }
									renderContent={ () => (
										<div className="pb-shadow-control--content">
											<p>
												<strong>Shadow</strong>
											</p>
											<ColorPickerControl
												label={ __( 'Color', 'powerful-blocks' ) }
												value={ imageShadowColor }
												onChange={ ( imageShadowColor ) => {
													setAttributes( { imageShadowColor } );
												} }
											/>
											<RangeControl
												label={ __(
													'Horizontal Offset',
													'powerful-blocks'
												) }
												value={ imageShadowHOffset }
												onChange={ ( imageShadowHOffset ) =>
													setAttributes( { imageShadowHOffset } )
												}
												min={ 0 }
												step={ 1 }
												max={ 10 }
											/>
											<RangeControl
												label={ __(
													'Vertical Offset',
													'powerful-blocks'
												) }
												value={ imageShadowVOffset }
												onChange={ ( imageShadowVOffset ) =>
													setAttributes( { imageShadowVOffset } )
												}
												min={ 0 }
												step={ 1 }
												max={ 10 }
											/>
											<RangeControl
												label={ __( 'Blur', 'powerful-blocks' ) }
												value={ imageShadowBlur }
												onChange={ ( imageShadowBlur ) =>
													setAttributes( { imageShadowBlur } )
												}
												min={ 0 }
												step={ 1 }
												max={ 10 }
											/>
											<RangeControl
												label={ __( 'Spread', 'powerful-blocks' ) }
												value={ imageShadowSpread }
												onChange={ ( imageShadowSpread ) =>
													setAttributes( { imageShadowSpread } )
												}
												min={ 0 }
												step={ 1 }
												max={ 10 }
											/>
										</div>
									) }
								/>
							</BaseControl>

							<ResponsiveBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								value={ {
									desktop: imageMargin,
									tablet: imageMarginTablet,
									mobile: imageMarginMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { imageMargin: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { imageMarginTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { imageMarginMobile: value } );
									}
								} }
							/>

							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Image Position', 'powerful-blocks' ) }
								value={ imagePosition }
								onChange={ ( imagePosition ) => {
									setAttributes( { imagePosition } );
								} }
								options={ [
									{ value: 'left', label: 'Left' },
									{ value: 'right', label: 'Right' },
									{ value: 'top', label: 'Top' },
									{ value: 'bottom', label: 'Bottom' },
								] }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Content', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<TabPanel className="pb-panel-inspect--tabs" activeClass="pb-pi-tab--active"
								tabs={ [
									{
										name: "normal",
										title: __( 'Normal', 'powerful-blocks' ),
										className: "pb-panel-inspect--tab",
									},
									{
										name: "hover",
										title: __( 'Hover', 'powerful-blocks' ),
										className: "pb-panel-inspect--tab",
									},
								] }>
								{
									( tab ) => {
										let tabout

										if ( "normal" === tab.name ) {
											tabout = (
												<>
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ contentBackgroundColor }
														onChange={ ( contentBackgroundColor ) => {
															setAttributes( { contentBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ contentColor }
														onChange={ ( contentColor ) => {
															setAttributes( { contentColor } );
														} }
													/>
												</>
											)
										} else if ( "hover" === tab.name ) {
											tabout = (
												<>
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ hoverContentBackgroundColor }
														onChange={ ( hoverContentBackgroundColor ) => {
															setAttributes( { hoverContentBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ hoverContentColor }
														onChange={ ( hoverContentColor ) => {
															setAttributes( { hoverContentColor } );
														} }
													/>
												</>
											)
										} else {
											tabout = (
												<>
													<p>Loading..</p>
												</>
											)
										}
										return <div className="pb-panel-inspect--tabs__controls">{ tabout }</div>
									}
								}
							</TabPanel>

							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ contentTextAlign }
								onChange={ ( contentTextAlign ) => {
									setAttributes( { contentTextAlign } );
								} }
							/>

							{ ( 'left-content' === clientInfoPosition ||
								'right-content' === clientInfoPosition ) && (
								<RangeControl
									label={ __( 'Width (%)', 'powerful-blocks' ) }
									value={ contentWidth }
									onChange={ ( contentWidth ) =>
										setAttributes( { contentWidth } )
									}
									min={ 1 }
									max={ 100 }
									step={ 1 }
								/>
							) }
							<ResponsiveBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								value={ {
									desktop: contentMargin,
									tablet: contentMarginTablet,
									mobile: contentMarginMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { contentMargin: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { contentMarginTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { contentMarginMobile: value } );
									}
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								value={ {
									desktop: contentPadding,
									tablet: contentPaddingTablet,
									mobile: contentPaddingMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { contentPadding: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { contentPaddingTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { contentPaddingMobile: value } );
									}
								} }
							/>

							<ResponsiveBoxControl
								label={ __( 'Border Radius', 'powerful-blocks' ) }
								value={ {
									desktop: contentBorderRadius,
									tablet: contentBorderRadiusTablet,
									mobile: contentBorderRadiusMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { contentBorderRadius: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { contentBorderRadiusTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { contentBorderRadiusMobile: value } );
									}
								} }
							/>
							<TypographyControl
								label = { __( 'Typography', 'powerful-blocks' ) }
								fontFamily = { { value: contentFontFamily, name: 'contentFontFamily' } }
								sizeType = {
									{ value: contentFontSizeType, name: 'contentFontSizeType' }
								}
								fontSize = { { value: contentFontSize, name: 'contentFontSize' } }
								fontSizeTablet = { { value: contentFontSizeTablet, name: 'contentFontSizeTablet' } }
								fontSizeMobile = { { value: contentFontSizeMobile, name: 'contentFontSizeMobile' } }
								fontStyle = { { value: contentFontStyle, name: 'contentFontStyle' } }
								fontWeight = { { value: contentFontWeight, name: 'contentFontWeight' } }
								lineHeight = { { value: contentLineHeight, name: 'contentLineHeight' } }
								letterSpacing = { { value: contentLetterSpacing, name: 'contentLetterSpacing' } }
								textTransform = { { value: contentTextTransform, name: 'contentTextTransform' } }
								textDecoration = { { value: contentTextDecoration, name: 'contentTextDecoration' } }
								setAttributes = { props.setAttributes }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Name', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ nameColor }
								onChange={ ( nameColor ) => {
									setAttributes( { nameColor } );
								} }
							/>
							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ nameTextAlign }
								onChange={ ( nameTextAlign ) => {
									setAttributes( { nameTextAlign } );
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								value={ {
									desktop: nameMargin,
									tablet: nameMarginTablet,
									mobile: nameMarginMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { nameMargin: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { nameMarginTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { nameMarginMobile: value } );
									}
								} }
							/>
							<TypographyControl
								label = { __( 'Typography', 'powerful-blocks' ) }
								fontFamily = { { value: nameFontFamily, name: 'nameFontFamily' } }
								sizeType = {
									{ value: nameFontSizeType, name: 'nameFontSizeType' }
								}
								fontSize = { { value: nameFontSize, name: 'nameFontSize' } }
								fontSizeTablet = { { value: nameFontSizeTablet, name: 'nameFontSizeTablet' } }
								fontSizeMobile = { { value: nameFontSizeMobile, name: 'nameFontSizeMobile' } }
								fontStyle = { { value: nameFontStyle, name: 'nameFontStyle' } }
								fontWeight = { { value: nameFontWeight, name: 'nameFontWeight' } }
								lineHeight = { { value: nameLineHeight, name: 'nameLineHeight' } }
								letterSpacing = { { value: nameLetterSpacing, name: 'nameLetterSpacing' } }
								textTransform = { { value: nameTextTransform, name: 'nameTextTransform' } }
								textDecoration = { { value: nameTextDecoration, name: 'nameTextDecoration' } }
								setAttributes = { props.setAttributes }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ titleColor }
								onChange={ ( titleColor ) => {
									setAttributes( { titleColor } );
								} }
							/>
							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ titleTextAlign }
								onChange={ ( titleTextAlign ) => {
									setAttributes( { titleTextAlign } );
								} }
							/>
							
							<ResponsiveBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								value={ {
									desktop: titleMargin,
									tablet: titleMarginTablet,
									mobile: titleMarginMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { titleMargin: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { titleMarginTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { titleMarginMobile: value } );
									}
								} }
							/>

							<TypographyControl
								label = { __( 'Typography', 'powerful-blocks' ) }
								fontFamily = { { value: titleFontFamily, name: 'titleFontFamily' } }
								sizeType = {
									{ value: titleFontSizeType, name: 'titleFontSizeType' }
								}
								fontSize = { { value: titleFontSize, name: 'titleFontSize' } }
								fontSizeTablet = { { value: titleFontSizeTablet, name: 'titleFontSizeTablet' } }
								fontSizeMobile = { { value: titleFontSizeMobile, name: 'titleFontSizeMobile' } }
								fontStyle = { { value: titleFontStyle, name: 'titleFontStyle' } }
								fontWeight = { { value: titleFontWeight, name: 'titleFontWeight' } }
								lineHeight = { { value: titleLineHeight, name: 'titleLineHeight' } }
								letterSpacing = { { value: titleLetterSpacing, name: 'titleLetterSpacing' } }
								textTransform = { { value: titleTextTransform, name: 'titleTextTransform' } }
								textDecoration = { { value: titleTextDecoration, name: 'titleTextDecoration' } }
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
