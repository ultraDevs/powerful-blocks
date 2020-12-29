import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import './style.scss';

import icon from './icon';
import attributes from './attributes';
import example from './example';
import edit from './edit';
import save from './save';

registerBlockType( 'powerful-blocks/star-rating', {
	title: __( 'Star Rating', 'powerful-blocks' ),
	description: __(
		'Star Rating Block allows you to add star ratings using Gutenberg Editor. You can change star color, rating, stars and many more things!',
		'powerful-blocks'
	),
	category: 'powerful-blocks',
	icon,

	supports: {
		html: false,
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
} );
