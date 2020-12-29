import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Styles from './style';

const save = ( props ) => {
	const { attributes } = props;

	const { blockId } = attributes;

	return (
		<div>
			<Styles { ...{ attributes } } />
			<div id={ `pb-default-${ blockId }` }>
				<h1>dd</h1>
			</div>
		</div>
	);
};
export default save;
