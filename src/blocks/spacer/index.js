import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/pb-spacer';

const settings = {
	title: __( 'PB Spacer', 'powerful-blocks' ),
	description: __(
		'PB Spacer - Developed By ultraDevs',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
	},
	keywords: [
		'ultrablocks',
		'pb-spacer',
		__( 'PB Spacer', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
