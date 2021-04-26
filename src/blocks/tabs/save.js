const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';


const save = ( { attributes, className } ) => {
	const {
		blockId,
		tabs,
		currentTab,
		tabsType,
		tabsVAlign,
	} = attributes;

	const allowedBlocks = [ 'powerful-blocks/tab' ];

	return (
		<div>
			<div id={ `pb-tabs-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-tabs-wrapper',
						tabsVAlign ? `pb-tabs-${tabsVAlign}` : undefined,
					) }					
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
