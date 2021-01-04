const { InspectorControls, ColorPalette } = wp.blockEditor;
const {
	PanelBody,
	__experimentalBoxControl,
	SelectControl,
	ToggleControl,
	RangeControl,
	BaseControl,
	Dropdown,
	Button,
	ButtonGroup
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';

import { ColorPickerControl } from '../components';


const Advanced = ( props ) => {

    const { attributes, setAttributes } = props;

    const {
		backgroundColor,
        hoverBackgroundColor,
        padding,
        margin,
        shadowColor,
        shadowHOffset,
        shadowVOffset,
        shadowBlur,
        shadowSpread,
        shadowType,
        borderStyle,
        borderSize,
        borderColor,
    } = attributes;

    let currentiTab = 'normal';

	const [ iTab, setiTab ] = useState( currentiTab );
    
    return (
        <>
            <PanelBody title={ __( 'Background', 'powerful-blocks' ) }>
                <div className="pb-panel-inspect--tabs">
                    <ButtonGroup className="pb-panel-inspect--tabs__wrapper">
                        <Button
                            onClick = { () => {
                                setiTab('normal');
                            }}
                            className = {
                                classnames(
                                    "pb-panel-inspect--tab",
                                    'normal' === iTab ? 'pb-pi-tab--active' : '',
                                )
                            }
                        >
                            { __( 'Normal', 'powerful-blocks' ) }
                        </Button>
                        <Button
                            onClick = { () => {
                                setiTab('hover');
                            }}
                            className = {
                                classnames(
                                    "pb-panel-inspect--tab",
                                    'hover' === iTab ? 'pb-pi-tab--active' : '',
                                )
                            }
                        >
                            { __( 'Hover', 'powerful-blocks' ) }
                        </Button>
                    </ButtonGroup>
                    <div className="pb-panel-inspect--tabs__controls">
                        { 'normal' === iTab && (
                        <>
                            <ColorPickerControl
                                label={ __( 'Background Color', 'powerful-blocks' ) }
                                value={ backgroundColor }
                                onChange={ ( backgroundColor ) => {
                                    setAttributes( { backgroundColor } );
                                } }
                            />
                        </>
                        ) }
                        { 'hover' === iTab && (
                        <>
                            <ColorPickerControl
                                label={ __( 'Background Color', 'powerful-blocks' ) }
                                value={ hoverBackgroundColor }
                                onChange={ ( hoverBackgroundColor ) => {
                                    setAttributes( { hoverBackgroundColor } );
                                } }
                            />
                        </>
                        ) }
                    </div>
                </div>
                
            </PanelBody>
            <PanelBody title={ __( 'Spacing', 'powerful-blocks' ) } initialOpen={ false }>
                    
                <__experimentalBoxControl
                    label={ __( 'Padding', 'powerful-blocks' ) }
                    values={ padding }
                    onChange={ ( padding ) => {
                        setAttributes( { padding } );
                    } }
                />
                <__experimentalBoxControl
                    label={ __( 'Margin', 'powerful-blocks' ) }
                    values={ margin }
                    onChange={ ( margin ) => {
                        setAttributes( { margin } );
                    } }
                />
            </PanelBody>

            <PanelBody title={ __( 'Border', 'powerful-blocks' ) } initialOpen={ false }>
                <BaseControl
                    label={ __( 'Border', 'powerful-blocks' ) }
                    className="pb-border-control"
                >
                    <Dropdown
                        className="pb-border-control--dropdown"
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
                            <div className="pb-border-control--content">
                                <SelectControl
                                    label={ __(
                                        'Border Style',
                                        'powerful-blocks'
                                    ) }
                                    value={ borderStyle }
                                    onChange={ ( borderStyle ) => {
                                        setAttributes( { borderStyle } );
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
                                    value={ borderSize }
                                    onChange={ ( borderSize ) =>
                                        setAttributes( { borderSize } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 10 }
                                />
                                <p>
                                    { __( 'Border Color', 'powerful-blocks' ) }
                                </p>
                                <ColorPalette
                                    value={ borderColor }
                                    onChange={ ( borderColor ) =>
                                        setAttributes( { borderColor } )
                                    }
                                    allowReset
                                />
                            </div>
                        ) }
                    />
                </BaseControl>
            </PanelBody>

            <PanelBody title={ __( 'Box Shadow', 'powerful-blocks' ) } initialOpen={ false }>
                <BaseControl
                    label={ __( 'Shadow', 'powerful-blocks' ) }
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
                                <p>{ __( 'Color', 'powerful-blocks' ) }</p>
                                <ColorPalette
                                    value={ shadowColor }
                                    onChange={ ( shadowColor ) =>
                                        setAttributes( { shadowColor } )
                                    }
                                    allowReset
                                />
                                <RangeControl
                                    label={ __(
                                        'Horizontal Offset',
                                        'powerful-blocks'
                                    ) }
                                    value={ shadowHOffset }
                                    onChange={ ( shadowHOffset ) =>
                                        setAttributes( { shadowHOffset } )
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
                                    value={ shadowVOffset }
                                    onChange={ ( shadowVOffset ) =>
                                        setAttributes( { shadowVOffset } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={ __( 'Blur', 'powerful-blocks' ) }
                                    value={ shadowBlur }
                                    onChange={ ( shadowBlur ) =>
                                        setAttributes( { shadowBlur } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={ __( 'Spread', 'powerful-blocks' ) }
                                    value={ shadowSpread }
                                    onChange={ ( shadowSpread ) =>
                                        setAttributes( { shadowSpread } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 100 }
                                />
                                <SelectControl
                                    label={ __( 'Type', 'powerful-blocks' ) }
                                    value={ shadowType }
                                    onChange={ ( shadowType ) => {
                                        setAttributes( { shadowType } );
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
            </PanelBody>
        </>
    );
}

export default Advanced;