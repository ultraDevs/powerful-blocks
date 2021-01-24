const { __ } = wp.i18n;
const { __experimentalPanelColorGradientSettings } = wp.blockEditor;
import './editor.scss';

const GradientControl = ( props ) => {
    
    const gradientValue = props.gradientValue;
    
    const onGradientChange = value => {
        props.onChange ( { value });
    };

	return (
		<__experimentalPanelColorGradientSettings
            className="pb-block-control__gradient-control"
			initialOpen={true}
			settings={[
				{
					label: __( '' ),
					gradientValue,
					onGradientChange
				}
			]}
		/>
	);
}

export default GradientControl;
