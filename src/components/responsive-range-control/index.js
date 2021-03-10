const { withState } = wp.compose;
const { RangeControl, BaseControl, Button, ButtonGroup, Icon } = wp.components;

const { __ } = wp.i18n;

import './editor.scss';
import map from "lodash/map"

const BaseRangeControl = ( props ) => {
	return (
		<RangeControl
			value={ props.value }
			min={ props.min ? props.min : 1 }
			max={ props.max ? props.max : 200 }
			allowReset = { 'undefined' !== typeof props.allowReset ? props.allowReset : true }
			onChange={ props.onChange }
		/>
	);
};

const ResponsiveRangeControl = ( props ) => {

	const device = props.device;
	const sizeType = props.sizeType;
	const sizeOnDesktop = props.sizeOnDesktop;
	const sizeOnTablet = props.sizeOnTablet;
	const sizeOnMobile = props.sizeOnMobile;
	const setAttributes = props.setAttributes;


	// Size Types.
	let sizeTypes;
	if ( 'sizeTypes' in props ) {
		sizeTypes = props.sizeTypes;
	} else {
		sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "%", name: __( "%" ) },
			{ key: "em", name: __( "em" ) },
		];
	}

	const sizeTypesControl = (
		<ButtonGroup className="pb-control-size--types">
			{ map( sizeTypes, ( { key, name } ) => (
				<Button 
					isSmall
					key={ key}
					isPrimary={ sizeType.value === key }
					aria-pressed={ sizeType.value === key }
					onClick={ () => props.setAttributes( { [sizeType.name]: key } ) }
				>
				{ name }
				</Button>
			))}
		</ButtonGroup>
	);

	return (
			<BaseControl className="pb-responsive-range-control pb-panel-s--tabs">
				<div className="pb-responsive-range-control--wrapper">
					<div className="pb-panel-s--tab__title">{ props.label }</div>
					{ sizeTypesControl }
					<ButtonGroup className="pb-responsive-range-control--devices">
						<Button
							isPrimary={ 'desktop' === device ? true : false }
							onClick ={ () => props.setState( { device: 'desktop' } ) }
						>
							<Icon icon='desktop'/>
						</Button>
						<Button
							isPrimary={ 'tablet' === device ? true : false }
							onClick ={ () => props.setState( { device: 'tablet' } ) }
						>
							<Icon icon='tablet'/>
						</Button>
						<Button
							isPrimary={ 'mobile' === device ? true : false }
							onClick ={ () => props.setState( { device: 'mobile' } ) }
						>
							<Icon icon='smartphone' />
						</Button>
					</ButtonGroup>
				</div>

				{ 'desktop' === device && (
					<BaseRangeControl
						value={ sizeOnDesktop.value }
						onChange={ ( Dvalue ) => {
							setAttributes( { [sizeOnDesktop.name]: Dvalue });
						} }
						min = { props.min }
						max = { props.max }
						allowReset = { props.allowReset }
					/>
				) }
				{ 'tablet' === device && (
					<BaseRangeControl
						value={ sizeOnTablet.value }
						onChange={ ( sizeOnTabletV ) => {
							setAttributes( { [sizeOnTablet.name] : sizeOnTabletV });
						} }
						min = { props.min }
						max = { props.max }
						allowReset = { props.allowReset }
					/>
				) }
				{ 'mobile' === device && (
					<BaseRangeControl
						value={ sizeOnMobile.value }
						onChange={ ( sizeOnMobileV ) => {
							setAttributes( { [sizeOnMobile.name] : sizeOnMobileV });
						} }
						min = { props.min }
						max = { props.max }
						allowReset = { props.allowReset }
					/>
				) }
		</BaseControl>
	);
};

export default withState( {
	device: 'desktop',
} )( ResponsiveRangeControl );
