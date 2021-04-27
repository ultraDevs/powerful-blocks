import React, { Component } from 'react';
const { withState, useState } = wp.compose;

const { BaseControl, Button, ButtonGroup, Icon } = wp.components;

const { __ } = wp.i18n;

import './editor.scss';

class DimensionsControl extends Component {

	label = this.props.label;
	value = this.props.value;
	device = 'md';

	side = [ 'top', 'right', 'bottom', 'left' ];

	state = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		device: this.device,
		isLinked: false,
	}

	// state = {
	// 	top: this.value[this.device].top || 0,
	// 	right: this.value[this.device].right || 0,
	// 	bottom: this.value[this.device].bottom || 0,
	// 	left: this.value[this.device].left || 0,
	// 	isLinked: false,
	// };



	getValue = ( s ) => {
		// console.log( this.state.top );
		let value = this.props.value;
		const device = this.state.device;
		return Object.keys( value ).length > 0 ? value[device][s] ? value[device][s] : "" : "";
		// return this.state[s];
		// return this.value[this.device][s];
	}

	// device = this.state.device || 'sm';

	defineProperty = ( object, property, value ) => {
		return (
			property in object
				? Object.defineProperty( object, property, {
					value: value,
					enumerable: !0,
					configurable: !0,
					writable: !0,
				})
				: ( object[property] = value ),
				object
			);
	}


	onInputChange = ( value, s ) => {
		let newValue = this.defineProperty( {}, s, parseInt( value ) );
		newValue = Object.assign( {}, this.value[this.state.device], newValue );
		let p = Object.assign( {}, this.value, this.defineProperty( {}, this.state.device, newValue ) );
		// console.log(p);
		this.setState( { [s]: parseInt( value ) || 0 }, () => {
			
		} );
		this.props.onChange( p );

	}

	onDeviceChange = ( device ) => {
		this.setState( { device: device });
	}

	onLinkedButtonClick = () => {
		this.setState( { isLinked: !this.state.isLinked } );
	}


	

	render() {
		// console.log(device);
		const { isLinked, device } = this.state;

		return(
			<>
				<div className="pb-dimensions-control">
					<div className="pb-dimension-c-header">
						<label for="input">{ this.label }</label>
						<span className="pb-device-list">
							<ButtonGroup>
								<Button
									isPrimary={ 'md' === device ? true : false }
									onClick ={ () => this.onDeviceChange('md') }
								>
									<Icon icon='desktop'/>
								</Button>
								<Button
									isPrimary={ 'sm' === device ? true : false }
									onClick ={ () => this.onDeviceChange('sm') }
								>
									<Icon icon='tablet'/>
								</Button>
								<Button
									isPrimary={ 'xs' === device ? true : false }
									onClick ={ () => this.onDeviceChange('xs') }
								>
									<Icon icon='smartphone' />
								</Button>
							</ButtonGroup>
						</span>
					</div>
					<div className="pb-dimension-input-group">
						{
							this.side.map( ( s, k ) => {
								return (
									<>
										<span>
											<input 
												type="number" 
												min="0" 
												max="100" 
												value = { this.getValue( s ) }
												onChange = { ( n ) => {
													this.onInputChange( n.target.value, s )
												} }
											/>
											<span>{s}</span>
										</span>
									</>
								);
							})
						}
						<span>
							<button
								className={`linked-btn components-button is-button dashicons dashicons-${
									this.state.isLinked ? "admin-links is-primary" : "editor-unlink is-default"
								}`}
								onClick={ this.onLinkedButtonClick }
							/>
						</span>
					</div>
				</div>
			</>
		);
	}
};

export default withState( {
	device: 'md',
} )( DimensionsControl );

// export default DimensionsControl;
