const { __ } = wp.i18n;
const { 
	Modal,
	Button,
} = wp.components;
const {
    compose,
} = wp.compose;

import classnames from 'classnames';

const {
    withDispatch,
} = wp.data;

const {
    parse,
} = wp.blocks;

const {
	insertBlocks,
	replaceBlocks,
} = wp.data.dispatch( 'core/block-editor' );

import Inspector from './inspector';

import { genClass, blockAttributes } from '../../helper';


import './editor.scss';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		removeBlock
	} = props;

	const {
		blockId,
		showModal,
	} = attributes;

	const classes = genClass( attributes, 'edit'  );
	const blockAttr = blockAttributes( attributes, 'edit' );

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}
    const openModal = () => setAttributes( { showModal: true } );
	const closeModal = () => {
		setAttributes( { showModal: false } );
		removeBlock( props.clientId );
	};

	let content = '<!-- wp:powerful-blocks/block-wrapper {"blockId":"37c04da05a9a43b2bbc21c9d545993f6","backgroundType":"gradient","gradientValue":"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(24,169,231) 19%,rgb(155,81,224) 100%)","padding":{"top":"5em","left":"0em","right":"0em","bottom":"5em"},"blockWidth":"custom","blockCustomWidthType":"%","align":"full"} --><div class="wp-block-powerful-blocks-block-wrapper alignfull"><div id="pb-block-wrapper-37c04da05a9a43b2bbc21c9d545993f6"><div class="pb-block-wrapper pb-block-advanced--wrapper pb-b-e--width"><!-- wp:media-text {"mediaPosition":"right","mediaId":15,"mediaLink":"http://powerfulblocks.dev/home-page/portfolio_n/","mediaType":"image"} --><div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="http://powerfulblocks.dev/wp-content/uploads/2021/02/Portfolio_n.png" alt="" class="wp-image-15 size-full"/></figure><div class="wp-block-media-text__content"><!-- wp:heading {"textColor":"white"} --><h2 class="has-white-color has-text-color">Powerful Blocks For Gutenberg</h2><!-- /wp:heading --><!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button {"borderRadius":50,"style":{"color":{"gradient":"linear-gradient(279deg,rgb(29,149,219) 0%,rgb(198,21,192) 0%,rgb(155,81,224) 100%)"}},"textColor":"white","className":"is-style-outline"} --><div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-white-color has-text-color has-background" href="" style="border-radius:50px;background:linear-gradient(279deg,rgb(29,149,219) 0%,rgb(198,21,192) 0%,rgb(155,81,224) 100%)" target="_blank" rel="noreferrer noopener">Free Download</a></div><!-- /wp:button --></div><!-- /wp:buttons --></div></div><!-- /wp:media-text --></div></div></div><!-- /wp:powerful-blocks/block-wrapper -->';

	const insertTemplate = ( content, replaceBlockId ) => {
		const parsedBlocks = parse( content );

		if ( parsedBlocks.length ) {
			if ( replaceBlockId ) {
				replaceBlocks( replaceBlockId, parsedBlocks );
			} else {
				insertBlocks( parsedBlocks );
			}
		}
	};

	const addTemplate = () => {
		insertTemplate( content, props.clientId );
		setAttributes({ showModal: false });
	}

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<div id={ `pb-templates-${ blockId }` }>
				<div
					className={ classnames(
						'pb-templates-wrapper',
						props.className,
						...classes
					) }
					{ ... blockAttr }
				>
					<h3>Insert Powerful Blocks Templates</h3>
					<div className="pb-templates-open">
						<Button isSecondary onClick={ openModal }>Open Templates</Button>
					</div>

					{ true === showModal && (
						<Modal
							className="pb-templates-modal"
							shouldCloseOnClickOutside = { true }
						>
							<div class="components-modal__header">
								<div class="components-modal__header-heading-container">
									<h1 id="components-modal-header-0" className="components-modal__header-heading">Templates</h1>
								</div>
								<button 
									type="button" 
									className="components-button has-icon" 
									aria-label="Close dialog"
									onClick = {
										() => closeModal()
									}
								>
									<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
										<path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
									</svg>
								</button>
							</div>
							<div className="pb-templates-content">
								<div className="pb-templates-con--category">
									<ul>
										<li className="c-active">All Categories</li>
										<li>Hero</li>
										<li>Features</li>
										<li>Hero</li>
										<li>Features</li>
										<li>Hero</li>
										<li>Features</li>
										<li>Hero</li>
										<li>Features</li>
										<li>Hero</li>
										<li>Features</li>
										<li>Hero</li>
										<li>Features</li>
										<li>Hero</li>
										<li>Features</li>
										<li>Hero</li>
										<li>Features</li>
									</ul>
								</div>
								<div className="pb-templates-con--list">
									<div className="pb-templates-list-item"
										onClick = { () => { addTemplate(); }
										}
									>
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
									<div className="pb-templates-list-item">
										<div className="pb-templates-list-item--preview">
											<img src="https://via.placeholder.com/300x200.png?text=Powerful+Blocks" />
										</div>
										<div className="pb-templates-list-item--info">
											<h3>Template Name</h3>
										</div>
									</div>
								</div>
							</div>
						</Modal>
					) }
				</div>
			</div>
		</>
	);
};
export default compose( [
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
