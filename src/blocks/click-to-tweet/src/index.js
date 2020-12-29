import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import './style.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

registerBlockType( 'powerful-blocks/click-to-tweet', {
	title: __( 'Click To Tweet', 'powerful-blocks' ),
	description: __(
		'Click To Tweet Block allows you to add button to create tweet.',
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
		__( 'Click To Tweet', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
} );
