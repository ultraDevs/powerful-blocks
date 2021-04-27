const { InspectorControls } = wp.blockEditor;


import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<div className="pb-panel-head--tabs__controls pb-custom-control-styles">
					<Advanced { ...{ attributes, setAttributes } } />
				</div>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
