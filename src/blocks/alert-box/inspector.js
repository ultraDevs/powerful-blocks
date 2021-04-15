const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
	SelectControl,
	Button,
	ButtonGroup,
} = wp.components;

import { __ } from '@wordpress/i18n';

import { AlignmentControl, ResponsiveBoxControl, TypographyControl } from '../../components';
const { useState } = wp.element;

import Advanced from '../../helper/advanced';
import classnames from 'classnames';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		abBorderRadius,
		abBorderRadiusTablet,
		abBorderRadiusMobile,
		displayType,
		hideAfterTime,
		abPadding,
		abPaddingTablet,
		abPaddingMobile,

		bottomSpace,
		textAlign,

		titleColor,
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

		contentColor,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLineHeight,
		contentFontSizeType,
		contentFontStyle,
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );

	return (
		<InspectorControls className="pb-innerblocks-alert-box">
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
							<SelectControl
								className = "pb-custom-select-control"
								label={ __( 'Display', 'powerful-blocks' ) }
								value={ displayType }
								options={ [
									{ value: 'alwaysOn', label: 'Always On' },
									{ value: 'dismissable', label: 'Allow To Dismiss' },
									{ value: 'hideAfterTime', label: 'Hide After x Time' },
								] }
								onChange={ ( displayType ) => {
									setAttributes( { displayType } );
								} }
							/>
							{ 'hideAfterTime' === displayType && (
								<RangeControl
									label={ __( 'Close After (ms)', 'powerful-blocks' ) }
									onChange={ ( hideAfterTime ) => {
										setAttributes( { hideAfterTime } );
									} }
									value={ hideAfterTime }
									min={ 0 }
									step={ 0.5 }
									max={ 20 }
								/>
							) }
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
						<PanelBody title={ __( 'Styles', 'powerful-blocks' ) }>
							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ textAlign }
								onChange={ ( textAlign ) => {
									setAttributes( { textAlign } );
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Padding', 'powerful-blocks' ) }
								value={ {
									desktop: abPadding,
									tablet: abPaddingTablet,
									mobile: abPaddingMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { abPadding: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { abPaddingTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { abPaddingMobile: value } );
									}
								} }
							/>
							<ResponsiveBoxControl
								label={ __( 'Border Radius', 'powerful-blocks' ) }
								value={ {
									desktop: abBorderRadius,
									tablet: abBorderRadiusTablet,
									mobile: abBorderRadiusMobile,
								} }
								onChange={ ( value, device ) => {
									if ( 'desktop' === device ) {
										setAttributes( { abBorderRadius: value } );
									}
									if ( 'tablet' === device ) {
										setAttributes( { abBorderRadiusTablet: value } );
									}
									if ( 'mobile' === device ) {
										setAttributes( { abBorderRadiusMobile: value } );
									}
								} }
							/>
							<RangeControl
								label={ __( 'Space After Title', 'powerful-blocks' ) }
								value={ bottomSpace }
								onChange={ ( bottomSpace ) =>
									setAttributes( { bottomSpace } )
								}
								min={ 0 }
								max={ 100 }
							/>
							<TypographyControl
								label = { __( 'Title Typography', 'powerful-blocks' ) }
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

							<TypographyControl
								label = { __( 'Content Typography', 'powerful-blocks' ) }
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
