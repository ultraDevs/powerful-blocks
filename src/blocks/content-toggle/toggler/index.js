import { __ } from '@wordpress/i18n';

import './editor.scss';

import attributes from './attributes';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/toggler';

const settings = {
	title: __( 'Toggle', 'powerful-blocks' ),
	description: __(
		'Toggle - Developed By ultraDevs',
		'powerful-blocks'
	),

	supports: {
		html: false,
	},
	keywords: [
		'ultrablocks',
		'toggle',
		__( 'Toggle', 'powerful-blocks' ),
	],

	parent: ['powerful-blocks/content-toggle'],

	attributes,

	getEditWrapperProps( attributes ) {
        return { 
			'data-toggle': attributes.slug,
		};
    },

	edit,

	save,

};

export { name, settings };
