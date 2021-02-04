import { __ } from '@wordpress/i18n';

import './editor.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/star-rating';

const settings = {
	title: __( 'Star Rating', 'powerful-blocks' ),
	description: __(
		'Star Rating Block allows you to add star ratings using Gutenberg Editor. You can change star color, rating, stars and many more things!',
		'powerful-blocks'
	),
	category: 'powerful-blocks',
	icon,

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
	},
	keywords: [
		'ultrablocks',
		'ultra blocks',
		__( 'Star Rating', 'powerful-blocks' ),
	],

	attributes,

	edit,

	save,

	example,
};

export { name, settings };
