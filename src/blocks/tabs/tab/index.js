import { __ } from '@wordpress/i18n';

import './editor.scss';

import attributes from './attributes';
import edit from './edit';
import save from './save';

const name = 'powerful-blocks/tab';

const settings = {
	title: __( 'Tab', 'powerful-blocks' ),
	description: __(
		'Tab - Developed By ultraDevs',
		'powerful-blocks'
	),

	supports: {
		html: false,
	},
	keywords: [
		'ultrablocks',
		'tab',
		__( 'Tab', 'powerful-blocks' ),
	],

	parent: ['powerful-blocks/tabs'],

	attributes,

	getEditWrapperProps( attributes ) {
        return { 
			'data-tab': attributes.slug,
		};
    },

	edit,

	save,

};

export { name, settings };
