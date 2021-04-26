const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

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
					) }					
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
					{ ( 'after' === switchPosition || 'beforeAfter' === switchPosition ) && 
						Switcher()
					}
				</div>
			</div>
		</div>
	);
};
export default save;
