const { RichText, InnerBlocks, MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const { Button } = wp.components;
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

		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
        customID,
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
						props.className,
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
						`pb-info-box-${mPosition}`
					) }
					id = { customID ? customID : '' }
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
