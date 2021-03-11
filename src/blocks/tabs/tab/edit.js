const { InnerBlocks } = wp.blockEditor;
import classnames from 'classnames';


const {
    withSelect,
} = wp.data;

import './editor.scss';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		blockId,
		slug,
		currentTab
	} = attributes;

	const {
		hasChildBlocks,
	} = props;


	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	return (
		<>
			<div
				className={ classnames(
					'pb-tab-wrapper',
					props.className,
				) }
			>
				<InnerBlocks
					templateLock={ false }
					renderAppender={ (
						hasChildBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					) }
				/>
				
			</div>
		</>
	);
};

export default withSelect( ( select, props ) => {
    const { clientId } = props;
    const blockEditor = select( 'core/block-editor' );

    return {
        hasChildBlocks: blockEditor ? 0 < blockEditor.getBlockOrder( clientId ).length : false,
    };
} )( edit );