import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Styles from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar as faStarFull,
	faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const save = ( props ) => {
	const { attributes } = props;

	const { blockId, stars, rating, color } = attributes;

	const fullStar = Math.floor( rating );
	const halfStar = rating % 1 === 0 ? 0 : 1;
	const emptyStar = stars - ( fullStar + halfStar );

	return (
		<div>
			<Styles { ...{ attributes } } />
			<div id={ `pb-star-rating-${ blockId }` }>
				<div className="pb-star-rating-wrapper">
					<div className="pb-star-rating--icon">
						{ fullStar
							? [
									...Array( fullStar ).keys(),
							  ].map( ( item, index ) => (
									<FontAwesomeIcon
										key={ index }
										icon={ faStarFull }
										color={ color }
									/>
							  ) )
							: null }
						{ halfStar ? (
							<FontAwesomeIcon
								icon={ faStarHalfAlt }
								color={ color }
							/>
						) : null }
						{ emptyStar
							? [
									...Array( emptyStar ).keys(),
							  ].map( ( item, index ) => (
									<FontAwesomeIcon
										key={ index }
										icon={ faStarEmpty }
										color={ color }
									/>
							  ) )
							: null }
					</div>
				</div>
			</div>
		</div>
	);
};
export default save;
