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
	AlignmentControl,
	TypographyControl,
} from '../../components';

import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		activeItem,
		primaryLabel,
		primaryLabelBGColor,
		secondaryLabel,
		secondaryLabelBGColor,
		labelColor,
		hoverLabelColor,
		activeLabelColor,
		labelFontSize,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelFontFamily,
		labelFontSizeType,
		labelFontStyle,
		labelFontWeight,
		labelTextTransform,
		labelTextDecoration,
		labelLetterSpacing,
		labelLineHeight,
		switchAlign,
		switchPosition,
		switchStyle,
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
						<PanelBody title={ __( 'Settings', 'powerful-blocks' ) }>
							<AlignmentControl
								label={ __( 'Switch Alignment', 'powerful-blocks' ) }
								type="flex"
								value={ switchAlign }
								onChange={ ( switchAlign ) => {
									setAttributes( { switchAlign } );
								} }
							/>
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Switch Position', 'powerful-blocks' ) }
								value={ switchPosition }
								onChange={ ( switchPosition ) => {
									setAttributes( { switchPosition } ) }
								}
								options={ [
									{ value: "before", label: __( "Before", "powerful-blocks" ) },
									{ value: "after", label: __( "After", "powerful-blocks"  ) },
									{ value: "beforeAfter", label: __( "Before & After", "powerful-blocks"  ) },
								] }
							/>
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Switch Style', 'powerful-blocks' ) }
								value={ switchStyle }
								onChange={ ( switchStyle ) => {
									setAttributes( { switchStyle } ) }
								}
								options={ [
									{ value: "round", label: __( "Round", "powerful-blocks" ) },
									{ value: "rectangle", label: __( "Rectangle", "powerful-blocks"  ) },
								] }
							/>
							<BaseControl
								label={ __( 'Default', 'powerful-blocks' ) }
								className="pb-control--btn-group"
							>
								<ButtonGroup className="pb-control--btn-group__w">
									<Button
										isPrimary={ 'primary' === activeItem }
										onClick={ () => {
											setAttributes({ activeItem: 'primary' })
										} }
									>Primary</Button>
									<Button
										isPrimary={ 'secondary' === activeItem }
										onClick={ () => {
											setAttributes({ activeItem: 'secondary' })
										} }
									>Secondary</Button>
								</ButtonGroup>
							</BaseControl>
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
					<PanelBody
							title={ __( 'Content', 'powerful-blocks' ) }
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
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
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
										name: "active",
										title: __( 'Active', 'powerful-blocks' ),
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
													{ 'pills' === tabsType && (
														<ColorPickerControl
															label={ __( 'Background Color', 'powerful-blocks' ) }
															value={ titleBGColor }
															onChange={ ( titleBGColor ) => {
																setAttributes( { titleBGColor } );
															} }
														/>
													)}
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ titleColor }
														onChange={ ( titleColor ) => {
															setAttributes( { titleColor } );
														} }
													/>
												</>
											)
										} else if ( "hover" === tab.name ) {
											tabout = (
												<>
													{ 'pills' === tabsType && (
														<ColorPickerControl
															label={ __( 'Background Color', 'powerful-blocks' ) }
															value={ hoverTitleBGColor }
															onChange={ ( hoverTitleBGColor ) => {
																setAttributes( { hoverTitleBGColor } );
															} }
														/>
													)}
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ hoverTitleColor }
														onChange={ ( hoverTitleColor ) => {
															setAttributes( { hoverTitleColor } );
														} }
													/>
												</>
											)
										} else if ( "active" === tab.name ) {
											tabout = (
												<>
													{ 'pills' === tabsType && (
														<ColorPickerControl
															label={ __( 'Background Color', 'powerful-blocks' ) }
															value={ activeTitleBGColor }
															onChange={ ( activeTitleBGColor ) => {
																setAttributes( { activeTitleBGColor } );
															} }
														/>
													)}
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ activeTitleColor }
														onChange={ ( activeTitleColor ) => {
															setAttributes( { activeTitleColor } );
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
								value={ titleTextAlign }
								onChange={ ( titleTextAlign ) => {
									setAttributes( { titleTextAlign } );
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
