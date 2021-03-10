const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
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
		icon,
		title,
		badgeText,
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
			<div id={ `pb-icon-box-${ blockId }` }>
				<div
					className={ classnames(
						'pb-icon-box-wrapper',
						props.className,
						...classes
					) }
					{ ... blockAttr }
				>
					{ badgeText ? (
						<>
							<div className="pb-icon-box--badge">
								{ badgeText }
							</div>
						</>
					) : '' }
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
