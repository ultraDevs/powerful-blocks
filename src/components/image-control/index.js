/**
 * WordPress dependencies
 */
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import {
	BaseControl,
	Button,
	ResponsiveWrapper,
	SelectControl,
	Spinner,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

import './editor.scss';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const ImageControl = ( props ) => {
	const { image, i18n } = props;
	const defaultData = {
		id: undefined,
		alt: '',
		size: 'full',
		url: '',
	};
	const imageObj = props.value || defaultData;
	const imageId = imageObj.id;
	const imageSize = imageObj.size || 'full';
	const { enableImageSizes } = props;

	const labels = {
		uploadImage:
			i18n && i18n.uploadImage ? i18n.uploadImage : __( 'Upload image' ),
		imageSize: i18n && i18n.imageSize ? i18n.imageSize : __( 'Image Size' ),
	};

	const [ imageData, setImageData ] = useState( imageObj );

	useEffect( () => {
		if ( imageData ) {
			props.onChange( imageData );
		}
	}, [ imageData ] );

	const onUpdateImage = ( image ) => {
		const { id, sizes, alt } = image;
		const size = sizes[ imageSize ] ? imageSize : 'full';
		const url = sizes[ size ].url;

		setImageData( {
			id,
			alt,
			size,
			sizes,
			url,
		} );
	};

	const onRemoveImage = () => {
		setImageData( defaultData );
	};

	const onSizeChange = ( size ) => {
		let url = image.media_details?.sizes[ size ]?.source_url;
		if ( url ) {
			setImageData( { ...imageData, size, url } );
		}
	};

	const getImageSizes = () => {
		const full = [ { value: 'full', label: 'full' } ];
		let sizes = [];
		if ( imageData.sizes ) {
			Object.keys( imageData.sizes ).map( ( size ) => {
				sizes.push( {
					value: size, label: size
				} );
			} )
		}

		return 0 === sizes.length ? full : sizes;
	}

	return (
		<BaseControl label={ props.label } className="pb-block-control--image">
			<MediaUploadCheck>
				<MediaUpload
					title={ props.label }
					onSelect={ onUpdateImage }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ imageId }
					render={ ( { open } ) => (
						<Button
							className={
								! imageId
									? 'editor-post-featured-image__toggle'
									: 'editor-post-featured-image__preview'
							}
							onClick={ open }
						>
							{ ! imageId && labels.uploadImage }
							{ !! imageId && ! image && <Spinner /> }
							{ !! imageId && image && (
								<ResponsiveWrapper
									naturalWidth={ image.media_details.width }
									naturalHeight={ image.media_details.height }
								>
									<img
										src={ image.source_url }
										alt={ image.alt }
									/>
								</ResponsiveWrapper>
							) }
						</Button>
					) }
				/>
			</MediaUploadCheck>
			{ !! imageId && (
				<div className="pb-block-control--image-actions components-button-group">
					{ image && (
						<MediaUploadCheck>
							<MediaUpload
								title={ props.label }
								onSelect={ onUpdateImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ imageId }
								render={ ( { open } ) => (
									<Button onClick={ open } icon="edit" />
								) }
							/>
						</MediaUploadCheck>
					) }
					<MediaUploadCheck>
						<Button
							onClick={ onRemoveImage }
							icon="trash"
						/>
					</MediaUploadCheck>
				</div>
			) }
			{ !! enableImageSizes && !! imageId && image && (
				<SelectControl
					label={ labels.imageSize }
					className="pb-block-control--image__size"
					value={ imageSize }
					options={ getImageSizes() }
					onChange={ onSizeChange }
				/>
			) }
		</BaseControl>
	);
};

export default compose(
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const imageId = props.value.id;

		return {
			image: imageId ? getMedia( imageId ) : null,
		};
	} )
)( ImageControl );
