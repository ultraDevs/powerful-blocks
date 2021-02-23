import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/advanced-typography';

const settings = {
	title: __( 'Advanced Typography', 'powerful-blocks' ),
	description: __(
		'Advanced Typography will help you to add Font Family, Style, Size, Weight, Text Transform, Text Decorations etc. h1-h6 and p tag',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
	},
	keywords: [
		'ultrablocks',
		'advanced typography',
		__( 'advanced-typography', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
