const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	TextControl,
	TextareaControl,
	__experimentalNumberControl,
	SelectControl,
	ToggleControl,
	RangeControl,
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
		txtAlign,
		mType,
		icon,
		iconColor,
		iconSize,
		iconBGColor,
		mPosition,
		img,
		imgHeightType,
		imgHeight,
		imgHeightTablet,
		imgHeightMobile,
		imgWidthType,
		imgWidth,
		imgWidthTablet,
		imgWidthMobile,
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
		numberBPadding,
		numberBPaddingTablet,
		numberBPaddingMobile,
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
		mValign
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );

	let currentMTab = mType || 'icon';
    const [ mTab, setmTab ] = useState( currentMTab );

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
							title={ __( 'Image / Icon', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<div className="pb-panel-s--tabs">
								<div className="pb-panel-s--tabs__wrapper">
									<div className="pb-panel-s--tab__title">Background Type</div>
									<ButtonGroup>
										<Button
											onClick = { () => {
												setmTab('icon');
												setAttributes({ mType: 'icon' })
											}}
											className = {
												classnames(
													"pb-panel-s--tab",
													'icon' === mTab ? 'pb-ps-tab--active' : '',
												)
											}
										>
											<Dashicon icon='admin-customizer' />
										</Button>
										<Button
											onClick = { () => {
												setmTab('image');
												setAttributes({ mType: 'image' })
											}}
											className = {
												classnames(
													"pb-panel-s--tab",
													'image' === mTab ? 'pb-ps-tab--active' : '',
												)
											}
										>
											<Dashicon icon='format-image' />
										</Button>
									</ButtonGroup>
								</div>
								<div className="pb-panel-s--tabs__controls">
									{ 'icon' === mTab && (
									<>
										<IconPickerControl
											label={ __( 'Select Icon', 'powerful-blocks' ) }
											onChange = { (icon) => {
												setAttributes({ icon })
											}}
											icon = { icon }
										/>
									</>
									) }
									{ 'image' === mTab && (
									<>
										<ImageControl
											i18n={ {
												imageSize: __( 'Image Size', 'powerful-blocks' ),
												uploadImage: __(
													'Choose or Upload an Image',
													'powerful-blocks'
												),
											} }
											value={ img }
											onChange={ ( img ) => {
												setAttributes( { img } );
											} }
											enableImageSizes
										/>
									</>
									) }
								</div>
							</div>
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
							title={ __( 'Digit', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							{/* <__experimentalNumberControl
								className = "pb-custom-number-control"
								label = { __( 'Starting Number', 'powerful-blocks' ) }
								value={ startingNumber }
								onChange={ ( startingNumber ) => {
									startingNumber = validateNumValue( startingNumber);
									setAttributes( { startingNumber } );
								} }
							/>
							<__experimentalNumberControl
								className = "pb-custom-number-control"
								label = { __( 'Final Number', 'powerful-blocks' ) }
								value={ endingNumber }
								onChange={ ( endingNumber ) => {
									endingNumber = validateNumValue( endingNumber);
									setAttributes( { endingNumber } );
								} }
							/> */}
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
							title={ __( 'Image / Icon', 'powerful-blocks' ) }
						>
							{ 'icon' === mType ? (
								<>
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
								</>
							) : (
								<>
									<ResponsiveRangeControl
										label={ __( 'Image Height', 'powerful-blocks' ) }
										sizeType = {
											{ value: imgHeightType, name: 'imgHeightType' }
										}
										sizeOnDesktop = { { value: imgHeight, name: 'imgHeight' } }
										sizeOnTablet = { { value: imgHeightTablet, name: 'imgHeightTablet' } }
										sizeOnMobile = { { value: imgHeightMobile, name: 'imgHeightMobile' } }
										min={ 0 }
										max={ 1000 }
										setAttributes = { setAttributes }
									/>
									<ResponsiveRangeControl
										label={ __( 'Image Width', 'powerful-blocks' ) }
										sizeType = {
											{ value: imgWidthType, name: 'imgWidthType' }
										}
										sizeOnDesktop = { { value: imgWidth, name: 'imgWidth' } }
										sizeOnTablet = { { value: imgWidthTablet, name: 'imgWidthTablet' } }
										sizeOnMobile = { { value: imgWidthMobile, name: 'imgWidthMobile' } }
										min={ 0 }
										max={ 1000 }
										setAttributes = { setAttributes }
									/>
								</>
							) }
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Position', 'powerful-blocks' ) }
								value={ mPosition }
								onChange={ ( mPosition ) => {
									setAttributes( { mPosition } );
								} }
								options={ [
									{ value: 'top', label: 'Top' },
									{ value: 'left', label: 'Left' },
									{ value: 'right', label: 'Right' },
								] }
							/>
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Vertical Align', 'powerful-blocks' ) }
								value={ mValign }
								onChange={ ( mValign ) => {
									setAttributes( { mValign } );
								} }
								options={ [
									{ value: 'flex-start', label: 'Top' },
									{ value: 'center', label: 'Middle' },
									{ value: 'flex-end', label: 'Bottom' },
								] }
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
								min={ -1000 }
								max={ 1000 }
								setAttributes = { setAttributes }
								allowReset = { false }
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
								setAttributes = { setAttributes }
								allowReset = { false }
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
							title={ __( 'Title & Number', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							<ResponsiveBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								value={ {
									desktop: numberBPadding,
									tablet: numberBPaddingTablet,
									mobile: numberBPaddingMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { numberBPadding: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { numberBPaddingTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { numberBPaddingMobile: value } );
									}
								} }
							/>
							<p className="pb-h-title">{ __( 'Title', 'powerful-blocks' ) }</p>
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

							<p className="pb-h-title">{ __( 'Number', 'powerful-blocks' ) }</p>
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
