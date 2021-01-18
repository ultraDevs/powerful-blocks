const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import classnames from 'classnames';
import IconBox from "../../helper/iconbox.js";
import { genClass, blockAttributes } from '../../helper';

const save = ( { attributes, className } ) => {
	const {
		blockId,
		icon,
		title,

	} = attributes;

	const classes = genClass( attributes, 'save'  );
	const blockAttr = blockAttributes( attributes, 'save' );

	return (
		<div>
			<div id={ `pb-icon-box-${ blockId }` }>
				<div
					className={ classnames(
						className,
						'pb-icon-box-wrapper',
						...classes
					) }
					{ ... blockAttr }
				>
					<div className="pb-icon-box--m">
						<IconBox icon={ icon } iconClass = 'pb-icon-box--icon' />
					</div>
					<div className="pb-icon-box--body">
						<RichText.Content
							tagName="h3"
							className="pb-icon-box--body__title"
							value={ title }
						/>
						
					</div>
				</div>
			</div>
		</div>
	);
};
export default save;
