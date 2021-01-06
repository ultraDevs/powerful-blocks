import hexToRgba from "../../helper/hexToRgba";
const { __ } = wp.i18n;
const { __experimentalPanelColorGradientSettings } = wp.blockEditor;
import './editor.scss';

const GradientControl = ( props ) => {
    
    const gradientValue = props.gradientValue;
    const gradientAngle = props.gradientAngle;
    const gradientColor1 = props.gradientColor1;
    const gradientColor2 = props.gradientColor2;
    const gradientLoc1 = props.gradientLoc1;
    const gradientLoc2 = props.gradientLoc2;
    const gradientPosition = props.gradientPosition;
    const gradientType = props.gradientType || 'linear';
    const setAttributes = props.setAttributes;
    
	if ( '' === gradientValue ) {
        const rgb_gradientColor1 = hexToRgba( gradientColor1 );
		const rgb_gradientColor2 = hexToRgba( gradientColor2 );
        
		if ( "linear" === gradientType ) {
			var value = `linear-gradient(${gradientAngle}deg,${rgb_gradientColor1} ${gradientLoc1}%, ${rgb_gradientColor2} ${gradientLoc2}%)`;            
			setAttributes({ gradientValue: value });
		} else {
            var value = `radial-gradient(at ${ gradientPosition }, ${rgb_gradientColor1} ${gradientLoc1}%, ${rgb_gradientColor2} ${gradientLoc2}%)`;
			setAttributes({ gradientValue: value });
		}
	}
    
    const onGradientChange = value => {        
        // setAttributes({ value });
        props.onChange ( { value });
        setAttributes({ gradientAngle: "" ,gradientColor1: "",gradientColor2: "",gradientLoc1: "",gradientLoc2: "",});
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
