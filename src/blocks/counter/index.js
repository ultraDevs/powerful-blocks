import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/counter';

const settings = {
	title: __( 'Counter', 'powerful-blocks' ),
	description: __(
		'Counter - Developed By ultraDevs',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
	},
	keywords: [
		'ultrablocks',
		'counter',
		__( 'Counter', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
