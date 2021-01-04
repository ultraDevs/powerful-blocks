import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/click-to-tweet';

const settings = {
	title: __( 'Click To Tweet', 'powerful-blocks' ),
	description: __(
		'Click To Tweet Block allows you to add button to create tweet.',
		'powerful-blocks'
	),
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
};

export { name, settings };