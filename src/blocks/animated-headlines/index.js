import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/animated-headlines';

const settings = {
	title: __( 'Animated Headlines', 'powerful-blocks' ),
	description: __(
		'Animated Headlines - Developed By ultraDevs',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
	},
	keywords: [
		'ultrablocks',
		'animated-headlines',
		'headlines',
		__( 'Animated Headlines', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
