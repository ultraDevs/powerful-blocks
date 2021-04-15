const { InspectorControls } = wp.blockEditor;

const { PanelBody, RangeControl, Button, ButtonGroup } = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';
import Advanced from '../../helper/advanced';

import { ResponsiveRangeControl, AlignmentControl, ColorPickerControl } from '../../components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		stars,
		rating,
		iconAlign,
		color,
		sizeType,
		size,
		sizeTablet,
		sizeMobile,
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
				<div className="pb-panel-head--tabs__controls pb-custom-control-styles">
				{ 'content' === tab && (
					<>
						<PanelBody title={ __( 'Settings', 'powerful-blocks' ) } initialOpen = { open }>
							<AlignmentControl
								label={ __( 'Alignment', 'powerful-blocks' ) }
								type="text"
								value={ iconAlign }
								onChange={ ( iconAlign ) => {
									setAttributes( { iconAlign } );
								} }
							/>
							<RangeControl
								label={ __( 'Rating Scale', 'powerful-blocks' ) }
								value={ stars }
								min={ 5 }
								max={ 10 }
								step={ 1 }
								onChange={ ( stars ) => setAttributes( { stars } ) }
							/>
							<RangeControl
								label={ __( 'Rating', 'powerful-blocks' ) }
								value={ rating }
								min={ 0 }
								max={ stars }
								step={ 0.5 }
								onChange={ ( rating ) => setAttributes( { rating } ) }
							/>
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
						<PanelBody title={ __( 'Icon', 'powerful-blocks' ) }>
							<ColorPickerControl
								label={ __( 'Color', 'powerful-blocks' ) }
								value={ color }
								onChange={ ( color ) => {
									setAttributes( { color } );
								} }
							/>

							<ResponsiveRangeControl
								label={ __( 'Size', 'powerful-blocks' ) }
								sizeType = {
									{ value: sizeType, name: 'sizeType' }
								}
								sizeOnDesktop = { { value: size, name: 'size' } }
								sizeOnTablet = { { value: sizeTablet, name: 'sizeTablet' } }
								sizeOnMobile = { { value: sizeMobile, name: 'sizeMobile' } }
								min={ 0 }
								max={ 100 }
								setAttributes = { setAttributes }
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
