import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/accordion';

const settings = {
	title: __( 'Accordion', 'powerful-blocks' ),
	description: __(
		'Accordion - Developed By ultraDevs',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
	},
	keywords: [
		'ultrablocks',
		'accordion',
		'toggle',
		'show/hide',
		'faq',
		__( 'Accordion', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
