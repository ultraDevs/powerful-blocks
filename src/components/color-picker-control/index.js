const {
	BaseControl,
	Button,
	ColorPicker,
	Dropdown,
	Dashicon,
	Tooltip,
} = wp.components;

const { ColorPalette, ContrastChecker } = wp.blockEditor;

const { Fragment } = wp.element;

const { __ } = wp.i18n;

import './editor.scss';

const ColorPickerControl = ( props ) => {
	const color = props.value;

	const parseColor = ( color ) => {
		if ( 'object' === typeof color ) {
			const alpha = 'undefined' === color.a ? 1 : color.a;

			if ( 'undefined' !== typeof color.h ) {
				return `hsl(${ color.h }%, ${ color.s }%, ${ color.l }%, ${ alpha })`;
			}

			if ( 'undefined' !== typeof color.r ) {
				return `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ alpha })`;
			}
		}

		return color;
	};

	return (
		<BaseControl
			label={ props.label }
			help={ props.help }
			className="pb-block-control--color-picker"
		>
			<Dropdown
				className="pb-block-control--color-picker-dropdown"
				contentClassName="pb-block-control--color-picker-inner"
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Fragment>
						<Button
							aria-expanded={ isOpen }
							onClick={ onToggle }
							aria-label={ props.label }
							className="pb-block-control--color-picker-value"
						>
							<span style={ { backgroundColor: color } }></span>
						</Button>
						{ color && (
							<Tooltip text={ __( 'Reset', 'powerful-blocks' ) }>
								<Button
									onClick={ () =>
										props.onChange( undefined )
									}
									aria-label={ __(
										'Reset',
										'powerful-blocks'
									) }
									className="pb-block-control--color-picker-reset"
								>
									<Dashicon icon="image-rotate" />
								</Button>
							</Tooltip>
						) }
					</Fragment>
				) }
				renderContent={ () => (
					<>
					<ColorPalette
						value={ color }
						onChange={ ( value ) =>
							props.onChange( value )
						}
						disableCustomColors
						clearable={false}
					/>
					{ props.contrastChecker &&
					<ContrastChecker
						backgroundColor={ props.contrastChecker.backgroundColor }
						textColor={ props.contrastChecker.textColor }
					/>
					}
					<ColorPicker
						color={ color }
						onChangeComplete={ ( value ) =>
							props.onChange(
								parseColor( value[ value.source ] )
							)
						}
						disableAlpha={ props.disableAlpha }
					/>
					</>
				) }
			/>
		</BaseControl>
	);
};

export default ColorPickerControl;
