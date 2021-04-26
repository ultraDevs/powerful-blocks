import attrs from '../helper/attributes';
const addCustomAttr = ( settings, name ) => {
    if ( typeof settings.attributes !== 'undefined' && name.includes("core/")) {
        let cAttr = {
            blockId: {
                type: 'string',
                default: undefined,
            },

            pbFontFamily: {
                type: 'string',
                default: '',
            },

            pbFontSize: {
                type: 'number',
                default: '',
            },
            pbFontSizeTablet: {
                type: 'number',
                default: '',
            },
            pbFontSizeMobile: {
                type: 'number',
                default: '',
            },
            
            pbFontSizeType: {
                type: 'string',
                default: 'px',
            },
            pbFontStyle: {
                type: 'string',
                default: 'normal',
            },
            
            pbFontWeight: {
                type: 'string',
                default: 'normal',
            },
            pbTextTransform: {
                type: 'string',
                default: '',
            },
            pbTextDecoration: {
                type: 'string',
                default: '',
            },
            pbLetterSpacing: {
                type: 'number',
                default: '',
            },
            pbLineHeight: {
                type: 'number',
                default: '',
            },
        };
        let finalAttributes = { ...attrs, ...cAttr };
        settings.attributes = Object.assign( settings.attributes, finalAttributes );
    }
    return settings;
}
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'powerful-blocks/custom-attribute',
	addCustomAttr
);