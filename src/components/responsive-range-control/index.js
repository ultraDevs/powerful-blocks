const { withState } = wp.compose;
const { RangeControl, BaseControl, Button, ButtonGroup, Icon } = wp.components;

// import { desktop, tablet, smartphone } from '@wordpress/icons';

const { __ } = wp.i18n;

import './editor.scss';

const BaseRangeControl = ( props ) => {
	return (
		<RangeControl
			value={ props.value }
			min={ props.min ? props.min : 1 }
			max={ props.max ? props.max : 100 }
			allowReset
			onChange={ props.onChange }
		/>
	);
};

const ResponsiveRangeControl = ( props ) => {

	const device = props.device;
	return (
		<BaseControl label={ props.label } className="pb-block-control__responsive-range-control">
			<ButtonGroup>
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

			{ 'desktop' === device && (
				<BaseRangeControl
					value={ props.value.desktop }
					onChange={ ( value ) => {
						props.onChange( value, device );
					} }
					min={ props.min }
					max={ props.max }
				/>
			) }
			{ 'tablet' === device && (
				<BaseRangeControl
					value={ props.value.tablet }
					onChange={ ( value ) => {
						props.onChange( value, device );
					} }
					min={ props.min }
					max={ props.max }
				/>
			) }
			{ 'mobile' === device && (
				<BaseRangeControl
					value={ props.value.mobile }
					onChange={ ( value ) => {
						props.onChange( value, device );
					} }
					min={ props.min }
					max={ props.max }
				/>
			) }
		</BaseControl>
	);
};

export default withState( {
	device: 'desktop',
} )( ResponsiveRangeControl );
