const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import IconBox from "../../helper/iconbox.js";


const save = ( { attributes, className } ) => {
	const {
		blockId,
		accordions,
		activeItem,
		titleTag,
		toggleIcon,
		toggleOpenIcon,
		toggleCloseIcon,
		accordionType,
		toggleSpeed,
	} = attributes;

	const settings = JSON.stringify({
		type: accordionType ? accordionType : '',
		speed: toggleSpeed ? toggleSpeed : '',
	});

	return (
		<div>
			<div id={ `pb-accordion-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-accordion-wrapper',
					) }					
					data-settings = {
						settings ? settings : undefined
					}
				>
				{
					accordions.map( ( accordion, key ) => (
						<div className="pb-accordion-item">
							<div className={
								classnames(
									"pb-accordion-header",
									`item-${key}` == activeItem ? 'pb-active' : '',
								)
							}>
							{ true === accordion.enableIcon ? (
								<IconBox icon={ accordion.icon } iconClass = 'pb-accordion-icon' />
							) : '' }
								<RichText.Content
									tagName={ titleTag }
									className="pb-accordion-title"
									value={ accordion.title }
								/>
								{
									true === toggleIcon ? (
										<>
										<div className="pb-accordion-toggle-icon">
											<IconBox icon={ toggleOpenIcon } iconClass = 'pb-accordion-toggle-icon--open' />
											<IconBox icon={ toggleCloseIcon } iconClass = 'pb-accordion-toggle-icon--close' />
										</div>
										</>
									) : ''
								}
							</div>
							<div className={
								classnames(
									"pb-accordion-content",
									`item-${key}` == activeItem ? 'pb-active' : '',
								)
							}>
								<RichText.Content
									tagName="div"
									className="pb-accordion-content--w"
									value={ accordion.content }
								/>
							</div>
						</div>
					))
				}
				</div>
			</div>
		</div>
	);
};
export default save;
