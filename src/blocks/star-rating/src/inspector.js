import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody, RangeControl, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ResponsiveRangeControl } from '../../../components';
import { AlignmentControl } from '../../../components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		stars,
		rating,
		iconAlign,
		color,
		size,
		sizeTablet,
		sizeMobile,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'powerful-blocks' ) }>
				<AlignmentControl
					label={ __( 'Alignment', 'powerful-blocks' ) }
					type="text"
					value={ iconAlign }
					onChange={ ( iconAlign ) => {
						setAttributes( { iconAlign } );
					} }
				/>
				<RangeControl
					label={ __( 'Rating Scale', 'powerful-blocks' ) }
					value={ stars }
					min={ 5 }
					max={ 10 }
					step={ 1 }
					onChange={ ( stars ) => setAttributes( { stars } ) }
				/>
				<RangeControl
					label={ __( 'Rating', 'powerful-blocks' ) }
					value={ rating }
					min={ 0 }
					max={ stars }
					step={ 0.5 }
					onChange={ ( rating ) => setAttributes( { rating } ) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Icon', 'powerful-blocks' ) }>
				<ColorPicker
					label={ __( 'Color', 'powerful-blocks' ) }
					color={ color }
					onChangeComplete={ ( value ) =>
						setAttributes( { color: value.hex } )
					}
					disableAlpha
				/>

				<ResponsiveRangeControl
					label={ __( 'Size', 'powerful-blocks' ) }
					value={ {
						desktop: size,
						tablet: sizeTablet,
						mobile: sizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { size: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { sizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { sizeMobile: value } );
						}
					} }
					min={ 0 }
					max={ 100 }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
