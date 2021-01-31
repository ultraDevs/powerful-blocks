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
		tabsType,
		tabsAlign,
		tabsVAlign,

		contentBackgroundColor,
		hoverContentBackgroundColor,
		
		contentPadding,
		contentPaddingTablet,
		contentPaddingMobile,
		
		contentMargin,
		contentMarginTablet,
		contentMarginMobile,
		contentBorderRadius,
		contentBorderRadiusTablet,
		contentBorderRadiusMobile,

		titleColor,
		hoverTitleColor,
		activeTitleColor,
		titleBGColor,
		hoverTitleBGColor,
		activeTitleBGColor,

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
								label={ __( 'Tabs Alignment', 'powerful-blocks' ) }
								type="flex"
								value={ tabsAlign }
								onChange={ ( tabsAlign ) => {
									setAttributes( { tabsAlign } );
								} }
							/>
							<BaseControl
								label={ __( 'Type', 'powerful-blocks' ) }
								className="pb-control--btn-group"
							>
								<ButtonGroup className="pb-control--btn-group__w">
									<Button
										isPrimary={ 'tabs' === tabsType }
										onClick={ () => {
											setAttributes({ tabsType: 'tabs' })
										} }
									>Tabs</Button>
									<Button
										isPrimary={ 'pills' === tabsType }
										onClick={ () => {
											setAttributes({ tabsType: 'pills' })
										} }
									>Pills</Button>
								</ButtonGroup>
							</BaseControl>
							<BaseControl
								label={ __( 'Tabs', 'powerful-blocks' ) }
								className="pb-control--btn-group"
							>
								<ButtonGroup className="pb-control--btn-group__w">
									<Button
										isPrimary={ 'horizontal' === tabsVAlign }
										onClick={ () => {
											setAttributes({ tabsVAlign: 'horizontal' })
										} }
									>Horizontal</Button>
									<Button
										isPrimary={ 'vertical' === tabsVAlign }
										onClick={ () => {
											setAttributes({ tabsVAlign: 'vertical' })
										} }
									>Vertical</Button>
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
