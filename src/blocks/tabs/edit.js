const { RichText, InnerBlocks, MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const {
    compose,
} = wp.compose;

const {
    withSelect,
    withDispatch,
} = wp.data;

const { createBlock } = wp.blocks;

import classnames from 'classnames';

import Inspector from './inspector';

const {
    Button,
	Tooltip,
	Dashicon,
} = wp.components;

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
		tabs,
		currentTab,
		tabsType,
		tabsVAlign,
	} = attributes;

	const getTabsTemplate = () => {

        const result = tabs.map( ( tabData ) => [ 'powerful-blocks/tab', tabData ] );

        return result;
	}
	
	const getTabs = () => {
        return props.block.innerBlocks;
	}

	const css = `.editor-styles-wrapper [data-block="${ props.clientId }"] .pb-tabs-content .block-editor-block-list__layout [data-tab="${ currentTab }"] {
		display: block;
	}`;

	const onChangeLabel = ( value, i ) => {

		const {
            setAttributes,
            attributes,
            updateBlockAttributes,
        } =props;

        const {
            tabs = [],
        } = attributes;

		const tabsI = getTabs();
		

		const newSlug = `tab-${ i + 1 }`;

        if ( tabsI[ i ] ) {

            const newTabsData = tabs.map( ( oldTabData, newIndex ) => {
				
                if ( i === newIndex ) {
                    return {
                        ...oldTabData,
                        ...{
                            title: value,
                            slug: newSlug,
                        },
                    };
                }

                return oldTabData;
            } );

            setAttributes( {
                currentTab: newSlug,
                tabs: newTabsData,
			} );
            updateBlockAttributes( tabsI[ i ].clientId, {
                slug: newSlug,
            } );
        }
	}
	
	const removeTab = ( i ) => {

        if ( 1 >= block.innerBlocks.length ) {
            props.removeBlock( block.clientId );
        } else if ( block.innerBlocks[ i ] ) {
            props.removeBlock( block.innerBlocks[ i ].clientId );

            if ( tabs[ i ] ) {
                const newTabsData = [ ...tabs ];
                newTabsData.splice( i, 1 );

                const innerBlocks = [ ...getBlocks( block.clientId ) ];
                innerBlocks.splice( i, 1 );

                replaceInnerBlocks( block.clientId, innerBlocks, false );

                setAttributes( {
                    tabs: newTabsData,
                } );
            }
        }
	};

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}
	const allowedBlocks = [ 'powerful-blocks/tab' ];

	pbTabs();

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<style>{css}</style>
			<div id={ `pb-tabs-${ blockId }` }>
				<div
					className={ classnames(
						'pb-tabs-wrapper',
						props.className,
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
							return(
								<>
									<div className="pb-tabs--w">
										<RichText
											className= {
												classnames(
													'pb-tabs--item',
													tabActive ? 'pb-tab-active' : undefined,
												)
											}
											tagName="span"
											placeholder={ __( 'Tab label', 'powerful-blocks' ) }
											value={ tab.title }
											data-tab={ tab.slug }
											unstableOnFocus={ () => setAttributes( { currentTab: tab.slug } ) }
											onChange={ ( title ) => {
												onChangeLabel( title, key );
											} }
											withoutInteractiveFormatting
											keepPlaceholderOnFocus
											href={ `#${ tab.slug }` }
										/>
										<Button
											className="pb-tabs-btn--delete"
											onClick={ () => {
												removeTab( key);
											} }
										>
											<Dashicon icon="trash" />
										</Button>
									</div>
								</>
							)
						})
					}
					{ isSelectedBlockInRoot ? (
					<Tooltip text={ __( 'Add New Tab', 'powerful-blocks' ) }>
						<Button
							className="pb-tabs-btn--add-new"
							icon={ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" ariaHidden="true" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" /></svg> }
							onClick={ () => {
								const newTabsData = [ ...tabs ];
								const newDataLength = tabs.length + 1;

								newTabsData.push( {
									slug: `tab-${ newDataLength }`,
									title: `Tab ${ newDataLength }`,
								} );

								const block = createBlock( 'powerful-blocks/tab', { slug: `tab-${ newDataLength }`, title: `Tab ${ newDataLength }` } );

								let innerBlocks = getBlocks( clientId );
								innerBlocks = [
									...innerBlocks,
									block,
								];

								replaceInnerBlocks( clientId, innerBlocks, false );

								setAttributes( { tabs: newTabsData } );
							} }
						/>
					</Tooltip>
				) : '' }
					</div>
					
					<div 
						className={ classnames(
								"pb-tabs-content",
							)
						}
					>
						<InnerBlocks 
							allowedBlocks={ allowedBlocks }
							templateLock="all"
							template={ getTabsTemplate() }
						/>
					</div>
				</div>
			</div>
		</>
	);
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