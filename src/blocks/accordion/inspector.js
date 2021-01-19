const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	RangeControl,
	BaseControl,
	Dropdown,
	Button,
	ButtonGroup,
	TabPanel,
	Dashicon
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';
import faIcons from "../../helper/faIcons.js";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";

import {
	ResponsiveRangeControl,
	ResponsiveBoxControl,
	ColorPickerControl,
	ImageControl,
	AlignmentControl,
	TypographyControl,
	BorderControl,
	ShadowControl
} from '../../components';

import Advanced from '../../helper/advanced';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		accordions,
	} = attributes;

	let currentTab = 'content';
	const [ tab, setTab ] = useState( currentTab );

	let currentR = 'pb-r-0';
	const [ repeater, setRepeater ] = useState( currentR );

	const updateAccordion = ( value, index, key ) =>{
		let nAccordions = [ ...accordions ];
		nAccordions[index][key] = value;
		setAttributes({ accordions: nAccordions });
	}


	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<ButtonGroup className="pb-panel-head--tabs__wrapper">
					<Button
						onClick = { () => {
							setTab('content');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'content' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="edit"
					>
						{ __( 'Content', 'powerful-blocks' ) }
					</Button>
					<Button
						onClick = { () => {
							setTab('style');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'style' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="color-picker"
					>
						{ __( 'Style', 'powerful-blocks' ) }
					</Button>
					<Button
						onClick = { () => {
							setTab('advanced');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'advanced' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="admin-generic"
					>
						{ __( 'Advanced', 'powerful-blocks' ) }
					</Button>
				</ButtonGroup>
				<div className="pb-panel-head--tabs__controls">
				{ 'content' === tab && (
					<>
						<PanelBody title={ __( 'Accordions', 'powerful-blocks' ) } initialOpen = { open }>
							<div className="pb-repeater--wrapper">
								{
									accordions.map( ( accordion, key ) => (
										<div 
										className={
											classnames(
												"pb-repeater--item",
												`pb-r-${key}` === repeater ? 'pb-repeater-active' : ''
											)
										}
										>
											<div
												className="pb-repeater-header"
												onClick = { () => {
													`pb-r-${key}` === repeater ? setRepeater( '' ) : setRepeater( `pb-r-${key}`);
												}}
											>
												<div className="pb-repeater-header--title">{accordion.title}</div>
												<div className="pb-repeater-header--duplicate">
													<Button
														// onClick = {}
														icon="no-alt"
													>
													</Button>
												</div>
												<div className="pb-repeater-header--del">
													<Button
														onClick = { 
															() => {
																let nAccordions = [ ...accordions ];
																nAccordions.splice( key, 1 );

																setAttributes( { accordions: nAccordions });
															}
														}
														icon="no-alt"
													>
													</Button>
												</div>
											</div>
											<div className="pb-repeater-controls">
												<TextControl
													label={ __( 'Title', 'powerful-blocks' ) }
													value={ accordion.title }
													onChange={ ( title ) => {
														updateAccordion( title, key, 'title' );
													} }
												/>
												<TextareaControl
													label={ __( 'Content', 'powerful-blocks' ) }
													value={ accordion.content }
													onChange={ ( content ) => {
														updateAccordion( content, key, 'content' );

													} }
												/>
												<ToggleControl
													label={ __( 'Icon', 'powerful-blocks' ) }
													checked={ accordion.enableIcon }
													onChange={ ( enableIcon ) => {
														updateAccordion( enableIcon, key, 'enableIcon' );
													} }
												/>
												{ 
													true === accordion.enableIcon ? (
														<BaseControl
															label={ __( 'Select Icon', 'powerful-blocks' ) }
															className="pb-icon-picker"
														>
															<FontIconPicker
																noSelectedPlaceholder = { <Dashicon icon="admin-tools" /> }
																icons = { faIcons }
																onChange = { (icon) => {
																	updateAccordion( icon, key, 'icon' );
																}}
																value = { accordion.icon }
																appendTo="body"
																isMulti={false}
															/>
														</BaseControl>
													) : ''
												}
											</div>
										</div>
									))
								}
								<div 
									className="pb-repeater-add-item pb-repeater--item"
									onClick = { () => {
										let key = accordions.length + 1;

										let nAccordions = [
											...accordions,
											{
												isDefault: true,
												icon: '',
												'title': `PB Accordion #${key}`,
												contentType: 'content',
												'content': __(
													'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
													'powerful-blocks'
												),
											}
										];
										setAttributes( { accordions: nAccordions });
										console.log( accordions);
									} }
								>
									<Dashicon icon="plus-alt2" />
									Add Accordion
								</div>
							</div>
						</PanelBody>
						<PanelBody
							title={ __( 'Image', 'powerful-blocks' ) }
							initialOpen={ false }
						>
							
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
						
					</>
				) }
				{ 'advanced' === tab && (
					<Advanced { ...{ attributes, setAttributes } } />
				) }
				</div>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
