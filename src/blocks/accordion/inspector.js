const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	RangeControl,
	BaseControl,
	Dropdown,
	Button,
	ButtonGroup,
	TabPanel,
	Dashicon
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
	ShadowControl,
	IconPickerControl
} from '../../components';

import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		accordions,
		accordionType,
		toggleSpeed,

		toggleIcon,
		toggleOpenIcon,
		toggleCloseIcon,


		contentBackgroundColor,
		activeContentBackgroundColor,
		hoverContentBackgroundColor,
		contentColor,
		activeContentColor,
		hoverContentColor,
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
		contentTextAlign,
		titleTag,

		titleBackgroundColor,
		activeTitleBackgroundColor,
		hoverTitleBackgroundColor,
		activeTitleColor,
		hoverTitleColor,
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
		titlePadding,
		titlePaddingTablet,
		titlePaddingMobile,


		iconSizeUnitType,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,

		itemsGapUnitType,
		itemsGap,
		itemsGapTablet,
		itemsGapMobile,


		toggleIconBackgroundColor,
		activeToggleIconBackgroundColor,
		hoverToggleIconBackgroundColor,
		toggleIconColor,
		activeToggleIconColor,
		hoverToggleIconColor,
		toggleIconSizeUnitType,
		toggleIconSize,
		toggleIconSizeTablet,
		toggleIconSizeMobile,

		toggleIconPadding,
		toggleIconPaddingTablet,
		toggleIconPaddingMobile,
		toggleIconBorderRadius,
		toggleIconBorderRadiusTablet,
		toggleIconBorderRadiusMobile,
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );

	let currentR = 'pb-r-0';
	const [ repeater, setRepeater ] = useState( currentR );

	let currentAType = accordionType || 'accordion';
    const [ aType, setaType ] = useState( currentAType );

	const updateAccordion = ( value, index, key ) =>{
		let nAccordions = [ ...accordions ];
		nAccordions[index][key] = value;
		setAttributes({ accordions: nAccordions });
	}


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
						<PanelBody title={ __( 'Accordions', 'powerful-blocks' ) } initialOpen = { open }>
							<div className="pb-repeater--wrapper">
								{
									accordions.map( ( accordion, key ) => (
										<div 
										className={
											classnames(
												"pb-repeater--item",
												`pb-r-${key}` === repeater ? 'pb-repeater-active' : ''
											)
										}
										>
											<div
												className="pb-repeater-header"
												onClick = { () => {
													`pb-r-${key}` === repeater ? setRepeater( '' ) : setRepeater( `pb-r-${key}`);
												}}
											>
												<div className="pb-repeater-header--title">{accordion.title}</div>
												<div className="pb-repeater-header--duplicate">
													<Button
														// onClick = {}
														icon="no-alt"
													>
													</Button>
												</div>
												<div className="pb-repeater-header--del">
													<Button
														onClick = { 
															() => {
																let nAccordions = [ ...accordions ];
																nAccordions.splice( key, 1 );

																setAttributes( { accordions: nAccordions });
															}
														}
														icon="no-alt"
													>
													</Button>
												</div>
											</div>
											<div className="pb-repeater-controls">
												<TextControl
													label={ __( 'Title', 'powerful-blocks' ) }
													value={ accordion.title }
													onChange={ ( title ) => {
														updateAccordion( title, key, 'title' );
													} }
												/>
												<TextareaControl
													label={ __( 'Content', 'powerful-blocks' ) }
													value={ accordion.content }
													onChange={ ( content ) => {
														updateAccordion( content, key, 'content' );

													} }
												/>
												<ToggleControl
													label={ __( 'Icon', 'powerful-blocks' ) }
													checked={ accordion.enableIcon }
													onChange={ ( enableIcon ) => {
														updateAccordion( enableIcon, key, 'enableIcon' );
													} }
												/>
												{ 
													true === accordion.enableIcon ? (
														
														<IconPickerControl
															label={ __( 'Select Icon', 'powerful-blocks' ) }
															onChange = { (icon) => {
																updateAccordion( icon, key, 'icon' );
															}}
															icon = { accordion.icon }
														/>
													) : ''
												}
											</div>
										</div>
									))
								}
								<div 
									className="pb-repeater-add-item pb-repeater--item"
									onClick = { () => {
										let key = accordions.length + 1;

										let nAccordions = [
											...accordions,
											{
												isDefault: true,
												icon: '',
												'title': `PB Accordion #${key}`,
												contentType: 'content',
												'content': __(
													'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
													'powerful-blocks'
												),
											}
										];
										setAttributes( { accordions: nAccordions });
									} }
								>
									<Dashicon icon="plus-alt2" />
									Add Accordion
								</div>
							</div>
							<div className="pb-panel-s--tabs">
								<div className="pb-panel-s--tabs__wrapper">
									<div className="pb-panel-s--tab__title">Accordion Type</div>
									<ButtonGroup>
										<Button
											onClick = { () => {
												setaType('accordion');
												setAttributes({ accordionType: 'accordion' })
											}}
											className = {
												classnames(
													"pb-panel-s--tab",
													'accordion' === aType ? 'pb-ps-tab--active' : '',
												)
											}
										>
											Accordion
										</Button>
										<Button
											onClick = { () => {
												setaType('toggle');
												setAttributes({ accordionType: 'toggle' })
											}}
											className = {
												classnames(
													"pb-panel-s--tab",
													'toggle' === aType ? 'pb-ps-tab--active' : '',
												)
											}
										>
										Toggle
										</Button>
									</ButtonGroup>
								</div>
							</div>
							<RangeControl
								label={ __(
									'Toggle Speed (ms)',
									'powerful-blocks'
								) }
								value={ toggleSpeed }
								onChange={ ( toggleSpeed ) =>
									setAttributes( { toggleSpeed } )
								}
								min={ 0 }
								step={ 1 }
								max={ 1000 }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Title Tag', 'powerful-blocks' ) }
								value={ titleTag }
								onChange={ ( titleTag ) => {
									setAttributes( { titleTag } ) }
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
						</PanelBody>
						<PanelBody
							title={ __( 'Toggle Icon', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Toggle Icon', 'powerful-blocks' ) }
								checked={ toggleIcon }
								onChange={ ( toggleIcon ) => {
									setAttributes( { toggleIcon });
								} }
							/>
							{ 
								true === toggleIcon ? (
									<>
										<IconPickerControl
											label={ __( 'Toggle Icon', 'powerful-blocks' ) }
											onChange = { (toggleOpenIcon) => {
												setAttributes( { toggleOpenIcon });
											}}
											icon = { toggleOpenIcon }
										/>
										<IconPickerControl
											label={ __( 'Active Toggle Icon', 'powerful-blocks' ) }
											onChange = { (toggleCloseIcon) => {
												setAttributes( { toggleCloseIcon });
											}}
											icon = { toggleCloseIcon }
										/>
									</>
								) : ''
							}
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
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
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ titleBackgroundColor }
														onChange={ ( titleBackgroundColor ) => {
															setAttributes( { titleBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ titleColor }
														onChange={ ( titleColor ) => {
															setAttributes( { titleColor } );
														} }
													/>
												</>
											)
										} else if ( "active" === tab.name ) {
											tabout = (
												<>
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ activeTitleBackgroundColor }
														onChange={ ( activeTitleBackgroundColor ) => {
															setAttributes( { activeTitleBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ activeTitleColor }
														onChange={ ( activeTitleColor ) => {
															setAttributes( { activeTitleColor } );
														} }
													/>
												</>
											)
										} else if ( "hover" === tab.name ) {
											tabout = (
												<>
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ hoverTitleBackgroundColor }
														onChange={ ( hoverTitleBackgroundColor ) => {
															setAttributes( { hoverTitleBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ hoverTitleColor }
														onChange={ ( hoverTitleColor ) => {
															setAttributes( { hoverTitleColor } );
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

							<ResponsiveBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								value={ {
									desktop: titlePadding,
									tablet: titlePaddingTablet,
									mobile: titlePaddingMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { titlePadding: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { titlePaddingTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { titlePaddingMobile: value } );
									}
								} }
							/>

							<ResponsiveRangeControl
								label={ __( 'Icon Size', 'powerful-blocks' ) }
								sizeType = {
									{ value: iconSizeUnitType, name: 'iconSizeUnitType' }
								}
								sizeOnDesktop = { { value: iconSize, name: 'iconSize' } }
								sizeOnTablet = { { value: iconSizeTablet, name: 'iconSizeTablet' } }
								sizeOnMobile = { { value: iconSizeMobile, name: 'iconSizeMobile' } }
								min={ 0 }
								max={ 100 }
								setAttributes = { setAttributes }
							/>

							<ResponsiveRangeControl
								label={ __( 'Items Gap', 'powerful-blocks' ) }
								sizeType = {
									{ value: itemsGapUnitType, name: 'itemsGapUnitType' }
								}
								sizeOnDesktop = { { value: itemsGap, name: 'itemsGap' } }
								sizeOnTablet = { { value: itemsGapTablet, name: 'itemsGapTablet' } }
								sizeOnMobile = { { value: itemsGapMobile, name: 'itemsGapMobile' } }
								min={ 0 }
								max={ 500 }
								setAttributes = { setAttributes }
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
										} else if ( "active" === tab.name ) {
											tabout = (
												<>
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ activeContentBackgroundColor }
														onChange={ ( activeContentBackgroundColor ) => {
															setAttributes( { activeContentBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ activeContentColor }
														onChange={ ( activeContentColor ) => {
															setAttributes( { activeContentColor } );
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
							title={ __( 'Toggle Icon ', 'powerful-blocks' ) }
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
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ toggleIconBackgroundColor }
														onChange={ ( toggleIconBackgroundColor ) => {
															setAttributes( { toggleIconBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ toggleIconColor }
														onChange={ ( toggleIconColor ) => {
															setAttributes( { toggleIconColor } );
														} }
													/>
												</>
											)
										} else if ( "active" === tab.name ) {
											tabout = (
												<>
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ activeToggleIconBackgroundColor }
														onChange={ ( activeToggleIconBackgroundColor ) => {
															setAttributes( { activeToggleIconBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ activeToggleIconColor }
														onChange={ ( activeToggleIconColor ) => {
															setAttributes( { activeToggleIconColor } );
														} }
													/>
												</>
											)
										} else if ( "hover" === tab.name ) {
											tabout = (
												<>
													<ColorPickerControl
														label={ __( 'Background Color', 'powerful-blocks' ) }
														value={ hoverToggleIconBackgroundColor }
														onChange={ ( hoverToggleIconBackgroundColor ) => {
															setAttributes( { hoverToggleIconBackgroundColor } );
														} }
													/>
													<ColorPickerControl
														label={ __( 'Color', 'powerful-blocks' ) }
														value={ hoverToggleIconColor }
														onChange={ ( hoverToggleIconColor ) => {
															setAttributes( { hoverToggleIconColor } );
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
							<ResponsiveRangeControl
								label={ __( 'Size', 'powerful-blocks' ) }
								sizeType = {
									{ value: toggleIconSizeUnitType, name: 'toggleIconSizeUnitType' }
								}
								sizeOnDesktop = { { value: toggleIconSize, name: 'toggleIconSize' } }
								sizeOnTablet = { { value: toggleIconSizeTablet, name: 'toggleIconSizeTablet' } }
								sizeOnMobile = { { value: toggleIconSizeMobile, name: 'toggleIconSizeMobile' } }
								min={ 0 }
								max={ 200 }
								setAttributes = { setAttributes }
							/>
							<ResponsiveBoxControl
								label={ __( 'Border Radius', 'powerful-blocks' ) }
								value={ {
									desktop: toggleIconBorderRadius,
									tablet: toggleIconBorderRadiusTablet,
									mobile: toggleIconBorderRadiusMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { toggleIconBorderRadius: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { toggleIconBorderRadiusTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { toggleIconBorderRadiusMobile: value } );
									}
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								value={ {
									desktop: toggleIconPadding,
									tablet: toggleIconPaddingTablet,
									mobile: toggleIconPaddingMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { toggleIconPadding: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { toggleIconPaddingTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { toggleIconPaddingMobile: value } );
									}
								} }
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
