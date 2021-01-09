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

import ResponsiveRangeControl from '../responsive-range-control';

const WEIGHTS = [
    { label: __( 'Default', 'powerful-blocks' ), value: "" },
    { label: __( 'Normal', 'powerful-blocks' ), value: "normal" },
    { label: __('Bold', 'powerful-blocks' ), value: "bold" },
    { label: __( 'Italic', 'powerful-blocks' ), value: "italic" },
];

const TRANSFORMS = [
    { label: __( 'None', 'powerful-blocks' ), value: "" },
    { label: __( 'AA', 'powerful-blocks' ), value: "uppercase" },
    { label: __( 'aa', 'powerful-blocks' ), value: "lowercase" },
    { label: __( 'Aa', 'powerful-blocks' ), value: "capitalize" },
];

const DECORATIONS = [
    { label: __( 'Initial', 'powerful-blocks' ), value: 'initial' },
    { label: __( 'Overline', 'powerful-blocks' ), value: 'overline' },
    { label: __( 'Line Through', 'powerful-blocks' ), value: 'line-through' },
    { label: __( 'Underline', 'powerful-blocks' ), value: 'underline' },
    { label: __( 'Underline Overline', 'powerful-blocks' ), value: 'underline overline' },
];


const TypographyControl = ( props ) => {
    const label = props.label;
    const fontFamily = props.fontFamily;
    const fontSize = props.fontSize;
    const fontSizeTablet = props.fontSizeTablet;
    const fontSizeMobile = props.fontSizeMobile;
    const fontWeight = props.fontWeight;
    const lineHeight = props.lineHeight;
    const letterSpacing = props.letterSpacing;
    const textTransform = props.textTransform;
    const textDecoration = props.textDecoration;
    const setAttributes = props.setAttributes;

    console.log(letterSpacing.value);

    return (
        <BaseControl
            label={ label }
            className="pb-typography-control"
        >
            <Dropdown
                className="pb-typography-control--dropdown"
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
                    <div className="pb-typography-control--content">
                        <SelectControl
                            label={ __(
                                'Weight',
                                'powerful-blocks'
                            ) }
                            value={ fontWeight.value }
                            onChange={ ( value ) => {
                                setAttributes( { [ fontWeight.name] : value } );
                            } }
                            options={ WEIGHTS }
                        />
                        <ResponsiveRangeControl
                            label={ __( 'Size', 'powerful-blocks' ) }
                            sizeType = {
                                { value: props.sizeType.value, name: props.sizeType.name }
                            }
                            sizeOnDesktop = { { value: fontSize.value, name: fontSize.name } }
                            sizeOnTablet = { { value: fontSizeTablet.value, name: fontSizeTablet.name } }
                            sizeOnMobile = { { value: fontSizeMobile.value, name: fontSizeMobile.name } }
                            min={ 0 }
                            max={ 500 }
                            setAttributes = { setAttributes }
                        />
                        <RangeControl
                            label={ __(
                                'Line Height',
                                'powerful-blocks'
                            ) }
                            value={ lineHeight.value }
                            onChange={ ( value ) => {
                                setAttributes( { [lineHeight.name] : value } )
                            }}
                            min={ 0 }
                            step={ 1 }
                            max={ 100 }
                        />
                        <RangeControl
                            label={ __(
                                'Letter Spacing',
                                'powerful-blocks'
                            ) }
                            value={ letterSpacing.value }
                            onChange={ ( value ) =>
                                setAttributes( { [letterSpacing.name] : value } )
                            }
                            min={ 0 }
                            step={ 1 }
                            max={ 100 }
                        />
                        <BaseControl 
                            label={ __(
                                'Text Transform',
                                'powerful-blocks'
                            ) }
                        >
                            <ButtonGroup>
                                { TRANSFORMS.map( (item) => (
                                    <Button
                                        isPrimary={ textTransform.value === item.value}
                                        isSecondary={textTransform.value !== item.value}
                                        onClick={() =>
                                            setAttributes({
                                                [textTransform.name]: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <SelectControl
                            label={ __(
                                'Text Decoration',
                                'powerful-blocks'
                            ) }
                            value={ textDecoration.value }
                            onChange={ ( value ) => {
                                setAttributes( { [textDecoration.name]: value } );
                            } }
                            options={ DECORATIONS }
                        />
                    </div>
                ) }
            />
        </BaseControl>
    );
}
export default TypographyControl;