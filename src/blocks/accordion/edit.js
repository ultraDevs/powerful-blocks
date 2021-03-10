const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';
const { useState } = wp.element;

import Inspector from './inspector';

import { genClass, blockAttributes } from '../../helper';
import IconBox from "../../helper/iconbox.js";


import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

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

	const classes = genClass( attributes, 'edit'  );
	const blockAttr = blockAttributes( attributes, 'edit' );

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}
	const updateAccordion = ( value, index, key ) =>{
		let nAccordions = [ ...accordions ];
		nAccordions[index][key] = value;
		setAttributes({ accordions: nAccordions });
	}

	const settings = JSON.stringify({
		type: accordionType ? accordionType : '',
		speed: toggleSpeed ? toggleSpeed : '',
	});

	let currentA = 'pb-a-0';
	const [ atab, setATab ] = useState( currentA );

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-accordion-${ blockId }` }>
				<div
					className={ classnames(
						'pb-accordion-wrapper',
						props.className,
						...classes
					) }
					{ ... blockAttr }
					data-settings = {
						settings ? settings : undefined
					}
				>
				{
					accordions.map( ( accordion, key ) => (
						<div className="pb-accordion-item">
							<div 
								className={ classnames(
										"pb-accordion-header",
										`pb-a-${key}` === atab ? 'pb-active' : ''
									)
								}
								onClick = { () => {
									`pb-a-${key}` === atab ? setATab( '' ) : setATab( `pb-a-${key}`);
									setAttributes( { activeItem: `item-${key}` } )
								}}
							>
							{ true === accordion.enableIcon ? (
								<IconBox icon={ accordion.icon } iconClass = 'pb-accordion-icon' />
							) : '' }
								{/* <span className="pb-accordion-title">
									
								</span> */}
								<RichText
									tagName={ titleTag }
									className="pb-accordion-title"
									placeholder={ __(
										'Accordion Title',
										'powerful-blocks'
									) }
									value={ accordion.title }
									disableLineBreaks
									keepPlaceholderOnFocus={ true }
									onChange={ ( title ) => {
										updateAccordion( title, key, 'title' );
									} }

								/>
								{
									true === toggleIcon ? (
										<>
										<div className="pb-accordion-toggle-icon">
											{
												`pb-a-${key}` === atab ? (
													<IconBox icon={ toggleCloseIcon } iconClass = 'pb-accordion-toggle-icon--close' />
												) : (
													<IconBox icon={ toggleOpenIcon } iconClass = 'pb-accordion-toggle-icon--open' />
												)
											}
										</div>
										</>
									) : ''
								}
							</div>
							<div 
								className={ classnames(
										"pb-accordion-content",
										`pb-a-${key}` === atab ? 'pb-active' : ''
									)
								}
							>
								<RichText
									tagName="div"
									className="pb-accordion-content--w"
									placeholder={ __(
										'Accordion Content',
										'powerful-blocks'
									) }
									value={ accordion.content }
									disableLineBreaks
									keepPlaceholderOnFocus={ true }
									onChange={ ( content ) => {
										updateAccordion( content, key, 'content' );
									} }
								/>
							</div>
						</div>
					))
				}
				</div>
			</div>
		</>
	);
};

export default edit;
