const { RichText, InnerBlocks, MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const { Button } = wp.components;
import classnames from 'classnames';

import Inspector from './inspector';
import { genClass, blockAttributes } from '../../helper';


import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		blockId,
		backgroundType,
		content,
		imageData,
		name,
		title,
		imagePosition,
		showContent,
		showImage,
		showName,
		showTitle,
		showRatings,
		ratingsPosition,
		preset,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
		customID,
		displayBubble,

		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
        wrapperLinkNofollow,
	} = attributes;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}
	const allowedBlocks = [ 'powerful-blocks/star-rating' ];

	const classes = genClass( attributes, 'edit'  );
	const blockAttr = blockAttributes( attributes, 'edit' );

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-testimonial-${ blockId }` }>
				<div
					className={ classnames(
						'pb-testimonial-wrapper',
						props.className,
						'pb-testimonial-client-info-position',
						preset,
						true === displayBubble ? 'pb-t-bubble' : '',
						...classes
					) }
					{ ... blockAttr }
				>
					<div className="pb-testimonial--conr">
						{ true === showRatings &&
							'before-content' === ratingsPosition && (
								<div className="pb-testimonial--rating">
									<InnerBlocks
										allowedBlocks={ allowedBlocks }
									/>
								</div>
							) }
						{ true === showContent && (
							<RichText
								tagName="div"
								className="pb-testimonial--content"
								placeholder={ __(
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
									'powerful-blocks'
								) }
								value={ content }
								disableLineBreaks
								keepPlaceholderOnFocus={ true }
								onChange={ ( content ) => {
									setAttributes( { content } );
								} }
							/>
						) }
						{ true === showRatings &&
							'after-content' === ratingsPosition && (
								<div className="pb-testimonial--rating">
									<InnerBlocks
										allowedBlocks={ allowedBlocks }
									/>
								</div>
							) }
					</div>

					<div
						className={ `pb-testimonial--details image-position-${ imagePosition }` }
					>
						{ true === showImage && (
							<div className="pb-testimonial-image">
								{ imageData.url ? (
									<img
										src={ imageData.url }
										alt={ imageData.alt }
									/>
								) : (
									<MediaUpload
										onSelect={ ( image ) =>
											setAttributes({
												imageData: image,
											})
										}
										type="image"
										value={ imageData.id }
										render={ ( { open } ) =>
											!imageData.url && (
												<Button
													label={ __( 'Upload Image', 'powerful-blocks' ) }
													icon="format-image"
													onClick={ open }
												/>
											)
										}
									/>
								) }
							</div>
						) }
						<div className="pb-testimonial-info">
							{ true === showName && (
								<RichText
									tagName="h3"
									className="pb-testimonial-info--name"
									placeholder={ __(
										'Name',
										'powerful-blocks'
									) }
									value={ name }
									disableLineBreaks
									keepPlaceholderOnFocus={ true }
									onChange={ ( name ) => {
										setAttributes( { name } );
									} }
								/>
							) }

							{ true === showTitle && (
								<RichText
									tagName="h4"
									className="pb-testimonial-info--title"
									placeholder={ __(
										'Title',
										'powerful-blocks'
									) }
									value={ title }
									disableLineBreaks
									keepPlaceholderOnFocus={ true }
									onChange={ ( title ) => {
										setAttributes( { title } );
									} }
								/>
							) }
							{ true === showRatings &&
								'after-info' === ratingsPosition && (
									<div className="pb-testimonial--rating">
										<InnerBlocks
											allowedBlocks={ allowedBlocks }
										/>
									</div>
								) }
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default edit;
