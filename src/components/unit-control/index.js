const { withState } = wp.compose;
const { RangeControl, BaseControl, Button, ButtonGroup, Icon } = wp.components;

const { __ } = wp.i18n;
import map from "lodash/map"

import './editor.scss';

const UnitControl = ( props ) => {

    const sizeType = props.sizeType;

    // Size Types.
	let sizeTypes;
	if ( props.sizeTypes ) {
		sizeTypes = props.sizeTypes;
	} else {
		sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "%", name: __( "%" ) },
			{ key: "em", name: __( "em" ) },
		];
	}

	return (
		<ButtonGroup className="pb-control-size--types">
			{ map( sizeTypes, ( { key, name } ) => (
				<Button 
					isSmall
					key={ key}
					isPrimary={ sizeType.value === key }
					aria-pressed={ sizeType.value === key }
					onClick={ () => props.onClick( key ) }
				>
				{ name }
				</Button>
			))}
		</ButtonGroup>
	);
}
export default UnitControl;
