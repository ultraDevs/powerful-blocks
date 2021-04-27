const { RichText, InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';

import Inspector from './inspector';

import './editor.scss';
import Styles from './style';
import IconBox from "../../helper/iconbox.js";

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		blockId,
		mType,
		icon,
		img,
		title,
		mPosition,

		preset,
	} = attributes;


	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}
	const TEMPLATE = [
		[ 'powerful-blocks/counter' ]	
	];
	const allowedBlocks = [ 'powerful-blocks/counter' ];

	setTimeout( function () {
		pbCounter();
	}, 500 );

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div 
				id={ `pb-fun-factor-${ blockId }` }
				className={ classnames(
					props.className,
					props.isSelected ? 'pb-is-selected' : '',
				) }
			>
				<div
					className={ classnames(
						'pb-fun-factor-wrapper',
						mPosition ? `pb-fun-factor-${mPosition}` : '',
					) }
				>
					<div className="pb-fun-factor--m">
						{ 'icon' === mType ? (
							<IconBox icon={ icon } iconClass = 'pb-fun-factor--icon' />
						) : (
							<>
								<div className="pb-fun-factor--image">
									<img src={ img.url } alt={ img.alt } />
								</div>
							</>
						) } 
					</div>
					<div className="pb-fun-factor--body">
						<InnerBlocks
							allowedBlocks={ allowedBlocks }
							templateLock="all"
							template={ TEMPLATE }
						/>
						<RichText
							tagName="h3"
							className="pb-fun-factor--body__title"
							value={ title }
							disableLineBreaks
							keepPlaceholderOnFocus={ true }
							onChange={ ( title ) => {
								setAttributes( { title } );
							} }
						/>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default edit;
