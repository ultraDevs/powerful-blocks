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

import FONTS from './fonts';

import ResponsiveRangeControl from '../responsive-range-control';

import FontFamilyPicker from './fontPicker';

const WEIGHTS = [
    { label: __( 'Default', 'powerful-blocks' ), value: "" },
    { label: __( 'Normal', 'powerful-blocks' ), value: "normal" },
    { label: __('Bold', 'powerful-blocks' ), value: "bold" },
];

const STYLES = [
    { label: __( 'Normal', 'powerful-blocks' ), value: "normal" },
    { label: __('Italic', 'powerful-blocks' ), value: "italic" },
    { label: __('Oblique', 'powerful-blocks' ), value: "oblique" },
    { label: __('Initial', 'powerful-blocks' ), value: "initial" },
    { label: __('Inherit', 'powerful-blocks' ), value: "inherit" },
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
    const fontStyle = props.fontStyle;
    const fontSizeTablet = props.fontSizeTablet;
    const fontSizeMobile = props.fontSizeMobile;
    const fontWeight = props.fontWeight;
    const lineHeight = props.lineHeight;
    const letterSpacing = props.letterSpacing;
    const textTransform = props.textTransform;
    const textDecoration = props.textDecoration;
    const setAttributes = props.setAttributes;


    const onFontChange = ( value ) => {
		// const { fontFamily, fontWeight } = props.attributes;

		setAttributes({ [fontFamily.name]: value });

		if (
			typeof FONTS[value] !== "undefined" &&
			typeof FONTS[value].weight !== "undefined"
		) {
			if (
				fontWeight.value &&
				Object.values(FONTS[fontFamily.value].weight).indexOf(fontWeight) < 0
			) {
				setAttributes({ [fontWeight.name]: "" });
			}
		}

		// onClose();
	};

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
                renderContent={ ( ) => (
                    <div className="pb-typography-control--content">
                        <FontFamilyPicker
							label={ __( 'Font', 'powerful-blocks' ) }
							value={ fontFamily.value || null }
							onChange={ ( nextFontFamily ) => {
								onFontChange(nextFontFamily );
							} }
							className="components-base-control--with-flex"
						/>
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
                        <SelectControl
                            label={ __(
                                'Style',
                                'powerful-blocks'
                            ) }
                            value={ fontStyle.value }
                            onChange={ ( value ) => {
                                setAttributes( { [ fontStyle.name] : value } );
                            } }
                            options={ STYLES }
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
                            className="pb-typography-control--transform"
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