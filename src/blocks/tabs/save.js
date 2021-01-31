const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className } ) => {
	const {
		blockId,
		tabs,
		currentTab,
		tabsType,
		tabsAlign,
		tabsVAlign,
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	const allowedBlocks = [ 'powerful-blocks/tab' ];

	return (
		<div>
			<div id={ `pb-tabs-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-tabs-wrapper',
						tabsVAlign ? `pb-tabs-${tabsVAlign}` : undefined,
						...classes
					) }					
					{ ...blockAttr }
					data-a-tab = { currentTab ? currentTab : undefined }
				>
					<div
						className = {
							classnames(
								`pb-tabs--${tabsType}`,
							)
						}
					>
					{
						tabs.map( ( tab, key ) => {
							const tabActive = currentTab === tab.slug;
						
							return (
								<>
									<RichText.Content
										className={
											classnames(
												'pb-tabs--item',
												tabActive ? 'pb-tab-active' : undefined,
											)
										}
										tagName="a"
										value={ tab.title }
										href={ `#${ tab.slug }` }
										data-tab={ tab.slug }
									/>
								</>
							);
						})
						
					}
					</div>
					<div 
						className={ classnames(
								"pb-tabs-content",
							)
						}
					>
						<InnerBlocks.Content allowedBlocks={ allowedBlocks } />
					</div>

				</div>
			</div>
		</div>
	);
};
export default save;
