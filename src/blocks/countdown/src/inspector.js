import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ResponsiveRangeControl } from '../../../components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Content', 'powerful-blocks' ) }>

				{/* <ResponsiveRangeControl
					label={ __( 'Name Font Size', 'powerful-blocks' ) }
					value={ {
						desktop: nameFontSizeDesktop,
						tablet: nameFontSizeTablet,
						mobile: nameFontSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { nameFontSizeDesktop: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { nameFontSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { nameFontSizeMobile: value } );
						}
					} }
				/> */}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
