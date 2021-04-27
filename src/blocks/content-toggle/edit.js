const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
const {
    compose,
} = wp.compose;

const {
    withSelect,
    withDispatch,
} = wp.data;

import classnames from 'classnames';

import Inspector from './inspector';

import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { 
		attributes, 
		setAttributes,
		block,
		getBlocks,
		replaceInnerBlocks,
		isSelectedBlockInRoot,
		clientId,
	} = props;

	const {
		blockId,
		activeItem,
		primaryLabel,
		secondaryLabel,
		switchStyle,
		switchPosition,
		toggles,
	} = attributes;

	const getTogglesTemplate = () => {

        const result = toggles.map( ( toggleData ) => [ 'powerful-blocks/toggler', toggleData ] );

        return result;
	}

	const css = `.editor-styles-wrapper [data-block="${ props.clientId }"] .pb-content-toggle-contents .block-editor-block-list__layout [data-toggle="${ activeItem }"] {
		display: block;
	}`;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}
	const allowedBlocks = [ 'powerful-blocks/toggler' ];
	
	pbContentToggle();

	const Switcher = () => {
		return(
			<div className="pb-content-toggle-switch-wrapper">
				<RichText
					tagName="div"
					className={ classnames(
						'pb-toggle-primary-label',
						'pb-toggle-label',
						'primary' === activeItem ? 'pb-toggle-active'
							: ''
					) }
					value={ primaryLabel }
					onChange={ ( primaryLabel ) =>
						setAttributes( { primaryLabel } )
					}
					placeholder={ __(
						'Primary Label',
						'powerful-blocks'
					) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					disableLineBreaks
					keepPlaceholderOnFocus={ true }
					unstableOnFocus={ () => setAttributes({ activeItem: 'primary' }) }
				/>
				<div 
					className={
						classnames(
							'pb-content-toggle-switch',
							switchStyle ? `pb-toggle-${switchStyle}` : '',
							activeItem === 'secondary' ? 'pb-toggle-switch-on' : '',
						)
						
					}
					
				>
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
				<RichText
					tagName="div"
					className={ classnames(
						'pb-toggle-secondary-label',
						'pb-toggle-label',
						activeItem === 'secondary'
							? 'pb-toggle-active'
							: ''
					) }
					value={ secondaryLabel }
					onChange={ ( secondaryLabel ) =>
						setAttributes( { secondaryLabel } )
					}
					placeholder={ __(
						'Secondary Label',
						'powerful-blocks'
					) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					disableLineBreaks
					keepPlaceholderOnFocus={ true }
					unstableOnFocus={ () => setAttributes({ activeItem: 'secondary' }) }
				/>
			</div>
		);
	};


	return [
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<style>{css}</style>
			<div id={ `pb-content-toggle-${ blockId }` }>
				<div
					className={ classnames(
						'pb-content-toggle-wrapper',
						props.className,
						// activeItem ? `pb-content-toggle-${activeItem}` : undefined,
					) }
					data-a-switch = { activeItem ? activeItem : undefined }
				>
					{ ( 'before' === switchPosition || 'beforeAfter' === switchPosition ) && 
						Switcher()
					}
					<div 
						className="pb-content-toggle-contents"
					>
						<InnerBlocks 
							allowedBlocks={ allowedBlocks }
							templateLock="all"
							template={ getTogglesTemplate() }
						/>
					</div>
					{ ( 'after' === switchPosition || 'beforeAfter' === switchPosition ) && 
						Switcher()
					}
				</div>
			</div>
		</>
	];
};

export default compose( [
    withSelect( ( select, ownProps ) => {
        const {
            getBlock,
            getBlocks,
            isBlockSelected,
            hasSelectedInnerBlock,
        } = select( 'core/block-editor' );

        const { clientId } = ownProps;

        return {
            getBlocks,
            block: getBlock( clientId ),
            isSelectedBlockInRoot: isBlockSelected( clientId ) || hasSelectedInnerBlock( clientId, true ),
        };
    } ),
    withDispatch( ( dispatch ) => {
        const {
            updateBlockAttributes,
            removeBlock,
            replaceInnerBlocks,
        } = dispatch( 'core/block-editor' );

        return {
            updateBlockAttributes,
            removeBlock,
            replaceInnerBlocks,
        };
    } ),
] )( edit );