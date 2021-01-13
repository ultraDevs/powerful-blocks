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

const ShadowControl = ( props ) => {
    const label = props.label;
    const shadowColor = props.shadowColor;
    const shadowHOffset = props.shadowHOffset;
    const shadowVOffset = props.shadowVOffset;
    const shadowBlur = props.shadowBlur;
    const shadowSpread = props.shadowSpread;
    const shadowType = props.shadowType;
    const setAttributes = props.setAttributes;

    return (
        <>
            <BaseControl
                label={ label }
                className="pb-shadow-control"
            >
                <Dropdown
                    className="pb-shadow-control--dropdown"
                    contentClassName="my-popover-content-classname"
                    position="bottom right"
                    renderToggle={ ( { isOpen, onToggle } ) => (
                        <Button
                            isSmall
                            onClick={ onToggle }
                            aria-expanded={ isOpen }
                            icon="edit"
                        ></Button>
                    ) }
                    renderContent={ () => (
                        <div className="pb-shadow-control--content">
                            <p>
                                <strong>Shadow</strong>
                            </p>
                            <ColorPickerControl
                                label={ __( 'Color', 'powerful-blocks' ) }
                                value={ shadowColor.value }
                                onChange={ ( color ) => {
                                    setAttributes( { [ shadowColor.name ] : color } );
                                } }
                            />
                            
                            <RangeControl
                                label={ __(
                                    'Horizontal Offset',
                                    'powerful-blocks'
                                ) }
                                value={ shadowHOffset.value }
                                onChange={ ( value ) =>
                                    setAttributes( { [ shadowHOffset.name ] : value } )
                                }
                                min={ 0 }
                                step={ 1 }
                                max={ 100 }
                            />
                            <RangeControl
                                label={ __(
                                    'Vertical Offset',
                                    'powerful-blocks'
                                ) }
                                value={ shadowVOffset.value }
                                onChange={ ( value ) =>
                                    setAttributes( { [ shadowVOffset.name ] : value } )
                                }
                                min={ 0 }
                                step={ 1 }
                                max={ 100 }
                            />
                            <RangeControl
                                label={ __( 'Blur', 'powerful-blocks' ) }
                                value={ shadowBlur.value }
                                onChange={ ( value ) =>
                                    setAttributes( { [ shadowBlur.name ] : value } )
                                }
                                min={ 0 }
                                step={ 1 }
                                max={ 100 }
                            />
                            <RangeControl
                                label={ __( 'Spread', 'powerful-blocks' ) }
                                value={ shadowSpread.value }
                                onChange={ ( value ) =>
                                    setAttributes( { [ shadowSpread.name ] : value } )
                                }
                                min={ 0 }
                                step={ 1 }
                                max={ 100 }
                            />
                            <SelectControl
                                className = "pb-custom-select-control"
                                label={ __( 'Type', 'powerful-blocks' ) }
                                value={ shadowType.value }
                                onChange={ ( value ) => {
                                    setAttributes( { [ shadowType.name ] : value } );
                                } }
                                options={ [
                                    { value: 'inset', label: 'Inset' },
                                    { value: '', label: 'Outset' },
                                ] }
                            />
                        </div>
                    ) }
                />
            </BaseControl>
        </>
    );
}

export default ShadowControl;