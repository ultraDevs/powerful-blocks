import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className } ) => {
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

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	return (
		<div>
			<div id={ `pb-testimonial-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-testimonial-wrapper',
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
									<InnerBlocks.Content />
								</div>
							) }
						{ ! RichText.isEmpty( content ) &&
							true === showContent && (
								<RichText.Content
									tagName="div"
									className="pb-testimonial--content"
									value={ content }
								/>
							) }
						{ true === showRatings &&
							'after-content' === ratingsPosition && (
								<div className="pb-testimonial--rating">
									<InnerBlocks.Content />
								</div>
							) }
					</div>

					<div
						className={ `pb-testimonial--details image-position-${ imagePosition }` }
					>
						{ ( true === showImage && imageData.url ) && (
							<div className="pb-testimonial-image">
								<img
									src={ imageData.url }
									alt={ imageData.alt }
								/>
							</div>
						) }
						<div className="pb-testimonial-info">
							{ ! RichText.isEmpty( name ) &&
								true === showName && (
									<RichText.Content
										tagName="h3"
										className="pb-testimonial-info--name"
										value={ name }
									/>
								) }
							{ ! RichText.isEmpty( title ) &&
								true === showTitle && (
									<RichText.Content
										tagName="h4"
										className="pb-testimonial-info--title"
										value={ title }
									/>
								) }
							{ true === showRatings &&
								'after-info' === ratingsPosition && (
									<div className="pb-testimonial--rating">
										<InnerBlocks.Content />
									</div>
								) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default save;
