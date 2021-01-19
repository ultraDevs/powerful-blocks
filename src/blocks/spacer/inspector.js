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
} from '../../components';

import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		sHeightType,
		sHeight,
		sHeightTablet,
		sHeightMobile,
	} = attributes;

	let currentTab = 'style';
	const [ tab, setTab ] = useState( currentTab );


	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<ButtonGroup className="pb-panel-head--tabs__wrapper">
					
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
				
				{ 'style' === tab && (
					<>
						<PanelBody title={ __( 'Space', 'powerful-blocks' ) } initialOpen = { open }>
							<ResponsiveRangeControl
								label={ __( 'Height', 'powerful-blocks' ) }
								sizeType = {
									{ value: sHeightType, name: 'sHeightType' }
								}
								sizeTypes = { [
									{ key: "px", name: __( "px" ) },
									{ key: "em", name: __( "em" ) },
								] }
								sizeOnDesktop = { { value: sHeight, name: 'sHeight' } }
								sizeOnTablet = { { value: sHeightTablet, name: 'sHeightTablet' } }
								sizeOnMobile = { { value: sHeightMobile, name: 'sHeightMobile' } }
								min={ 0 }
								max={ 1000 }
								setAttributes = { setAttributes }
								allowReset = { false }
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
