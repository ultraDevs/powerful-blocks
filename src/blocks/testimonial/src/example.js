import { __ } from '@wordpress/i18n';

const example = {
	attributes: {
		title: __( 'Alert Title', 'powerful-blocks' ),
		content: __(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			'powerful-blocks'
		),
	},
};

export default example;
