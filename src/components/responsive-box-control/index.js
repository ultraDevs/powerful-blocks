const { withState, useState } = wp.compose;
const { __experimentalBoxControl, BaseControl, Button, ButtonGroup, Icon } = wp.components;

const { __ } = wp.i18n;

import './editor.scss';

const BaseBoxControl = ( props ) => {
	return (
		<__experimentalBoxControl
			label={ props.label }
			values={ props.value }
			onChange={ props.onChange }
		/>
	);
};

const ResponsiveBoxControl = ( props ) => {

	const device = props.device;

	// const currentValues = props.value;

	// const [ bValues, setValue ] = useState( currentValues );

	return (
		<BaseControl className="pb-responsive-box-control">
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
				<BaseBoxControl
					label={ props.label }
					value={ props.value.desktop }
					onChange={ ( Dvalue ) => {
						props.onChange( Dvalue, device );
					} }
				/>
			) }
			{ 'tablet' === device && (
				<BaseBoxControl
					label={ props.label }
					value={ props.value.tablet }
					onChange={ ( Tvalue ) => {
						props.onChange( Tvalue, device );
					} }
				/>
			) }
			{ 'mobile' === device && (
				<BaseBoxControl
					label={ props.label }
					value={ props.value.mobile }
					onChange={ ( Mvalue ) => {
						props.onChange( Mvalue, device );
					} }
				/>
			) }
		</BaseControl>
	);
};

export default withState( {
	device: 'desktop',
} )( ResponsiveBoxControl );
