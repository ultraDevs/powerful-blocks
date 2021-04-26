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

	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs__controls pb-custom-control-styles">
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
			</div>
		</InspectorControls>
	);
};

export default Inspector;
