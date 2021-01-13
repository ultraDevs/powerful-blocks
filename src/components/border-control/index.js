const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	SelectControl,
	RangeControl,
	Dropdown,
	ButtonGroup,
	Button,
	BaseControl,
} = wp.components;

import './editor.scss';


import ColorPickerControl from '../color-picker-control';

const BorderControl = ( props ) => {
    const label = props.label;
    const borderStyle = props.borderStyle;
    const borderSize = props.borderSize;
    const borderColor = props.borderColor;
    const setAttributes = props.setAttributes;

    return (
        <>
            <BaseControl
                label={ label }
                className="pb-shadow-control"
            >
                <SelectControl
                    className = "pb-custom-select-control"
                    label={ __(
                        'Border Style',
                        'powerful-blocks'
                    ) }
                    value={ borderStyle.value }
                    onChange={ ( value ) => {
                        setAttributes( { [ borderStyle.name ] : value } );
                    } }
                    options={ [
                        { value: 'none', label: 'None' },
                        { value: 'solid', label: 'Solid' },
                        { value: 'dotted', label: 'Dotted' },
                        { value: 'dashed', label: 'Dashed' },
                        { value: 'double', label: 'Double' },
                    ] }
                />
                <RangeControl
                    label={ __(
                        'Border Size',
                        'powerful-blocks'
                    ) }
                    value={ borderSize.value }
                    onChange={ ( value ) => {
                        setAttributes( { [ borderSize.name ] : value } );
                    } }
                    min={ 0 }
                    step={ 1 }
                    max={ 10 }
                />
                <ColorPickerControl
                    label={ __( 'Border Color', 'powerful-blocks' ) }
                    value={ borderColor.value }
                    onChange={ ( value ) => {
                        setAttributes( { [ borderColor.name ] : value } );
                    } }
                />
            </BaseControl>
        </>
    );
}

export default BorderControl;