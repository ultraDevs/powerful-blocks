const { RichText, InnerBlocks, MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const { Button } = wp.components;
import classnames from 'classnames';

import Inspector from './inspector';
import { genClass, blockAttributes } from '../../helper';


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
		number,
		mPosition,
		endingNumber,

		numberPrefix,
		numberSuffix,
		easing,
		duration,
		delimiter,
		rounding,
		preset,
	} = attributes;

	const classes = genClass( attributes, 'edit'  );
	const blockAttr = blockAttributes( attributes, 'edit' );

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}


	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div id={ `pb-fun-factor-${ blockId }` }>
				<div
					className={ classnames(
						'pb-fun-factor-wrapper',
						props.className,
						...classes
					) }
					{ ... blockAttr }
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
						<div 
							className="pb-fun-factor-counter"
						>
						{ numberPrefix && (
							<span className="pb-fun-factor-number--prefix">
								{ numberPrefix }
							</span>
						) }
						<span 
							className="pb-fun-factor-number"
							data-settings = {
								JSON.stringify({
									from: number ? number : 0,
									to: endingNumber ? endingNumber : 0,
									delimiter: delimiter ? delimiter : '',
									duration: duration ? duration : '',
									easing: easing ? easing : '',
								})
							}
						>
							{ number ? number : '0' }
						</span>

						{ numberSuffix && (
							<span className="pb-fun-factor-number--suffix">
								{ numberSuffix }
							</span>
						) }

						</div>
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
