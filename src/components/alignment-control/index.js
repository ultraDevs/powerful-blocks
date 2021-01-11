const { BaseControl, Button, ButtonGroup } = wp.components;

import './editor.scss';

const AlignmentControl = ( props ) => {
	const alignment = props.value;
	const type = props.type || null;

	const TEXT_ALIGNS = [
		{ icon: 'editor-alignleft', value: 'left' },
		{ icon: 'editor-aligncenter', value: 'center' },
		{ icon: 'editor-alignright', value: 'right' },
	];

	const FLEX_ALIGNS = [
		{ icon: 'editor-alignleft', value: 'flex-start' },
		{ icon: 'editor-aligncenter', value: 'center' },
		{ icon: 'editor-alignright', value: 'flex-end' },
	];

	return (
		<BaseControl
			label={ props.label }
			className="pb-control--alignment"
		>
			<ButtonGroup className="align-btn-group">
				{ ( type === 'text' || type === null ) &&
					TEXT_ALIGNS.map( ( align ) => (
						<Button
							key={ align.value }
							isPrimary={ alignment === align.value }
							onClick={ () => {
								props.onChange( align.value );
							} }
							icon={ align.icon }
						/>
					) ) }
				{ type === 'flex' &&
					FLEX_ALIGNS.map( ( align ) => (
						<Button
							key={ align.value }
							isPrimary={ alignment === align.value }
							onClick={ () => {
								props.onChange( align.value );
							} }
							icon={ align.icon }
						/>
					) ) }
			</ButtonGroup>
		</BaseControl>
	);
};

export default AlignmentControl;
