import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/testimonial';

const settings = {
	title: __( 'Testimonial', 'powerful-blocks' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'powerful-blocks'
	),
	icon,

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
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
};

export { name, settings };
