import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/content-toggle';

const settings = {
	title: __( 'Content Toggle', 'powerful-blocks' ),
	description: __(
		'Content Toggle - Developed By ultraDevs',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
	},
	keywords: [
		'ultrablocks',
		'Content Toggle',
		__( 'Content Toggle', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
