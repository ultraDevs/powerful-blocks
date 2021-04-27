const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	BaseControl,
	Button,
	ButtonGroup,
	TabPanel
} = wp.components;
const { __ } = wp.i18n;

import {
	ResponsiveRangeControl,
	ColorPickerControl,
	AlignmentControl,
	TypographyControl,
} from '../../components';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		activeItem,
		primaryLabel,
		primarySwitchBGColor,
		secondaryLabel,
		secondarySwitchBGColor,
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
		switchSize,
		switchSizeTablet,
		switchSizeMobile,
		switchSizeType,
		labelPosition,
	} = attributes;


	return (
		<InspectorControls>
			<div className="pb-custom-control-styles">
				<PanelBody title={ __( 'Settings', 'powerful-blocks' ) }>
					<SelectControl
						className = "pb-custom-select-control"
						label={ __( 'Label Position', 'powerful-blocks' ) }
						value={ labelPosition }
						onChange={ ( labelPosition ) => {
							setAttributes( { labelPosition } ) }
						}
						options={ [
							{ value: "flex-start", label: __( "Top", "powerful-blocks" ) },
							{ value: "center", label: __( "Middle", "powerful-blocks"  ) },
							{ value: "flex-end", label: __( "Bottom", "powerful-blocks"  ) },
						] }
					/>
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
				<PanelBody
					title={ __( 'Switch', 'powerful-blocks' ) }
					initialOpen={ false }
				>
					<TabPanel className="pb-panel-inspect--tabs" activeClass="pb-pi-tab--active"
						tabs={ [
							{
								name: "primary",
								title: __( 'Primary', 'powerful-blocks' ),
								className: "pb-panel-inspect--tab",
							},
							{
								name: "secondary",
								title: __( 'Secondary', 'powerful-blocks' ),
								className: "pb-panel-inspect--tab",
							},
						] }>
						{
							( tab ) => {
								let tabout

								if ( "primary" === tab.name ) {
									tabout = (
										<>
											<ColorPickerControl
												label={ __( 'Background Color', 'powerful-blocks' ) }
												value={ primarySwitchBGColor }
												onChange={ ( primarySwitchBGColor ) => {
													setAttributes( { primarySwitchBGColor } );
												} }
											/>
										</>
									)
								} else if ( "secondary" === tab.name ) {
									tabout = (
										<>
											<ColorPickerControl
												label={ __( 'Background Color', 'powerful-blocks' ) }
												value={ secondarySwitchBGColor }
												onChange={ ( secondarySwitchBGColor ) => {
													setAttributes( { secondarySwitchBGColor } );
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
							{ value: switchSizeType, name: 'switchSizeType' }
						}
						sizeOnDesktop = { { value: switchSize, name: 'switchSize' } }
						sizeOnTablet = { { value: switchSizeTablet.value, name: 'switchSizeTablet' } }
						sizeOnMobile = { { value: switchSizeMobile.value, name: 'switchSizeMobile' } }
						min={ 0 }
						max={ 50 }
						setAttributes = { setAttributes }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Label', 'powerful-blocks' ) }
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
												value={ labelColor }
												onChange={ ( labelColor ) => {
													setAttributes( { labelColor } );
												} }
											/>
										</>
									)
								} else if ( "hover" === tab.name ) {
									tabout = (
										<>
											<ColorPickerControl
												label={ __( 'Color', 'powerful-blocks' ) }
												value={ hoverLabelColor }
												onChange={ ( hoverLabelColor ) => {
													setAttributes( { hoverLabelColor } );
												} }
											/>
										</>
									)
								} else if ( "active" === tab.name ) {
									tabout = (
										<>
											<ColorPickerControl
												label={ __( 'Color', 'powerful-blocks' ) }
												value={ activeLabelColor }
												onChange={ ( activeLabelColor ) => {
													setAttributes( { activeLabelColor } );
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
					
					<TypographyControl
						label = { __( 'Typography', 'powerful-blocks' ) }
						fontFamily = { { value: labelFontFamily, name: 'labelFontFamily' } }
						sizeType = {
							{ value: labelFontSizeType, name: 'labelFontSizeType' }
						}
						fontSize = { { value: labelFontSize, name: 'labelFontSize' } }
						fontSizeTablet = { { value: labelFontSizeTablet, name: 'labelFontSizeTablet' } }
						fontSizeMobile = { { value: labelFontSizeMobile, name: 'labelFontSizeMobile' } }
						fontStyle = { { value: labelFontStyle, name: 'labelFontStyle' } }
						fontWeight = { { value: labelFontWeight, name: 'labelFontWeight' } }
						lineHeight = { { value: labelLineHeight, name: 'labelLineHeight' } }
						letterSpacing = { { value: labelLetterSpacing, name: 'labelLetterSpacing' } }
						textTransform = { { value: labelTextTransform, name: 'labelTextTransform' } }
						textDecoration = { { value: labelTextDecoration, name: 'labelTextDecoration' } }
						setAttributes = { props.setAttributes }
					/>
				</PanelBody>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
