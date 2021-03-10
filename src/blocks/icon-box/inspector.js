const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	TextControl,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	TabPanel,
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';

import { pType, UpgradePlanNotice } from '../../helper/lic';


import {
	ResponsiveRangeControl,
	ResponsiveBoxControl,
	ColorPickerControl,
	AlignmentControl,
	TypographyControl,
	BorderControl,
	ShadowControl,
	IconPickerControl,
} from '../../components';

import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		txtAlign,
		icon,
		iconColor,
		iconSize,
		iconBGColor,
		
		mPadding,
		mPaddingTablet,
		mPaddingMobile,
		mMargin,
		mMarginTablet,
		mMarginMobile,
		mBorderStyle,
		mBorderSize,
		mBorderColor,
		hoverMBorderStyle,
		hoverMBorderSize,
		hoverMBorderColor,
		mBorderRadius,
		mBorderRadiusTablet,
		mBorderRadiusMobile,
		mOffsetType,
		mOffsetTop,
		mOffsetTopTablet,
		mOffsetTopMobile,
		mOffsetLeft,
		mOffsetLeftTablet,
		mOffsetLeftMobile,
		mShadowColor,
		mShadowHOffset,
		mShadowVOffset,
		mShadowBlur,
		mShadowSpread,
		mShadowType,
		hoverMShadowColor,
		hoverMShadowHOffset,
		hoverMShadowVOffset,
		hoverMShadowBlur,
		hoverMShadowSpread,
		hoverMShadowType,
		contentBPadding,
		contentBPaddingTablet,
		contentBPaddingMobile,
		title,
		titleColor,
		titleMargin,
		titleMarginTablet,
		titleMarginMobile,
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


		badgeText,
		badgeBackgroundColor,
		badgePositionV,
		badgePositionH,
		badgeColor,
		badgePadding,
		badgePaddingTablet,
		badgePaddingMobile,
		badgeBorderRadius,
		badgeBorderRadiusTablet,
		badgeBorderRadiusMobile,
		badgeFontSize,
		badgeFontSizeTablet,
		badgeFontSizeMobile,
		badgeFontFamily,
		badgeFontSizeType,
		badgeFontStyle,
		badgeFontWeight,
		badgeTextTransform,
		badgeTextDecoration,
		badgeLetterSpacing,
		badgeLineHeight,
		
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
							title={ __( 'Icon', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<IconPickerControl
								label={ __( 'Select Icon', 'powerful-blocks' ) }
								onChange = { (icon) => {
									setAttributes({ icon })
								}}
								icon = { icon }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<TextControl
								label={ __( 'Title', 'powerful-blocks' ) }
								value={ title }
								onChange={ ( title ) => {
									setAttributes( { title } );
								} }
							/>

						</PanelBody>

						<PanelBody
							title={ __( 'Badge', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							{ 
								'Free' === pType ? (
									<UpgradePlanNotice />
								) : (
									<TextControl
										label={ __( 'Badge Text', 'powerful-blocks' ) }
										value={ badgeText }
										onChange={ ( badgeText ) => {
											setAttributes( { badgeText } );
										} }
									/>
								)
							}
						</PanelBody>
						
					</>
				) }
				{ 'style' === tab && (
					<>
						<PanelBody
							title={ __( 'Icon', 'powerful-blocks' ) }
						>
							<ColorPickerControl
								label={ __( 'Background Color', 'powerful-blocks' ) }
								value={ iconBGColor }
								onChange={ ( iconBGColor ) => {
									setAttributes( { iconBGColor } );
								} }
							/>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ iconColor }
								onChange={ ( iconColor ) => {
									setAttributes( { iconColor } );
								} }
							/>
							<RangeControl
								label={ __(
									'Size',
									'powerful-blocks'
								) }
								value={ iconSize }
								onChange={ ( iconSize ) =>
									setAttributes( { iconSize } )
								}
								min={ 0 }
								step={ 1 }
								max={ 200 }
							/>
							
							<p className="pb-h-title">{ __( 'Offset', 'powerful-blocks' ) }</p>
							<ResponsiveRangeControl
								label={ __( 'Top', 'powerful-blocks' ) }
								sizeType = {
									{ value: mOffsetType, name: 'mOffsetType' }
								}
								sizeOnDesktop = { { value: mOffsetTop, name: 'mOffsetTop' } }
								sizeOnTablet = { { value: mOffsetTopTablet, name: 'mOffsetTopTablet' } }
								sizeOnMobile = { { value: mOffsetTopMobile, name: 'mOffsetTopMobile' } }
								min={ -100 }
								max={ 100 }
								allowReset = { false }
								setAttributes = { setAttributes }
							/>
							<ResponsiveRangeControl
								label={ __( 'Left', 'powerful-blocks' ) }
								sizeType = {
									{ value: mOffsetType, name: 'mOffsetType' }
								}
								sizeOnDesktop = { { value: mOffsetLeft, name: 'mOffsetLeft' } }
								sizeOnTablet = { { value: mOffsetLeftTablet, name: 'mOffsetLeftTablet' } }
								sizeOnMobile = { { value: mOffsetLeftMobile, name: 'mOffsetLeftMobile' } }
								min={ -1000 }
								max={ 1000 }
								allowReset = { false }
								setAttributes = { setAttributes }
							/>
							<hr className="pb-hr" />
							
							<ResponsiveBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								value={ {
									desktop: mPadding,
									tablet: mPaddingTablet,
									mobile: mPaddingMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { mPadding: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { mPaddingTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { mPaddingMobile: value } );
									}
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Margin', 'powerful-blocks' ) }
								value={ {
									desktop: mMargin,
									tablet: mMarginTablet,
									mobile: mMarginMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { mMargin: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { mMarginTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { mMarginMobile: value } );
									}
								} }
							/>
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
										let tabout;

										if ( "normal" === tab.name ) {
											tabout = (
												<>
													<BorderControl
														label = ''
														borderStyle = { { value: mBorderStyle, name: 'mBorderStyle' } }
														borderSize = { { value: mBorderSize, name: 'mBorderSize' } }
														borderColor = { { value: mBorderColor, name: 'mBorderColor' } }
														setAttributes = { setAttributes }
													/>
													<ShadowControl 
														label = { __( 'Box Shadow', 'powerful-blocks' ) }
														shadowColor = { { value: mShadowColor, name: 'mShadowColor' } }
														shadowHOffset = { { value: mShadowHOffset, name: 'mShadowHOffset' } }
														shadowVOffset = { { value: mShadowVOffset, name: 'mShadowVOffset' } }
														shadowBlur = { { value: mShadowBlur, name: 'mShadowBlur' } }
														shadowSpread = { { value: mShadowSpread, name: 'mShadowSpread' } }
														shadowType = { { value: mShadowType, name: 'mShadowType' } }
														setAttributes = { setAttributes }
													/>
												</>
											)
										} else if ( "hover" === tab.name ) {
											tabout = (
												<>
													<BorderControl
														label = ''
														borderStyle = { { value: hoverMBorderStyle, name: 'hoverMBorderStyle' } }
														borderSize = { { value: hoverMBorderSize, name: 'hoverMBorderSize' } }
														borderColor = { { value: hoverMBorderColor, name: 'hoverMBorderColor' } }
														setAttributes = { setAttributes }
													/>
													<ShadowControl 
														label = { __( 'Box Shadow', 'powerful-blocks' ) }
														shadowColor = { { value: hoverMShadowColor, name: 'hoverMShadowColor' } }
														shadowHOffset = { { value: hoverMShadowHOffset, name: 'hoverMShadowHOffset' } }
														shadowVOffset = { { value: hoverMShadowVOffset, name: 'hoverMShadowVOffset' } }
														shadowBlur = { { value: hoverMShadowBlur, name: 'hoverMShadowBlur' } }
														shadowSpread = { { value: hoverMShadowSpread, name: 'hoverMShadowSpread' } }
														shadowType = { { value: hoverMShadowType, name: 'hoverMShadowType' } }
														setAttributes = { setAttributes }
													/>
												</>
											)
										} else {
											tabout = (
												<>
													<p>...</p>
												</>
											)
										}

										return <div className="pb-panel-inspect--tabs__controls">{ tabout }</div>
									}
								}
							</TabPanel>
							
							<hr className="pb-hr" />
							<ResponsiveBoxControl
								label={ __( 'Border Radius', 'powerful-blocks' ) }
								value={ {
									desktop: mBorderRadius,
									tablet: mBorderRadiusTablet,
									mobile: mBorderRadiusMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { mBorderRadius: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { mBorderRadiusTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { mBorderRadiusMobile: value } );
									}
								} }
							/>
							
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ResponsiveBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								value={ {
									desktop: contentBPadding,
									tablet: contentBPaddingTablet,
									mobile: contentBPaddingMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { contentBPadding: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { contentBPaddingTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { contentBPaddingMobile: value } );
									}
								} }
							/>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ titleColor }
								onChange={ ( titleColor ) => {
									setAttributes( { titleColor } );
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
						<PanelBody
							title={ __( 'Badge', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							{ 
								'Free' === pType ? (
									<UpgradePlanNotice />
								) : (
									<>
										<ColorPickerControl
											label={ __( 'Background Color', 'powerful-blocks' ) }
											value={ badgeBackgroundColor }
											onChange={ ( badgeBackgroundColor ) => {
												setAttributes( { badgeBackgroundColor } );
											} }
										/>
										<ColorPickerControl
											label={ __( 'Color', 'powerful-blocks' ) }
											value={ badgeColor }
											onChange={ ( badgeColor ) => {
												setAttributes( { badgeColor } );
											} }
										/>
										<SelectControl
											className = "pb-custom-select-control"
											label={ __( 'Vertical Align', 'powerful-blocks' ) }
											value={ badgePositionV }
											onChange={ ( badgePositionV ) => {
												setAttributes( { badgePositionV } );
											} }
											options={ [
												{ value: 'top', label: 'Top' },
												{ value: 'bottom', label: 'Bottom' },
											] }
										/>
										<SelectControl
											className = "pb-custom-select-control"
											label={ __( 'Horizontal Align', 'powerful-blocks' ) }
											value={ badgePositionH }
											onChange={ ( badgePositionH ) => {
												setAttributes( { badgePositionH } );
											} }
											options={ [
												{ value: 'left', label: 'Left' },
												{ value: 'right', label: 'Right' },
											] }
										/>
										<ResponsiveBoxControl
											label={ __( 'Padding', 'powerful-blocks' ) }
											value={ {
												desktop: badgePadding,
												tablet: badgePaddingTablet,
												mobile: badgePaddingMobile,
											} }
											onChange={ ( value, device ) => {
												if ( 'desktop' === device ) {
													setAttributes( { badgePadding: value } );
												}
												if ( 'tablet' === device ) {
													setAttributes( { badgePaddingTablet: value } );
												}
												if ( 'mobile' === device ) {
													setAttributes( { badgePaddingMobile: value } );
												}
											} }
										/>
										<TypographyControl
											label = { __( 'Typography', 'powerful-blocks' ) }
											fontFamily = { { value: badgeFontFamily, name: 'badgeFontFamily' } }
											sizeType = {
												{ value: badgeFontSizeType, name: 'badgeFontSizeType' }
											}
											fontSize = { { value: badgeFontSize, name: 'badgeFontSize' } }
											fontSizeTablet = { { value: badgeFontSizeTablet, name: 'badgeFontSizeTablet' } }
											fontSizeMobile = { { value: badgeFontSizeMobile, name: 'badgeFontSizeMobile' } }
											fontStyle = { { value: badgeFontStyle, name: 'badgeFontStyle' } }
											fontWeight = { { value: badgeFontWeight, name: 'badgeFontWeight' } }
											lineHeight = { { value: badgeLineHeight, name: 'badgeLineHeight' } }
											letterSpacing = { { value: badgeLetterSpacing, name: 'badgeLetterSpacing' } }
											textTransform = { { value: badgeTextTransform, name: 'badgeTextTransform' } }
											textDecoration = { { value: badgeTextDecoration, name: 'badgeTextDecoration' } }
											setAttributes = { props.setAttributes }
										/>
										<ResponsiveBoxControl
											label={ __( 'Border Radius', 'powerful-blocks' ) }
											value={ {
												desktop: badgeBorderRadius,
												tablet: badgeBorderRadiusTablet,
												mobile: badgeBorderRadiusMobile,
											} }
											onChange={ ( value, device ) => {
												if ( 'desktop' === device ) {
													setAttributes( { badgeBorderRadius: value } );
												}
												if ( 'tablet' === device ) {
													setAttributes( { badgeBorderRadiusTablet: value } );
												}
												if ( 'mobile' === device ) {
													setAttributes( { badgeBorderRadiusMobile: value } );
												}
											} }
										/>
									</>
								)
							}
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
