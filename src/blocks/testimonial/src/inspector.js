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


import { ResponsiveRangeControl } from '../../../components';
import { ImageControl } from '../../../components';
import { AlignmentControl } from '../../../components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		backgroundColor,
		hoverBackgroundColor,
		padding,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,
		contentBackgroundColor,
		hoverContentBackgroundColor,
		contentColor,
		contentTextAlign,
		contentWidth,
		contentPadding,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentMargin,
		contentBorderRadius,
		contentBorderRadiusTablet,
		contentBorderRadiusMobile,
		imageData,
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
		nameColor,
		nameTextAlign,
		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameMargin,
		titleColor,
		titleTextAlign,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleMargin,
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

	let currentTab = 'layout';

	const [ tab, setTab ] = useState( currentTab );

	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<ButtonGroup className="pb-panel-head--tabs__wrapper">
					<Button
						onClick = { () => {
							setTab('layout');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'layout' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="layout"
					>
						{ __( 'Layout', 'powerful-blocks' ) }
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
						icon="edit"
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
				{ 'layout' === tab && (
					<>
						<PanelBody title={ __( 'Layout', 'powerful-blocks' ) } initialOpen = { open }>
							<SelectControl
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
								value={ {
									desktop: imageSize,
									tablet: imageSizeTablet,
									mobile: imageSizeMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { imageSize: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { imageSizeTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { imageSizeMobile: value } );
									}
								} }
								min={ 0 }
								max={ 500 }
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
											<p>
												{ __( 'Border Color', 'powerful-blocks' ) }
											</p>
											<ColorPalette
												value={ imageBorderColor }
												onChange={ ( imageBorderColor ) =>
													setAttributes( { imageBorderColor } )
												}
												allowReset
											/>
										</div>
									) }
								/>
							</BaseControl>

							<ResponsiveRangeControl
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
								min={ 0 }
								max={ 100 }
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
											<p>{ __( 'Color', 'powerful-blocks' ) }</p>
											<ColorPalette
												value={ imageShadowColor }
												onChange={ ( imageShadowColor ) =>
													setAttributes( { imageShadowColor } )
												}
												allowReset
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

							<__experimentalBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								values={ imageMargin }
								onChange={ ( imageMargin ) => {
									setAttributes( { imageMargin } );
								} }
							/>

							<SelectControl
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
							<p>{ __( 'Color', 'powerful-blocks' ) }</p>
							<ColorPalette
								value={ contentColor }
								onChange={ ( value ) =>
									setAttributes( { contentColor: value } )
								}
								allowReset
							/>

							<p>{ __( 'Background Color', 'powerful-blocks' ) }</p>
							<ColorPalette
								value={ contentBackgroundColor }
								onChange={ ( value ) =>
									setAttributes( { contentBackgroundColor: value } )
								}
								allowReset
							/>
							<p>{ __( 'Background Color( Hover )', 'powerful-blocks' ) }</p>
							<ColorPalette
								value={ hoverContentBackgroundColor }
								onChange={ ( value ) =>
									setAttributes( { hoverContentBackgroundColor: value } )
								}
								allowReset
							/>

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

							<ResponsiveRangeControl
								label={ __( 'Font Size', 'powerful-blocks' ) }
								value={ {
									desktop: contentFontSize,
									tablet: contentFontSizeTablet,
									mobile: contentFontSizeMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { contentFontSize: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { contentFontSizeTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { contentFontSizeMobile: value } );
									}
								} }
							/>
							<__experimentalBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								values={ contentMargin }
								onChange={ ( contentMargin ) => {
									setAttributes( { contentMargin } );
								} }
							/>
							<__experimentalBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								values={ contentPadding }
								onChange={ ( contentPadding ) => {
									setAttributes( { contentPadding } );
								} }
							/>
							<ResponsiveRangeControl
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
										setAttributes( {
											contentBorderRadiusTablet: value,
										} );
									}
									if ( 'mobile' === device ) {
										setAttributes( {
											contentBorderRadiusMobile: value,
										} );
									}
								} }
								min={ 0 }
								max={ 200 }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Name', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<p>{ __( 'Color', 'powerful-blocks' ) }</p>
							<ColorPalette
								value={ nameColor }
								onChange={ ( value ) =>
									setAttributes( { nameColor: value } )
								}
								allowReset
							/>
							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ nameTextAlign }
								onChange={ ( nameTextAlign ) => {
									setAttributes( { nameTextAlign } );
								} }
							/>
							<ResponsiveRangeControl
								label={ __( 'Font Size', 'powerful-blocks' ) }
								value={ {
									desktop: nameFontSize,
									tablet: nameFontSizeTablet,
									mobile: nameFontSizeMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { nameFontSize: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { nameFontSizeTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { nameFontSizeMobile: value } );
									}
								} }
							/>
							<__experimentalBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								values={ nameMargin }
								onChange={ ( nameMargin ) => {
									setAttributes( { nameMargin } );
								} }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<p>{ __( 'Color', 'powerful-blocks' ) }</p>
							<ColorPalette
								value={ titleColor }
								onChange={ ( value ) =>
									setAttributes( { titleColor: value } )
								}
								allowReset
							/>
							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ titleTextAlign }
								onChange={ ( titleTextAlign ) => {
									setAttributes( { titleTextAlign } );
								} }
							/>
							<ResponsiveRangeControl
								label={ __( 'Font Size', 'powerful-blocks' ) }
								value={ {
									desktop: titleFontSize,
									tablet: titleFontSizeTablet,
									mobile: titleFontSizeMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { titleFontSize: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { titleFontSizeTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { titleFontSizeMobile: value } );
									}
								} }
							/>
							<__experimentalBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								values={ titleMargin }
								onChange={ ( titleMargin ) => {
									setAttributes( { titleMargin } );
								} }
							/>
						</PanelBody>
					</>
				) }
				{ 'advanced' === tab && (
				<>
					<PanelBody title={ __( 'Background', 'powerful-blocks' ) }>
						<p>{ __( 'Background Color', 'powerful-blocks' ) }</p>
						<ColorPalette
							value={ backgroundColor }
							onChange={ ( backgroundColor ) =>
								setAttributes( { backgroundColor } )
							}
							allowReset
						/>
						<p>{ __( 'Background Color ( Hover )', 'powerful-blocks' ) }</p>
						<ColorPalette
							value={ hoverBackgroundColor }
							onChange={ ( value ) =>
								setAttributes( { hoverBackgroundColor: value } )
							}
							allowReset
						/>
					</PanelBody>
					<PanelBody title={ __( 'Spacing', 'powerful-blocks' ) } initialOpen={ false }>
						<__experimentalBoxControl
							label={ __( 'Padding', 'powerful-blocks' ) }
							values={ padding }
							onChange={ ( padding ) => {
								setAttributes( { padding } );
							} }
						/>
					</PanelBody>

					<PanelBody title={ __( 'Box Shadow', 'powerful-blocks' ) } initialOpen={ false }>
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
										<p>{ __( 'Color', 'powerful-blocks' ) }</p>
										<ColorPalette
											value={ shadowColor }
											onChange={ ( shadowColor ) =>
												setAttributes( { shadowColor } )
											}
											allowReset
										/>
										<RangeControl
											label={ __(
												'Horizontal Offset',
												'powerful-blocks'
											) }
											value={ shadowHOffset }
											onChange={ ( shadowHOffset ) =>
												setAttributes( { shadowHOffset } )
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
											value={ shadowVOffset }
											onChange={ ( shadowVOffset ) =>
												setAttributes( { shadowVOffset } )
											}
											min={ 0 }
											step={ 1 }
											max={ 10 }
										/>
										<RangeControl
											label={ __( 'Blur', 'powerful-blocks' ) }
											value={ shadowBlur }
											onChange={ ( shadowBlur ) =>
												setAttributes( { shadowBlur } )
											}
											min={ 0 }
											step={ 1 }
											max={ 10 }
										/>
										<RangeControl
											label={ __( 'Spread', 'powerful-blocks' ) }
											value={ shadowSpread }
											onChange={ ( shadowSpread ) =>
												setAttributes( { shadowSpread } )
											}
											min={ 0 }
											step={ 1 }
											max={ 10 }
										/>
									</div>
								) }
							/>
						</BaseControl>
					</PanelBody>
				</>
				) }
				</div>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
