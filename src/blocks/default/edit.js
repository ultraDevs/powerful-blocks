const { RichText, InnerBlocks, MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const { Button } = wp.components;
import classnames from 'classnames';

import Inspector from './inspector';

import './editor.scss';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		blockId,
		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
		customID,
		customAttributes,

		enableCondition,

		inAnimation,
        outAnimation,
        inAnimationDuration,
        outAnimationDuration,
		
		addWLink,
        wrapperLink,
        wrapperLinkNewTab,
		wrapperLinkNofollow,
		
	} = attributes;

	const WrapperLink = JSON.stringify({
		'id': blockId ? blockId : 'pb-wl-r',
		'addLink': addWLink ? addWLink : false,
		'url': wrapperLink ? wrapperLink : false,
		'new_window': wrapperLinkNewTab ? wrapperLinkNewTab : false,
		'nofollow': wrapperLinkNofollow ? wrapperLinkNofollow : false,
	});

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	let extractAttribute = customAttributes ? customAttributes.split(/[,]+/) : '',
		finalAttr = {},
		eAttr = [];
	if ( extractAttribute ) {
		
		extractAttribute.forEach( ( attr, index ) => {
			eAttr.push( attr.trim().split('|') );
		});
		eAttr.map( ( attr, i ) => {
			finalAttr[ attr[0] ] = attr[1];
		});
	}


	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-default-${ blockId }` }>
				<div
					className={ classnames(
						'pb-default-wrapper',
						'pb-block-advanced--wrapper',
						props.className,
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
						true === enableCondition ? 'pb-block-conditions' : '',
						'' !== inAnimation ? `pb__animated pb__${inAnimation}` : '',
						'' !== outAnimation ? `pb__animated_out pb__out_${outAnimation}` : '',
						'' !== inAnimationDuration ? `pb-anim-dur__${inAnimationDuration}` : '',
						'' !== outAnimationDuration ? `pb-anim-out-dur__${outAnimationDuration}` : '',
					) }
					id = { customID ? customID : undefined }
					data-pb-link = { true === addWLink ? WrapperLink : undefined }
					{ ...finalAttr }
				>
					<h3>Default</h3>
				</div>
			</div>
		</>
	);
};

export default edit;
