import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/templates';

const settings = {
	title: __( 'Templates', 'powerful-blocks' ),
	description: __(
		'Templates - Developed By ultraDevs',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
	},
	keywords: [
		'ultrablocks',
		'Templates',
		__( 'Templates', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
