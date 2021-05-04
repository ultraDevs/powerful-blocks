import React, { Component } from 'react';

import './editor.scss';
import UnitControl from '../unit-control';

class PBBoxControl extends Component {

	label = this.props.label;
	value = this.props.value;
	min = this.props.min;
	max = this.props.max;
	sizeType = this.props.sizeType || 'px';
	sizeTypes = this.props.sizeTypes;

	state = {
		top: this.value.top || 0,
		right: this.value.right || 0,
		bottom: this.value.bottom || 0,
		left: this.value.left || 0,
		isLinked: false,
	}

	onInputChange = ( e, name ) => {
		let {
			top,
			right,
			bottom,
			left,
			isLinked
		} = this.state;

		let {
			value
		} = e.target;

		if ( isLinked ) {
			top = right = bottom = left = parseInt( value ) || 0;
			this.setState({ top, right, bottom, left }, () => {
				const { top, right, bottom, left } = this.state;
				this.props.onChange({ top, right, bottom, left });
			});
		} else {
			this.setState({ [name]: parseInt(value) || 0 }, () => {
				const { top, right, bottom, left } = this.state;
				this.props.onChange({ top, right, bottom, left });
			});
		}
	}

	onLinkedButtonClick = () => {
		this.setState( { isLinked: !this.state.isLinked } );
	}

	render() {
		const {
			top,
			right,
			bottom,
			left,
			isLinked
		} = this.state;

		return(
			<>
				<div className="pb-box-control">
					<div className="pb-box-c-header">
						<label for="input">{ this.label }</label>
						<UnitControl
							sizeType={ this.sizeType }
							sizeTypes={ this.sizeTypes }
							onClick={
								( newType ) => this.props.onUnitTypeChange( newType )
							}
						/>
					</div>
					<div className="pb-box-input-group">
						<span>
							<input 
								type="number"
								min={ this.min }
								max={ this.max }
								value = { top }
								onChange = { ( e ) => {
									this.onInputChange( e, 'top' )
								} }
							/>
							<span>Top</span>
						</span>
						<span>
							<input 
								type="number"
								min={ this.min }
								max={ this.max }
								value = { right }
								onChange = { ( e ) => {
									this.onInputChange( e, 'right' )
								} }
							/>
							<span>Right</span>
						</span>
						<span>
							<input 
								type="number"
								min={ this.min }
								max={ this.max }
								value = { bottom }
								onChange = { ( e ) => {
									this.onInputChange( e, 'bottom' )
								} }
							/>
							<span>Bottom</span>
						</span>
						<span>
							<input 
								type="number"
								min={ this.min }
								max={ this.max }
								value = { left }
								onChange = { ( e ) => {
									this.onInputChange( e, 'left' )
								} }
							/>
							<span>Left</span>
						</span>
						<span>
							<button
								className={`linked-btn components-button is-button dashicons dashicons-${
									isLinked ? "admin-links is-primary" : "editor-unlink is-default"
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

// export default withState( {
// 	device: 'md',
// } )( PBBoxControl );

export default PBBoxControl;
