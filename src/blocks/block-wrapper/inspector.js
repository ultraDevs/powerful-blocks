const { InspectorControls } = wp.blockEditor;


import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<Advanced { ...{ attributes, setAttributes } } />
			</div>
		</InspectorControls>
	);
};

export default Inspector;
