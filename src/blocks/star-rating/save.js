import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar as faStarFull,
	faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import classnames from 'classnames';


const save = ( props ) => {
	const { attributes } = props;

	const { 
		blockId,
		stars,
		rating,
		color,
		backgroundType,
		hideOnDesktop,
        hideOnTablet,
		hideOnMobile,
		blockWidth,
		customClass,
        customID,
	} = attributes;

	const fullStar = Math.floor( rating );
	const halfStar = rating % 1 === 0 ? 0 : 1;
	const emptyStar = stars - ( fullStar + halfStar );

	return (
		<div>
			<div id={ `pb-star-rating-${ blockId }` }>
				<div 
					className={ classnames(
						props.className,
						'pb-star-rating-wrapper',
						customClass,
						hideOnDesktop ? 'pb-hide-d' : '',
						hideOnTablet ? 'pb-hide-t' : '',
						hideOnMobile ? 'pb-hide-m' : '',
						blockWidth ? 'pb-b-e--width' : '',
						'image' === backgroundType ? 'pb-ab-bg--image' : '',
					) }
					id = { customID ? customID : '' }
				>
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
