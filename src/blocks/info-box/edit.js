const { RichText } = wp.blockEditor;
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
		content,
		mPosition,
		preset,
	} = attributes;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}


	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-info-box-${ blockId }` }>
				<div
					className={ classnames(
						'pb-info-box-wrapper',
						mPosition ? `pb-info-box-${mPosition}` : '',
						props.className,
					) }
				>
					<div className="pb-info-box--m">
						{ 'icon' === mType ? (
							<IconBox icon={ icon } iconClass = 'pb-info-box--icon' />
						) : (
							<>
								<div className="pb-info-box--image">
									<img src={ img.url } alt={ img.alt } />
								</div>
							</>
						) } 
					</div>
					<div className="pb-info-box--body">
						<RichText
							tagName="h3"
							className="pb-info-box--body__title"
							value={ title }
							disableLineBreaks
							keepPlaceholderOnFocus={ true }
							onChange={ ( title ) => {
								setAttributes( { title } );
							} }
						/>
						<div className="pb-info-box--body__content">
							<RichText
								tagName="p"
								value={ content }
								disableLineBreaks
								keepPlaceholderOnFocus={ true }
								onChange={ ( content ) => {
									setAttributes( { content } );
								} }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default edit;
