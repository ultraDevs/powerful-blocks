import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import './style.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

registerBlockType( 'powerful-blocks/default', {
	title: __( 'Default', 'powerful-blocks' ),
	description: __(
		'Default Block allows you to add ',
		'powerful-blocks'
	),
	category: 'powerful-blocks',
	icon,

	supports: {
		html: false,
	},
	keywords: [
		'ultrablocks',
		'ultra blocks',
		__( 'Default', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,

});
