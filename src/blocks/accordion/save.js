const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import { genClass, blockAttributes } from '../../helper';
import IconBox from "../../helper/iconbox.js";


const save = ( { attributes, className } ) => {
	const {
		blockId,
		accordions,
		titleTag,
		toggleIcon,
		toggleOpenIcon,
		toggleCloseIcon,
		accordionType,
		toggleSpeed,
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

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
						...classes
					) }					
					{ ...blockAttr }
				data-settings = {
						settings ? settings : undefined
					}
				>
				{
					accordions.map( ( accordion, key ) => (
						<div className="pb-accordion-item">
							<div className="pb-accordion-header">
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
							<div className="pb-accordion-content">
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
