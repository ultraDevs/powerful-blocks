const { InspectorControls, ColorPalette } = wp.blockEditor;
const {
	PanelBody,
	__experimentalBoxControl,
	SelectControl,
	ToggleControl,
	RangeControl,
	BaseControl,
	Dropdown,
	Button,
	ButtonGroup
} = wp.components;
const { __ } = wp.i18n;

const { useState } = wp.element;
import classnames from 'classnames';


import { ResponsiveRangeControl } from '../../../components';
import { ImageControl } from '../../../components';
import { AlignmentControl } from '../../../components';
import Advanced from '../../../helper/advanced';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {} = attributes;

	let currentTab = 'layout';

	const [ tab, setTab ] = useState( currentTab );

	return (
		<InspectorControls>
			<div className="pb-panel-head--tabs">
				<ButtonGroup className="pb-panel-head--tabs__wrapper">
					<Button
						onClick = { () => {
							setTab('layout');
						}}
						className = {
							classnames(
								"pb-panel-head--tab",
								'layout' === tab ? 'pb-ph-tab--active' : '',
							)
						}
						icon="layout"
					>
						{ __( 'Layout', 'powerful-blocks' ) }
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
						icon="edit"
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
				{ 'layout' === tab && (
					<>
						<PanelBody title={ __( 'Layout', 'powerful-blocks' ) } initialOpen = { open }>
						</PanelBody>
						<PanelBody
							title={ __( 'Content', 'powerful-blocks' ) }
							initialOpen = { false }
						>
						</PanelBody>
					</>
				) }
				{ 'style' === tab && (
					<>
						<PanelBody
							title={ __( 'Image', 'powerful-blocks' ) }
						>
						</PanelBody>
						<PanelBody
							title={ __( 'Title', 'powerful-blocks' ) }
							initialOpen = { false }
						>
						</PanelBody>
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
