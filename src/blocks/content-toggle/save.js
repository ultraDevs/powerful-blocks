const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className } ) => {
	const {
		blockId,
		activeItem,
		primaryLabel,
		secondaryLabel,
		switchAlign,
		switchStyle,
		switchPosition
	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	const allowedBlocks = [ 'powerful-blocks/toggler' ];

	const Switcher = () => {
		return(
			<div className="pb-content-toggle-switch-wrapper">
				<RichText.Content
					tagName="div"
					className={ classnames(
						'pb-toggle-primary-label',
						'pb-toggle-label',
						'primary' === activeItem
							? 'pb-toggle-active'
							: ''
					) }
					value={ primaryLabel }
					
				/>
				<div className={
					classnames(
						'pb-content-toggle-switch',
						switchStyle ? `pb-toggle-${switchStyle}` : '',
						activeItem === 'secondary' ? 'pb-toggle-switch-on' : '',
					)
				}>
					<label className="pb-toggle-switch-label">
						{ 'secondary' === activeItem && (
							<input
								className="pb-toggle-switch"
								type="checkbox" 
								checked
							/>
						) }
						{ 'primary' === activeItem && (
							<input
								className="pb-toggle-switch"
								type="checkbox" 
								
							/>
						) }
						<span className="pb-toggle-switch-w"></span>
					</label>
				</div>
				<RichText.Content
					tagName="div"
					className={ classnames(
						'pb-toggle-secondary-label',
						'pb-toggle-label',
						activeItem === 'secondary'
							? 'pb-toggle-active'
							: ''
					) }
					value={ secondaryLabel }
				/>
			</div>
		);
	}

	return (
		<div>
			<div id={ `pb-content-toggle-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-content-toggle-wrapper',
						activeItem ? `pb-content-toggle-${activeItem}` : undefined,
						...classes
					) }					
					{ ...blockAttr }
					data-a-switch = { activeItem ? activeItem : undefined }
				>
					{ ( 'before' === switchPosition || 'beforeAfter' === switchPosition ) && 
						Switcher()
					}
					<div 
						className="pb-content-toggle-contents"
					>
						<InnerBlocks.Content allowedBlocks={ allowedBlocks } />
					</div>
					{/* <div className="pb-content-toggle-contents">
						<div
							className="pb-toggle-primary-content"
							style={{
								display: 'primary' === activeItem ? 'block' : 'none'
							}}
						>
							Primary
						</div>
						<div 
							className="pb-toggle-secondary-content"
							style={{
								display: 'secondary' === activeItem ? 'block' : 'none'
							}}
						>
							Secondary
						</div>
					</div> */}
					{ ( 'after' === switchPosition || 'beforeAfter' === switchPosition ) && 
						Switcher()
					}
					{/* <div
						className = {
							classnames(
								`pb-content-toggle--${tabsType}`,
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
												'pb-content-toggle--item',
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
								"pb-content-toggle-content",
							)
						}
					>
						<InnerBlocks.Content allowedBlocks={ allowedBlocks } />
					</div> */}

				</div>
			</div>
		</div>
	);
};
export default save;
