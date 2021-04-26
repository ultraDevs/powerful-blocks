const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	Button,
	ButtonGroup,
	TabPanel
} = wp.components;
const { __ } = wp.i18n;

import classnames from 'classnames';


import {
	ResponsiveRangeControl,
} from '../../components';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		sHeightType,
		sHeight,
		sHeightTablet,
		sHeightMobile,
	} = attributes;

	return (
		<InspectorControls>
			<div className="pb-custom-control-styles">
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
						max={ 100 }
						setAttributes = { setAttributes }
						allowReset = { false }
					/>
				</PanelBody>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
