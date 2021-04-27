const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	stars: {
		type: 'number',
		default: 5,
	},
	rating: {
		type: 'number',
		default: 5,
	},

	color: {
		type: 'string',
		default: '#ffb900',
	},

	iconAlign: {
		type: 'string',
		default: 'center',
	},

	sizeType: {
		type: 'string',
		default: 'px',
	},

	size: {
		type: 'number',
		default: 18,
	},

	sizeTablet: {
		type: 'number',
		default: 17,
	},

	sizeMobile: {
		type: 'number',
		default: 16,
	},
};

export default attributes;
