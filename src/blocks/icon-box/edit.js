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
		icon,
		title,
		preset,

		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
		customID,
		
		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
        wrapperLinkNofollow,
	} = attributes;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-icon-box-${ blockId }` }>
				<div
					className={ classnames(
						'pb-icon-box-wrapper',
						props.className,
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
					) }
					id = { customID ? customID : '' }
					data-pb-link = { true === addWLink ? WrapperLink : '' }
				>
					<div className="pb-icon-box--m">
						<IconBox icon={ icon } iconClass = 'pb-icon-box--icon' />
					</div>
					<div className="pb-icon-box--body">
						<RichText
							tagName="h3"
							className="pb-icon-box--body__title"
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
