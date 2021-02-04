import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/alert-box';

const settings = {
	title: __( 'Alert Box', 'powerful-blocks' ),
	description: __(
		'A block to display Alert on the site.',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
	},
	keywords: [
		'ultrablocks',
		'ultra blocks',
		__( 'Alert Box', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,

	styles: [
		{
			name: 'info',
			label: __( 'Info', 'powerful-blocks' ),
			isDefault: true,
		},
		{
			name: 'success',
			label: __( 'Success', 'powerful-blocks' ),
		},
		{
			name: 'error',
			label: __( 'Error', 'powerful-blocks' ),
		},
		{
			name: 'warning',
			label: __( 'Warning', 'powerful-blocks' ),
		},
	],
};

export { name, settings };
