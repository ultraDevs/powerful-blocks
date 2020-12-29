import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ColorPicker,
	__experimentalBoxControl as BoxControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { AlignmentControl } from '../../../components';
import { ResponsiveRangeControl } from '../../../components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		textAlign,
		via,
		textColor,
		textSize,
		textSizeTablet,
		textSizeMobile,
		btnBackgroundColor,
		btnTxtColor,
		btnFontSize,
		btnFontSizeTablet,
		btnFontSizeMobile,
		btnPadding,
		btnBorderRadius,
		btnBorderStyle,
		btnBorderWidth,
		btnBorderColor,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Via', 'powerful-blocks' ) }>
				<TextControl
					label={ __( 'Twitter Username', 'powerful-blocks' ) }
					value={ via }
					onChange={ ( via ) => {
						setAttributes( { via } );
					} }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Text', 'powerful-blocks' ) }>
				<AlignmentControl
					label={ __( 'Alignment', 'powerful-blocks' ) }
					type="text"
					value={ textAlign }
					onChange={ ( textAlign ) => {
						setAttributes( { textAlign } );
					} }
				/>
				<ColorPicker
					label={ __( 'Color', 'powerful-blocks' ) }
					color={ textColor }
					onChangeComplete={ ( value ) =>
						setAttributes( { textColor: value.hex } )
					}
					disableAlpha
				/>
				<ResponsiveRangeControl
					label={ __( 'Font Size', 'powerful-blocks' ) }
					value={ {
						desktop: textSize,
						tablet: textSizeTablet,
						mobile: textSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { textSize: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { textSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { textSizeMobile: value } );
						}
					} }
				/>
			</PanelBody>

			<PanelBody title={ __( 'Button', 'powerful-blocks' ) }>
				<ColorPicker
					label={ __( 'Background Color', 'powerful-blocks' ) }
					color={ btnBackgroundColor }
					onChangeComplete={ ( value ) =>
						setAttributes( { btnBackgroundColor: value.hex } )
					}
					disableAlpha
				/>
				<ColorPicker
					label={ __( 'Color', 'powerful-blocks' ) }
					color={ btnTxtColor }
					onChangeComplete={ ( value ) =>
						setAttributes( { btnTxtColor: value.hex } )
					}
					disableAlpha
				/>

				<ResponsiveRangeControl
					label={ __( 'Font Size', 'powerful-blocks' ) }
					value={ {
						desktop: btnFontSize,
						tablet: btnFontSizeTablet,
						mobile: btnFontSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { btnFontSize: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { btnFontSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { btnFontSizeMobile: value } );
						}
					} }
				/>

				<BoxControl
					label={ __( 'Padding', 'powerful-blocks' ) }
					values={ btnPadding }
					onChange={ ( btnPadding ) => {
						setAttributes( { btnPadding } );
					} }
				/>

				<BoxControl
					label={ __( 'Border Radius', 'powerful-blocks' ) }
					values={ btnBorderRadius }
					onChange={ ( btnBorderRadius ) => {
						setAttributes( { btnBorderRadius } );
					} }
				/>
				<SelectControl
					label={ __( 'Border Style', 'powerful-blocks' ) }
					value={ btnBorderStyle }
					onChange={ ( btnBorderStyle ) => {
						setAttributes( { btnBorderStyle } );
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
					label={ __( 'Border Width', 'powerful-blocks' ) }
					value={ btnBorderWidth }
					onChange={ ( btnBorderWidth ) =>
						setAttributes( { btnBorderWidth } )
					}
					min={ 0 }
					step={ 1 }
					max={ 10 }
				/>

				<ColorPicker
					label={ __( 'Color', 'powerful-blocks' ) }
					color={ btnBorderColor }
					onChangeComplete={ ( value ) =>
						setAttributes( { btnBorderColor: value.hex } )
					}
					disableAlpha
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
