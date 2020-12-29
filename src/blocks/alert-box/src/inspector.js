import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalBoxControl as BoxControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { AlignmentControl } from '../../../components';
import { ResponsiveRangeControl } from '../../../components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		backgroundColor,
		borderRadius,
		displayType,
		hideAfterTime,
		padding,
		bottomSpace,
		textAlign,
		titleColor,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		contentColor,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
	} = attributes;
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Settings & Styles', 'powerful-blocks' ) }>
				<SelectControl
					label={ __( 'Display', 'powerful-blocks' ) }
					value={ displayType }
					options={ [
						{ value: 'alwaysOn', label: 'Always On' },
						{ value: 'dismissable', label: 'Allow To Dismiss' },
						{ value: 'hideAfterTime', label: 'Hide After x Time' },
					] }
					onChange={ ( displayType ) => {
						setAttributes( { displayType } );
					} }
				/>
				{ 'hideAfterTime' === displayType && (
					<RangeControl
						label={ __( 'Close After (ms)', 'powerful-blocks' ) }
						onChange={ ( hideAfterTime ) => {
							setAttributes( { hideAfterTime } );
						} }
						value={ hideAfterTime }
						min={ 0 }
						step={ 0.5 }
						max={ 20 }
					/>
				) }
				<AlignmentControl
					label={ __( 'Alignment', 'powerful-blocks' ) }
					type="text"
					value={ textAlign }
					onChange={ ( textAlign ) => {
						setAttributes( { textAlign } );
					} }
				/>
				<BoxControl
					label={ __( 'Padding', 'powerful-blocks' ) }
					values={ padding }
					onChange={ ( padding ) => {
						setAttributes( { padding } );
					} }
				/>
				<BoxControl
					label={ __( 'Border Radius', 'powerful-blocks' ) }
					values={ borderRadius }
					onChange={ ( borderRadius ) => {
						setAttributes( { borderRadius } );
					} }
				/>
				<RangeControl
					label={ __( 'Space After Title', 'powerful-blocks' ) }
					value={ bottomSpace }
					onChange={ ( bottomSpace ) =>
						setAttributes( { bottomSpace } )
					}
					min={ 0 }
					max={ 100 }
				/>
				<ResponsiveRangeControl
					label={ __( 'Title Font Size', 'powerful-blocks' ) }
					value={ {
						desktop: titleFontSize,
						tablet: titleFontSizeTablet,
						mobile: titleFontSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { titleFontSize: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { titleFontSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { titleFontSizeMobile: value } );
						}
					} }
				/>

				<ResponsiveRangeControl
					label={ __( 'Content Font Size', 'powerful-blocks' ) }
					value={ {
						desktop: contentFontSize,
						tablet: contentFontSizeTablet,
						mobile: contentFontSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { contentFontSize: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { contentFontSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { contentFontSizeMobile: value } );
						}
					} }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
