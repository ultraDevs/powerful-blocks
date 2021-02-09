const {
    __,
} = wp.i18n;

const {
    createBlock,
} = wp.blocks;

const { registerPlugin } = wp.plugins;

const {
    Component,
    render,
} = wp.element;

const { compose } = wp.compose;

const {
    withDispatch,
} = wp.data;

const ToolBar = ( props ) => {
    const {
        insertBlocks
    } = props;
    const toolbar = document.querySelector( '.edit-post-header__toolbar' );
    if ( toolbar ) {
        const LibraryButton = () => (
            <div className="pb-template-toolbar">
                <button
                    onClick={ ( e ) => {
                        e.preventDefault();

                        insertBlocks( createBlock( 'powerful-blocks/templates', {
                            showModal: true,
                        } ) );
                    } }
                >
                    PB Templates
                </button>
            </div>
        );
        const PBToolbBar = document.querySelector( '.pb-template-toolbar' );

        if ( ! PBToolbBar ) {
            const tBar = document.createElement('div');
            toolbar.appendChild( tBar );
            render( <LibraryButton />, tBar );
        }

    }
    return null;
};

registerPlugin( 'pb-toolbar-templates', {
    render: compose(
        withDispatch( ( dispatch ) => {
            const {
                insertBlocks,
            } = dispatch( 'core/block-editor' );

            return {
                insertBlocks,
            };
        } ),
    )( ToolBar ),
} );