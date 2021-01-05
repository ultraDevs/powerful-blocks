const {
	PanelBody,
	__experimentalBoxControl,
    SelectControl,
    TextControl,
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
import { ResponsiveRangeControl } from '../components';


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
        hoverBorderStyle,
        hoverBorderSize,
        hoverBorderColor,
        inAnimation,
        outAnimation,
        inAnimationDuration,
        inAnimationDelay,
        outAnimationDuration,
        outAnimationDelay,
        blockWidth,
        blockCustomWidth,
        blockCustomWidthTablet,
        blockCustomWidthMobile,
        blockzIndex,
        hideOnDesktop,
        hideOnTablet,
        hideOnMobile,
        customClass,
        customID,
    } = attributes;
    
    let currentABgTab = 'normal';
    const [ aBgTab, setABgTab ] = useState( currentABgTab );
    
    let currentABrdrTab = 'normal';
	const [ aBrdrTab, setABrdrTab ] = useState( currentABrdrTab );
    
    return (
        <>
            <PanelBody title={ __( 'Background', 'powerful-blocks' ) }>
                <div className="pb-panel-inspect--tabs">
                    <ButtonGroup className="pb-panel-inspect--tabs__wrapper">
                        <Button
                            onClick = { () => {
                                setABgTab('normal');
                            }}
                            className = {
                                classnames(
                                    "pb-panel-inspect--tab",
                                    'normal' === aBgTab ? 'pb-pi-tab--active' : '',
                                )
                            }
                        >
                            { __( 'Normal', 'powerful-blocks' ) }
                        </Button>
                        <Button
                            onClick = { () => {
                                setABgTab('hover');
                            }}
                            className = {
                                classnames(
                                    "pb-panel-inspect--tab",
                                    'hover' === aBgTab ? 'pb-pi-tab--active' : '',
                                )
                            }
                        >
                            { __( 'Hover', 'powerful-blocks' ) }
                        </Button>
                    </ButtonGroup>
                    <div className="pb-panel-inspect--tabs__controls">
                        { 'normal' === currentABgTab && (
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
                        { 'hover' === currentABgTab && (
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
            <div className="pb-panel-inspect--tabs">
                    <ButtonGroup className="pb-panel-inspect--tabs__wrapper">
                        <Button
                            onClick = { () => {
                                setABrdrTab('normal');
                            }}
                            className = {
                                classnames(
                                    "pb-panel-inspect--tab",
                                    'normal' === aBrdrTab ? 'pb-pi-tab--active' : '',
                                )
                            }
                        >
                            { __( 'Normal', 'powerful-blocks' ) }
                        </Button>
                        <Button
                            onClick = { () => {
                                setABrdrTab('hover');
                            }}
                            className = {
                                classnames(
                                    "pb-panel-inspect--tab",
                                    'hover' === aBrdrTab ? 'pb-pi-tab--active' : '',
                                )
                            }
                        >
                            { __( 'Hover', 'powerful-blocks' ) }
                        </Button>
                    </ButtonGroup>
                    <div className="pb-panel-inspect--tabs__controls">
                        { 'normal' === currentABrdrTab && (
                        <>
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
                                <ColorPickerControl
                                    label={ __( 'Border Color', 'powerful-blocks' ) }
                                    value={ borderColor }
                                    onChange={ ( borderColor ) => {
                                        setAttributes( { borderColor } );
                                    } }
                                />
                            </div>
                        </>
                        ) }
                        { 'hover' === currentABrdrTab && (
                        <>
                            <div className="pb-border-control--content">
                                <SelectControl
                                    label={ __(
                                        'Border Style',
                                        'powerful-blocks'
                                    ) }
                                    value={ hoverBorderStyle }
                                    onChange={ ( hoverBorderStyle ) => {
                                        setAttributes( { hoverBorderStyle } );
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
                                    value={ hoverBorderSize }
                                    onChange={ ( hoverBorderSize ) =>
                                        setAttributes( { hoverBorderSize } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 10 }
                                />
                                <ColorPickerControl
                                    label={ __( 'Border Color', 'powerful-blocks' ) }
                                    value={ hoverBorderColor }
                                    onChange={ ( hoverBorderColor ) => {
                                        setAttributes( { hoverBorderColor } );
                                    } }
                                />
                            </div>
                        </>
                        ) }
                    </div>
                </div>
                <hr className="pb-hr" />
                <BaseControl
                    label={ __( 'Box Shadow', 'powerful-blocks' ) }
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
                                    value={ shadowColor }
                                    onChange={ ( shadowColor ) => {
                                        setAttributes( { shadowColor } );
                                    } }
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

            <PanelBody title={ __( 'Animation', 'powerful-blocks' ) } initialOpen={ false }></PanelBody>
            <PanelBody title={ __( 'Positioning', 'powerful-blocks' ) } initialOpen={ false }>
                <SelectControl
                    label={ __( 'Width', 'powerful-blocks' ) }
                    value={ blockWidth }
                    onChange={ ( blockWidth ) => {
                        setAttributes( { blockWidth } );
                    } }
                    options={ [
                        { value: '', label: 'Default' },
                        { value: 'inline', label: 'Inline (auto)' },
                        { value: 'custom', label: 'Custom' },
                    ] }
                />
                { ( 'custom' === blockWidth ) && (
                    <ResponsiveRangeControl
                        label={ __( 'Width', 'powerful-blocks' ) }
                        value={ {
                            desktop: blockCustomWidth,
                            tablet: blockCustomWidthTablet,
                            mobile: blockCustomWidthMobile,
                        } }
                        onChange={ ( value, device ) => {
                            if ( 'desktop' === device ) {
                                setAttributes( { blockCustomWidth: value } );
                            }
                            if ( 'tablet' === device ) {
                                setAttributes( { blockCustomWidthTablet: value } );
                            }
                            if ( 'mobile' === device ) {
                                setAttributes( { blockCustomWidthMobile: value } );
                            }
                        } }
                        min={ 0 }
                        max={ 500 }
                    />
                ) }
            </PanelBody>
            <PanelBody title={ __( 'Responsive', 'powerful-blocks' ) } initialOpen={ false }>
                <ToggleControl
                    label={ __( 'Hide on Desktop', 'powerful-blocks' ) }
                    checked={ hideOnDesktop }
                    onChange={ ( hideOnDesktop ) => {
                        setAttributes( { hideOnDesktop } );
                    } }
                />
                <ToggleControl
                    label={ __( 'Hide on Tablet', 'powerful-blocks' ) }
                    checked={ hideOnTablet }
                    onChange={ ( hideOnTablet ) => {
                        setAttributes( { hideOnTablet } );
                    } }
                />
                <ToggleControl
                    label={ __( 'Hide on Mobile', 'powerful-blocks' ) }
                    checked={ hideOnMobile }
                    onChange={ ( hideOnMobile ) => {
                        setAttributes( { hideOnMobile } );
                    } }
                />
            </PanelBody>
            <PanelBody title={ __( 'Custom', 'powerful-blocks' ) } initialOpen={ false }>
                <TextControl
                    label={ __( 'Custom Class', 'powerful-blocks' ) }
                    value={ customClass }
                    onChange={ ( customClass ) => {
                        setAttributes( { customClass } );
                    } }
                />
                <TextControl
                    label={ __( 'Custom ID', 'powerful-blocks' ) }
                    value={ customID }
                    onChange={ ( customID ) => {
                        setAttributes( { customID } );
                    } }
                />
            </PanelBody>
        </>
    );
}

export default Advanced;