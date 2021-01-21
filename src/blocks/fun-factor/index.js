import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/fun-factor';

const settings = {
	title: __( 'Fun Factor', 'powerful-blocks' ),
	description: __(
		'Fun Factor - Developed By ultraDevs',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
	},
	keywords: [
		'ultrablocks',
		'fun-factor',
		'counter',
		__( 'Fun Factor', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
