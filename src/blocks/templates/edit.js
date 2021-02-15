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
import apiFetch from '@wordpress/api-fetch';

const { useState } = wp.element;

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
    const openModal = () => { 
		setAttributes( { showModal: true } );
	};
	const closeModal = () => {
		setAttributes( { showModal: false } );
		removeBlock( props.clientId );
	};

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

	let cTemplates = [];
    const [ templates, updateTemplates ] = useState( cTemplates );

	let cCategories = [];
    const [ categories, updateCategories ] = useState( cCategories );
	
	let cCategory = '';
    const [ ucCategory, updatecCategory ] = useState( cCategory );

	const addTemplate = (content) => {
		insertTemplate( content, props.clientId );
		setAttributes({ showModal: false });
	}

	const onClickCategory = ( slug ) => {
		updatecCategory( slug );
		allTemplates( slug, 'sections' );
	};

	let allTemplates = ( category, type ) => {
		apiFetch( {
			url: `${ UDPB.templates_api }templates`,
			method: 'POST',
			data: { 
				type: type,
				category: category
			},
		})
		.then( function(data) {
			updateTemplates( data.templates);
		})
		.catch( function(error) {
			console.log(error);
		});
	};
	if ( 0 === templates.length ) {
		allTemplates( ucCategory, 'sections' );
	}

	let allCategories = () => {
		apiFetch( {
			url: `${ UDPB.templates_api }template_categories`,
			method: 'POST',
			data: { type: 'sections' },
		})
		.then( function(data) {
			updateCategories( data.categories );
		})
		.catch( function(error) {
			console.log(error);
		});
	};
	if ( 0 === categories.length ) {
		allCategories();
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
										{/* <li className="c-active">All Categories</li> */}
										{
											categories.map( ( category, key ) => {
												return (
													<li 
														key={key}
														onClick = { ( ) => {
															onClickCategory( category.slug );
														}}
														className = { category.slug === ucCategory ? "c-active" : undefined }
													>
													{ category.name }
													</li>
												);
											})
										}
										
									</ul>
								</div>
								<div className="pb-templates-con--list">
									
									{ templates.map( ( template, key ) => {
										return (
											<div className="pb-templates-list-item"
												onClick = { () => { addTemplate(template.content); }
												}
											>
												<div className="pb-templates-list-item--preview">
													<img src={ template.thumbnail } title={ template.title } alt={ template.title } />
												</div>
												<div className="pb-templates-list-item--info">
													<h3>{ template.title }</h3>
												</div>
											</div>
										);
										})
									}
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
