import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import './style.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

registerBlockType( 'powerful-blocks/testimonial', {
	title: __( 'Testimonial', 'powerful-blocks' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
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
		__( 'Testimonial', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
} );
